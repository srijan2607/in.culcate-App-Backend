// /routers/articleLongRouter.js
const express = require("express");
const router = express.Router();
const articleLongController = require("../controllers/article_long");  // import long article controller

// Route for getting all long articles
router.get("/get_all_the_Article", articleLongController.fetchLongArticles);

// Route for getting a single long article by ID
router.get("/:id", articleLongController.fetchLongArticleById);

module.exports = router;
