const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const { errorHandler } = require("./middleware/errorHandler");
const connectDB = require("./config/db");

const packageRoutes = require("./routes/packageRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const videoRoutes = require('./routes/videoRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
const port = process.env.PORT || 5000;

// ✅ Connect to database
connectDB();

// ✅ Allow requests from both localhost:3000 and localhost:3001
// const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// }));

app.use(cors({
  origin: ['http://localhost:3001','http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type']
}));

// ✅ Middlewares
app.use(cookieParser());
app.use(express.json());
const fs = require('fs');
app.use('/uploads', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // or use a specific origin
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
}, express.static(path.join(__dirname, 'uploads')));



console.log('Serving uploads from:', path.join(__dirname, 'uploads'));



// ✅ Routes
app.use("/api/packages", packageRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/feedback', feedbackRoutes);

// ✅ Serve frontend in production
if (process.env.NODE_ENV === "production") {
  const publicpath = path.join(__dirname, ".", "build");
  const filePath = path.resolve(__dirname, ".", "build", "index.html");
  app.use(express.static(publicpath));

  app.get("*", (req, res) => {
    return res.sendFile(filePath);
  });
}

// ✅ Error handler
app.use(errorHandler);

// ✅ Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
