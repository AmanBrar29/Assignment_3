const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get('/', (req, res) => {
    res.render("base", {
        viewTitle: "Welcome to ITEC 4020's Library"
    });
});

//to export function router
module.exports = router;
