const express = require("express");
const logger = require("morgan");
const axios = require("axios");
var cors = require("cors");
const redis = require("redis");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(logger("dev"));
const client = redis.createClient(6379);

client.on("error", (error) => {
  console.error(error);
});

let gitHubHeaders = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/vnd.github.mercy-preview+json",
};

/**
 * GitHub API Query constraints
Limitations on query length
The Search API does not support queries that:
    are longer than 256 characters (not including operators or qualifiers).
    have more than five AND, OR, or NOT operators.
These search queries will return a "Validation failed" error message.
 */

/**
 * Node server using redis cache
 * Single route service which first checks the redis cache before making
 * the external API call.  Results from the external request are stored within the cache.
 * Cache is cleared every 1440 seconds (24 mins)
 */
app.get("/searchGitHub/:searchTerm", async (req, res) => {
  try {
    const { searchTerm } = req.params;
    client.get(searchTerm, async (err, results) => {
      // first check the cache
      if (results) {
        return res.status(200).send({
          error: false,
          message: `Results for ${searchTerm} from the cache`,
          data: JSON.parse(results),
        });
      } else {
        // if not found in cache, hit the api
        let gitHubSearchURL = `https://api.github.com/search/repositories?q=${searchTerm}`;
        const result = await axios.get(gitHubSearchURL, gitHubHeaders);
        //   save record to cache
        client.setex(searchTerm, 1440, JSON.stringify(result.data));

        return res.status(200).send({
          errror: false,
          message: `Results for ${searchTerm} from Github`,
          data: result.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 * Once server is running, displays message in terminal indicating the inuse port
 */

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

module.exports = app;
