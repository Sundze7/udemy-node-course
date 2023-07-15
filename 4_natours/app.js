const path = require('path')
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const viewRouter = require('./routes/viewRoutes')

const app = express();

//setting up the pug engine for template rendering
app.set('view engine', "pug")
app.set('views', path.join(__dirname, 'views'))

// Global Middlewares

//serving static files
//app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')));

// set security http headers
app.use(helmet());

//dev logging
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// limit req from same api: to prevent brute force and DOS attacks
const limiter = rateLimit({
  //allow only 100 reqs per hr
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from IP, please try again in an hour",
});
app.use("/api", limiter); // applies only to routes stating with /api

// body parser: reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

//Data sanitization against NoSQL query injection
app.use(mongoSanitize());

//Data sanitization aginst XSS
app.use(xss());

//prevent param pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);


//Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// End-points or Routes


app.use('/', viewRouter)
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);

app.all("*", (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server`);
  // err.status = "failed";
  // err.statusCode = 404;
  // next(err)

  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
