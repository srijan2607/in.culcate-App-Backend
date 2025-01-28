// /controllers/articleLongController.js
const articleLongService = require('../services/article_long');

// Fetch all long articles
const fetchLongArticles = async (req, res) => {
  try {
    const articles = await articleLongService.getAllArticles();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch a single long article by ID
const fetchLongArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await articleLongService.getArticleById(id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  fetchLongArticles,
  fetchLongArticleById
};
