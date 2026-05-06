import crypto from "crypto";

const SECRET = process.env.SECRET_KEY || "luxy_secret";

export const generateSignature = (data) => {
  return crypto
    .createHmac("sha256", SECRET)
    .update(data)
    .digest("hex");
};

export const verifySignature = (data, signature) => {
  const validSignature = generateSignature(data);
  return validSignature === signature;
};
