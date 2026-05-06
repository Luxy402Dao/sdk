import express from "express";
import dotenv from "dotenv";
import verifyRoute from "./routes/verify.js";
import { apiProtection } from "./api/middleware.js";

dotenv.config();

const app = express();
app.use(express.json());

// Security middleware
app.use(apiProtection);

// Routes
app.use("/verify", verifyRoute);

app.get("/", (req, res) => {
  res.send("LUXY API is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Luxy running on port ${PORT}`);
});
