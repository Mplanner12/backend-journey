// require("dotenv").config();

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost/contact");

// const db = mongoose.connection;

// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to db"));

// app.listen(3000, () => console.log("Server has Started"));

// app.use(express.json());

// const contactsRouter = require("./routes/contact.js");
// app.use("/contacts", contactsRouter);

// //for creating user
// const newUserRouter = require("./routes/createUser.js");
// app.use("/createUser", newUserRouter);

// const usersRouter = require("./routes/users");
// app.use("/users", usersRouter);

// const authRouter = require("./routes/auth");
// app.use("/auth", authRouter);
