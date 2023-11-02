const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function checkClientMiddleware(req, res, next) {
  const token = req.cookies.token;

  console.log(token);
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userRole = decodedToken.userRole;

    if (userRole !== "client") {
      return res
        .status(403)
        .json({ error: "Access denied, forbidden, not your role" });
    }
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = checkClientMiddleware;
