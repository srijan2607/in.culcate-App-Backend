const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors"); // Example custom errors
const articleShortService = require("../services/article_short");

// Fetch paginated short articles
const send_20_Short_Article = async (req, res) => {
  try {
    const { page = 1 } = req.query; // Default to page 1 if no query parameter is provided
    const articles = await articleShortService.getPaginatedArticles(parseInt(page));

    if (!articles || articles.length === 0) {
      throw new NotFoundError("No short articles found.");
    }

    res.status(StatusCodes.OK).json({ 
      page: parseInt(page),
      count: articles.length,
      articles 
    });
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message
    });
  }
};

// Fetch a single short article by ID
const fetchShortArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new BadRequestError("ID parameter is required.");

    const article = await articleShortService.getArticleById(id);
    if (!article) throw new NotFoundError("Short article not found.");

    res.status(StatusCodes.OK).json(article);
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message
    });
  }
};

module.exports = {
  send_20_Short_Article,
  fetchShortArticleById
};
