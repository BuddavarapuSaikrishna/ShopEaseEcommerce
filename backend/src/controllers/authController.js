const { registerUser, loginUser } = require("../services/authService");
const generateToken = require("../utils/generateToken");

const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await loginUser(req.body);

    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  register,
  login,
};
