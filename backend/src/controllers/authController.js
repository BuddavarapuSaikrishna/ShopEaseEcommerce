const { registerUser } = require("../services/authService");

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

module.exports = {
  register,
};
