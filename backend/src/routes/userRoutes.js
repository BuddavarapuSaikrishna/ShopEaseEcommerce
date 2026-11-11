const express = require("express");
const router = express.Router();

const { protect } = require("../middlewares/authMiddleware");
console.log(typeof protect);

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Profile accessed successfully",
    user: req.user,
  });
});

module.exports = router;
