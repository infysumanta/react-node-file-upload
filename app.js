const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/api", require("./routes/routes"));

// app.use((req, res, next) => {
//   // Error goes via `next()` method
//   setImmediate(() => {
//     next(new Error("Something went wrong"));
//   });
// });
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });

module.exports = app;
