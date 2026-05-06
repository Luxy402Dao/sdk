import { verifySignature } from "../utils/crypto.js";
import { detectAnomaly } from "../core/securityEngine.js";

export const verifyTransaction = (payload) => {
  const { agent, action, signature } = payload;

  // Check anomaly
  if (detectAnomaly(payload)) {
    return {
      success: false,
      reason: "Anomaly detected"
    };
  }

  // Verify signature
  const isValid = verifySignature(agent + action, signature);

  if (!isValid) {
    return {
      success: false,
      reason: "Invalid signature"
    };
  }

  return {
    success: true,
    message: "Transaction verified by Luxy"
  };
};
