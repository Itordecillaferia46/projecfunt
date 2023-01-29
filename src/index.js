const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const contentRoute = require("./routes/content");
const resourceRoute = require("./routes/resource");
const pictureRoute = require("./routes/picture");
const videoRoute = require("./routes/video");
const activityRoute = require("./routes/activity");
const crucigramaRoute = require("./routes/crucigrama");
const sopa_letraRoute = require("./routes/sopa_letra");
const draganddropRoute = require("./routes/draganddrop");
const evaluacionRoute = require("./routes/evaluacion");
const creditoRoute = require("./routes/credito");


// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", contentRoute);
app.use("/api", resourceRoute);
app.use("/api", pictureRoute);
app.use("/api", videoRoute);
app.use("/api", activityRoute);
app.use("/api", crucigramaRoute);
app.use("/api", sopa_letraRoute);
app.use("/api", draganddropRoute);
app.use("/api", evaluacionRoute);
app.use("/api", creditoRoute);

// routes
app.get("/", (req, res) => {
  res.send("CRUD de software PROJECFUNT");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connected"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));