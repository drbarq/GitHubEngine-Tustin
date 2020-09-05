const express = require("express");

const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
const axios = require("axios");

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
// app.get("/express_backend", (req, res) => {
//   res.send({ express: "your express backend is connected to react" });
// });

let headers = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/vnd.github.mercy-preview+json",
};

app.get("/searchTerm", async (req, res) => {
  try {
    const searchTerm = req.params.searchTerm;
    let gitHubSearch = "https://api.github.com/search/repositories?q=tetris";
    // const result = await axios.get(`${gitHubRepoSearchURL}?q=${searchTerm}`);
    const result = await axios.get(gitHubSearch, headers);
    console.log(result);

    return res.status(200).send({
      error: false,
      data2: "hello",
      data: result.data,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
