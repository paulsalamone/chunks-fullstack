//BACK END!!!
const express = require("express");
const app = express();
const port = process.env.PGPORT || 3002;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// allow hiding db info
require("dotenv").config();

// connect to frontemd
const cors = require("cors");
app.use(cors());

// establish routes & middlewares
const moleculesRouter = require("./routes/moleculesRouter");

//use routes
app.use("/api/molecules", moleculesRouter);

// listen to server
app.listen(port, console.log(`Chunks server is listening on port ${port}!`));
