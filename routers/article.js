const express = require("express");
const router = express.Router();
const sendArticle = require("../controllers/article");

router.get("/get_20", sendArticle);

module.exports = router;
