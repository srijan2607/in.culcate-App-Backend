// /controllers/articleShortController.js
const articleShortService = require('../services/article_short');

// Fetch all short articles
const fetchShortArticles = async (req, res) => {
  try {
    const articles = await articleShortService.getAllArticles();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch a single short article by ID
const fetchShortArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await articleShortService.getArticleById(id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  fetchShortArticles,
  fetchShortArticleById
};
