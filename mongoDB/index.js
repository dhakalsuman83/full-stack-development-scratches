const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//Route middleware
app.use("/api/v1/users", usersRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    console.log("DB connection successfully");

    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
