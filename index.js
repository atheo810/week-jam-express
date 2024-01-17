// import cors morgan, express
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// define express app
const app = express();

// import router from ./routers
const router = require("./routers");

// using express.use() (sesi-3)
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

// listening port
app.listen(3000, () => {
  console.log("Running in localhost:3000");
});
