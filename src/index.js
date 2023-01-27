const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const contentRoute = require("./routes/content");

// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", contentRoute);

// routes
app.get("/", (req, res) => {
  res.send("API para CRUD de software PROJECFUNT");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connected"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));