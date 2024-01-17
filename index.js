// import cors morgan, express
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// define express app
const app = express();

// listening port
app.listen(3000, () => {
  console.log("Running in localhost:3000");
});
