const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

// console log to check if server running

app.listen(port, () => console.log(`Listening on Port ${port}`));

// GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "your express backend is connected to react" });
});
