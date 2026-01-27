import express from "express";
import cors from "cors";
import dbfiles from "./db/database.js";
import { User, Restaurant, Review } from "./models/index.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "DineExplore API is running" });
});

const startServer = async () => {
  await dbfiles();
};

startServer();

export default app;
