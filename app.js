const path = require("path");
const express = require("express");

const globalErrorHandler = require("./controllers/errorController");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.enable("trust proxy");

// Set Pug template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 2) ROUTES
app.use("/", viewRouter);

// Error handling middleware function
// Express auto calls this when there is an error
app.use(globalErrorHandler);

module.exports = app;
