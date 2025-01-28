const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const articleLongService = require("../services/article_long");

// Fetch all long articles


// Fetch a single long article by ID
const fetchLongArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new BadRequestError("ID parameter is required.");

    const article = await articleLongService.getArticleById(id);
    if (!article) throw new NotFoundError("Long article not found.");

    res.status(StatusCodes.OK).json(article);
  } catch (err) {
    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};

module.exports = {
  
  fetchLongArticleById
};

