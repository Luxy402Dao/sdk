export const detectAnomaly = (data) => {
  // Simple anomaly detection (mock)
  if (!data.agent || !data.action) {
    return true;
  }

  if (data.action === "unknown") {
    return true;
  }

  return false;
};
