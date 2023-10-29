function checkClientMiddleware(req, res, next) {
  if (role !== "client") {
    return res
      .status(403)
      .json({ error: "Access denied, forbidden, not ur role" });
  }
  next();
}
module.exports = checkClientMiddleware;
