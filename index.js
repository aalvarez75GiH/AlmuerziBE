const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const meals = require("./api/routes/meals");
const orders = require("./api/routes/orders");
const auth = require("./api/routes/auth");
const users = require("./api/routes/users");
const backup_orders = require("./api/routes/backup_orders");

const app = express();
app.use(bodyParser.json());
app.use(cors());
// MondoDB Connection
const url =
  "mongodb+srv://aalvarezMdB:Nm74sc84Cs97lc.@cluster0.ztfck.mongodb.net/almuerzi-db?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// using express(via app) to pass requests (that contains 'api/meals' 'api/orders')
//to directories containing the respectives js files.
app.use("/api/meals", meals);
app.use("/api/orders", orders);
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/backup", backup_orders);

const server = app.listen(3000, () => {
  console.log("server running at port 3000...");
});
// exporting app to others modules
module.exports = app;
