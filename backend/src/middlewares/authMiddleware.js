const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    //Get Authorization header
    const authHeader = req.headers.authorization;

    //check wheather token exists

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "token missing",
      });
    }

    // extreact token

    const token = authHeader.split(" ")[1];

    //verify token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = { protect };
