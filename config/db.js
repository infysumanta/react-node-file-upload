const mongoose = require("mongoose");
const config = require(".");
exports.connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(config.MONGO_URI)
    .then((x) => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err.reason);
    });
};
