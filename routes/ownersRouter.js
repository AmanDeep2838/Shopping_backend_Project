const express = require("express");
const router = express.Router();


router.get("/", function(req, res){
    res.send("hey there its working,Owner");
});

module.exports = router;