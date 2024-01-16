```mermaid
sequenceDiagram
  participant browser
  participant server

  Note left of browser: From containing text data is sent to the server
  Note right of server: Form data is received and stored for adding to the list

  browser->>server: POST https://studies.cs.helsinki.fi/
  server-->>browser: HTTP status code 302 response (Url Redirect)

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  server-->>browser: HTML Document (Status code 200)

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  server-->>browser: CSS File (Status code 200)

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  server-->>browser: Javascript File (Status code 200)

  Note left of browser: Another GET request is initiated by the Xhttp object in javascript code

  browser->>server: GET "/exampleapp/data.json"
  server-->>browser: Array of JSON Objects
```
