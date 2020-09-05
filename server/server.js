const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const gitHubRepoSearchURL = "https://api.github.com/search/repositories";
// header: { Accept: application/vnd.github.mercy-preview+json}

/**
Limitations on query length

The Search API does not support queries that:

    are longer than 256 characters (not including operators or qualifiers).
    have more than five AND, OR, or NOT operators.

These search queries will return a "Validation failed" error message.
 */

// console log to check if server running

app.listen(port, () => console.log(`Listening on Port ${port}`));

// GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "your express backend is connected to react" });
});
