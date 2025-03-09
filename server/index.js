const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

const uri = process.env.MONGODB_URI;

mongoose.set("strictQuery", true);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running`);
});
