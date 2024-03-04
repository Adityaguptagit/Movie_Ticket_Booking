const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookingRouter = require("./routes/booking-routes");

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://movie-ticket-booking-frontend.onrender.com");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/api", bookingRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() =>
    app.listen(process.env.PORT || 8080, () => {
      console.log(
        `Connected To Database And listening to Port ${process.env.PORT}`
      );
    })
  )
  .catch((error) => {
    console.log(`Error Encountered:${error}`);
  });