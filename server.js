require("dotenv").config();
const { error } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");

app.listen(3000, () => console.log("Server has Started"));

//getting list of users
app.get("/getUsers", (req, res) => {
  fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
    console.log(data);
    res.send(err);
  });
});

//deleting a user

var id = 3;
app.delete("/deleteUser", (req, res) => {
  fs.readFile(__dirname + "/" + "user.json" + "utf8", (err, data) => {
    data = JSON.parse(data);
    delete data["user" + 3];

    console.log(data);
    res.send(JSON.stringify(data));
  });
});

//connecting to server to listen to the call
var server = app.listen(8080, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("REST API listening at hhtp://%s:%s", host, port);
});
