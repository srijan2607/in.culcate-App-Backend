// /routers/articleShortRouter.js
const express = require("express");
const router = express.Router();
const articleShortController = require("../controllers/article_short");  // import short article controller

// Route for getting all short articles
router.get("/get_all_the_Article", articleShortController.fetchShortArticles);

// Route for getting a single short article by ID
router.get("/:id", articleShortController.fetchShortArticleById);

module.exports = router;
