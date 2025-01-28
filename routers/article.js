const express = require("express");
const router = express.Router();
const sendArticle_short = require("../controllers/Article/article_short");
const sendArticle_long = require("../controllers/Article/article_long");

router.get("/get_20", sendArticle_short);
router.get("/get_long_article/:id", sendArticle_long);

module.exports = router;
