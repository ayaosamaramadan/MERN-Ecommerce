const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/User");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

// MongoDB connection
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


app.put("/api/users/updateProfile", async (req, res) => {
  const { userId, name, email, password } = req.body;
  try {
    const user = await User.findById(userId);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      if (password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt); 
      }
      await user.save();
      res.status(200).json({ message: "Profile updated successfully", user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Root route


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
