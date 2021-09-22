require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const session = require("express-session");
const Grid=require("gridfs-stream");
const upload = require("./routes/upload");
const connection=require('./db');
let config = require('../config.json');
const cors = require("cors");
const controller = require("./controller/AuthController");

const app = express();

let gfs;
connection.connect();
const conn=mongoose.connection;
conn.once("open",function(){
  gfs=Grid(conn.dbUrl,mongoose.mongo);
  gfs.collection("photos")
})
app.use(bodyparser.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      
    ],
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: true //allow setting of cookies
  })
);

app.use(
  session({
    secret: "supersecretstring12345!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 * 30 }
  })
);
controller(app);

app.listen(config.server.port, () => {
  console.log('App listening on port : ', config.server.port);
});