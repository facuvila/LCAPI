const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
const port = 3000;
const userDataRouter = require("./controllers/userDataController");
const transactionRouter = require("./controllers/transactionController");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })

);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/getUserData", userDataRouter);
app.use("/transaction", transactionRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(process.env.PORT || port, () => {
    console.log(`Our app is running on port ${ port }`);
});