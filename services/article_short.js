// /services/articleShortService.js
const prisma = require("../db/db");

// Fetch all short articles
const getAllArticles = async () => {
  return await prisma.article.findMany({
    where: {
      content: {
        length: {
          lt: 1000,  // Assuming short article means content length < 1000
        }
      }
    }
  });
};

// Fetch a single short article by ID
const getArticleById = async (id) => {
  return await prisma.article.findUnique({
    where: { id: parseInt(id) }
  });
};

module.exports = {
  getAllArticles,
  getArticleById
};
