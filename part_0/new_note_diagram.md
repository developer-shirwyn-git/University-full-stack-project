```mermaid
sequenceDiagram
  box New Note Diagram
  participant Browser
  participant Server

  Note left of Browser: From containing text data is sent to the server
  Note right of Server: Form data is received and stored for adding to the list
  Browser->>Server: POST https://studies.cs.helsinki.fi/
  Server-->>Browser: HTTP status code 302 response (Url Redirect)

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  Server-->>Browser: HTML Document (Status code 200)

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  Server-->>Browser: CSS File (Status code 200)

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  Server-->>Browser: Javascript File (Status code 200)

  Note left of Browser: Another GET request is initiated by the Xhttp object in javascript code
  Browser->>Server: GET "/exampleapp/data.json"
  Server-->>Browser: Array of JSON Objects
```
