const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logout} = require("../controllers/authController")

router.get("/", function(req, res){
    res.send("hey there its working,Users")
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logut", logout);

module.exports = router;