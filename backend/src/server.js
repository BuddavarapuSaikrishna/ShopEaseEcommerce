const path = require("path");

// 1. Load environment variables
require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});

const express = require("express");
const cors = require("cors");

// 2. Import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// 3. Import custom middlewares
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

// 4. Create Express application
const app = express();

// 5. CORS middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);

// 6. Parse incoming JSON data
app.use(express.json({ limit: "10kb" }));

// 7. Parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// 8. Health check API
app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "ShopEase API is running",
  });
});

// 9. Authentication routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

// 10. Handle undefined routes
app.use(notFound);

// 11. Global error handling
app.use(errorHandler);

// 12. Start Express server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ShopEase server running on port ${PORT}`);
});
