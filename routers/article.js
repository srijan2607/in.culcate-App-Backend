const express = require("express");
const router = express.Router();
const {
  send_20_Short_Article,
  fetchShortArticleById,
} = require("../controllers/Article/article_short");

const { sendArticle_long } = require("../controllers/Article/article_long");

router.get("/get_20", send_20_Short_Article);
router.get("/get_short_article/:id", fetchShortArticleById);
router.get("/get_long_article/:id", sendArticle_long);

module.exports = router;