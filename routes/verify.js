import express from "express";
import { verifyTransaction } from "../verifier/verifier.js";

const router = express.Router();

router.post("/", (req, res) => {
  const result = verifyTransaction(req.body);
  res.json(result);
});

export default router;
