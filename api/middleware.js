let requestCounts = {};

export const apiProtection = (req, res, next) => {
  const ip = req.ip;

  if (!requestCounts[ip]) {
    requestCounts[ip] = 1;
  } else {
    requestCounts[ip]++;
  }

  // Simple rate limit
  if (requestCounts[ip] > 100) {
    return res.status(429).json({
      error: "Too many requests - blocked by Luxy"
    });
  }

  next();
};
