// Mongo connection is set up ./models/DBconfig , I also copied url below
//var mongodb_url = 'mongodb+srv://<<username:password>>@cluster0.cbqxt.mongodb.net/A2?retryWrites=true&w=majority';

require("./models/DBconfig");
const express = require("express");
const path = require("path");
const req = require("express/lib/request");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const morgan = require("morgan"); //to use logging

//routes
const defaultRoute = require("./routes/defaultRoute"); 
const bookRoute = require("./routes/bookRoute"); 
const userRoute = require("./routes/userRoute");
//const borrowRoute = require("./routes/borrowRoute");
//const userBooksRoute = require("./routes/userBookRoute");

const { CLIENT_RENEG_LIMIT } = require("tls");
const { Console } = require("console");

//apply to incoming requests for logs and body parsing
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/static", express.static(__dirname + "/assets")); // file static path
app.set("views", path.join(__dirname, "/views"));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }));
app.set("view engine", "hbs"); 

//CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method == "OPTIONS") {
    res.header(
      "Access-Control-Allow-Headers",
      "PUT, POST, PATCH, DELETE",
      "GET"
    );
    return res.status(200).json({});
  }
  next();
});

//routes which should handle requests
app.use("/", defaultRoute);
app.use("/book", bookRoute);
app.use("/user", userRoute);
//app.use("/borrows", borrowRoute);
//app.use("/userBooks", userBooksRoute);

//error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
