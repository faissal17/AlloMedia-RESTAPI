function checkClientMiddleware(req, res, next) {
  const user = req.user;
  const role = user.role.name;
  if (role !== "client") {
    return res
      .status(403)
      .json({ error: "Access denied, forbidden, not ur role" });
  }
  next();
}
module.exports = checkClientMiddleware;
