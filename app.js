const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const globalErrorHandler = require("./controllers/errorController");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.enable("trust proxy");

// Set Pug template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 1) GLOBAL MIDDLEWARES
app.use(cors()); // Middleware function that adds CORS headers to our response for simple requests GET, POST

app.options("*", cors()); // for complex requests PATCH, DELETE, etc this is needed to respond to pre-flight

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware HTTP request logger for development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// 2) ROUTES
app.use("/", viewRouter);

// Error handling middleware function
// Express auto calls this when there is an error
app.use(globalErrorHandler);

module.exports = app;
