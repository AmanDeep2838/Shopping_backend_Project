const express = require('express');
const router = express.Router();
const isloggedIn = require("../middlewares/isLoggedIn");

router.get("/", function (req, res) {
    let error = req.flash("error");
    res.render("index", { error});

});

router.get("/shop", isloggedIn,async function (req, res){
    let products = await productModel.find();
    res.render("shop", { products});
})

router.get("/logout", isloggedIn, function (req, res){
    res.render("shop");
})

module.exports = router;