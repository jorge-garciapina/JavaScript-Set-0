const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname)));

// Serve the index.html file for all requests, including requests with the /articleN format
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
