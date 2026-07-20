const express = require("express"); 
const router = express.Router();
const { registerUser, loginUser, getUser } = require("../controllers/authControllers");
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");



router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, admin, getUser);
// router.post("/verify-email", async (req, res) => {
//     const { email } = req.body;
//     // Implementation for email verification
// }); 
module.exports = router;

