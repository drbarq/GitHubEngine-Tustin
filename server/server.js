const express = require("express");
const logger = require("morgan");
const axios = require("axios");
const cors = require("cors");
const redis = require("redis");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(logger("dev"));

const redisCache = redis.createClient(6379);

redisCache.on("error", (error) => {
  console.log(`Whoops!  Looks like the redis cache server isn't connected`);
  console.log(`run 'redis-server' in a seperate terminal`);
  console.error(`Full error message:`, error);
});

let gitHubHeaders = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/vnd.github.mercy-preview+json",
};

let cacheExpirationInSeconds = 1440;

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
    redisCache.get(searchTerm, async (err, cacheResults) => {
      // respond with any errors
      if (err) {
        return res.status(400).send(`Error with redis cache ${err}`);
      }

      // first, check the cache
      if (cacheResults) {
        return res.status(200).send({
          error: false,
          message: `Results for ${searchTerm} from the cache`,
          data: JSON.parse(cacheResults),
        });
      } else {
        // if nothing found in cache, call the api
        let gitHubSearchURL = `https://api.github.com/search/repositories?q=${searchTerm}`;
        const githubResults = await axios.get(gitHubSearchURL, gitHubHeaders);
        // save record to cache
        redisCache.setex(
          searchTerm,
          cacheExpirationInSeconds,
          JSON.stringify(githubResults.data)
        );
        return res.status(200).send({
          errror: false,
          message: `Results for ${searchTerm} from Github`,
          data: githubResults.data,
        });
      }
    });
  } catch (error) {
    console.log(
      "Cache failed and the external API failed to return any information",
      error
    );
  }
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

module.exports = app;
