const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// importing ROUTES
const PostRoute = require("./routes/post");
app.use("/post", PostRoute);

app.get("/", (req, res) => {
  res.send("we are on home");
});

//connect to db
mongoose.connect(
  process.env.DATABASE_URL ||
    "mongodb+srv://mplanner127:FpHxnkDInObJVSSk@cluster1.lyn0vh2.mongodb.net/"
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to db"));

//listening to server
app.listen(3000);
