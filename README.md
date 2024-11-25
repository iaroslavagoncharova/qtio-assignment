# Qt Frontend Coding Exercise Completed

The goal of this assignment was to implement an autocomplete functionality using ReactJS.

## Running the Docker image
You can find the image on DockerHub [here](https://hub.docker.com/repository/docker/iaroslavagoncharova/qtio-assignment/general).

To run it on your computer, use the following commands:
```
docker pull iaroslavagoncharova/qtio-assignment
docker run -p 8050:8050 iaroslavagoncharova/qtio-assignment
```

The completed assignment will be accessible via http://localhost:8050.

If you clone or download this repository, you can run the application locally with
```
docker compose up app
```
## Features implemented
- Suggestions are fetched dynamically using `apiClient`, with error handling for failed requests.
- Loading indicator (`Loading...`) is displayed while waiting for a server response.
- No results indicator (`No results`) is displayed if no suggestions match the input.
- Users can select a suggestion by clicking it, which automatically populates the input field.
- Suggestions fetching is disabled when the input field is empty.
 
## Testing
The implemented solution has successfully passed all test cases
![Test results](https://github.com/user-attachments/assets/9a3eafb4-1e07-4465-88cc-d7d5b473f282)

