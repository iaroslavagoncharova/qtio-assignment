import React, { useState } from "react";
import AutocompleteTextbox from "./helper-components/autocomplete-textbox";
import AutocompleteSuggestion from "./helper-components/autocomplete-suggestion";
import apiClient from "./helper-components/api-client";

const AutocompleteInput = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setClicked(false);
    // disable suggestions if there is no input
    if (event.target.value.length === 0) {
      setSuggestions([]);
      setLoading(false);
      setValue("");
      return;
    }
    setLoading(true);
    // fetch suggestions with apiClient.search
    apiClient
      .search(event.target.value)
      .then((response) => {
        if (response) {
          setSuggestions(response);
        } else {
          setSuggestions([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching suggestions", error);
        setSuggestions([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <AutocompleteTextbox
        onChange={(event) => handleInputChange(event)}
        value={value}
      />
      {loading ? (
        <div className="loading"> Loading... </div>
      ) : (
        <div>
          {suggestions.length > 0 && !clicked ? (
            suggestions.map((suggestion, index) => (
              <div className="autocomplete-item" key={index}>
                <AutocompleteSuggestion
                  onClick={() => {
                    setValue(suggestion);
                    setSuggestions([]);
                    setClicked(true);
                  }}
                >
                  {suggestion}
                </AutocompleteSuggestion>
              </div>
            ))
          ) : value.length > 0 && suggestions.length === 0 && !clicked ? (
            <div className="no-results">No results</div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default AutocompleteInput;
