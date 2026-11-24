function notFound(req, res, _next) {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
}

function errorHandler(error, _req, res, _next) {
  console.error(error);
  const status = error.statusCode || 500;
  res.status(status).json({
    success: false,
    message: process.env.NODE_ENV === "production" && status === 500
      ? "An unexpected server error occurred."
      : error.message || "Server error."
  });
}

module.exports = { notFound, errorHandler };
