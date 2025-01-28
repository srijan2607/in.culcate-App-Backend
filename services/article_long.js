// /services/articleLongService.js
const prisma = require("../db/db");

// Fetch all long articles
const getAllArticles = async () => {
  return await prisma.article.findMany({
    where: {
      content: {
        length: {
          gte: 1000,  // Assuming long article means content length >= 1000
        }
      }
    }
  });
};

module.exports = {
  getAllArticles
};

// Fetch a single long article by ID
const getArticleById = async (id) => {
  return await prisma.article.findUnique({
    where: { id: parseInt(id) }
  });
};

module.exports = {
  getAllArticles,
  getArticleById
};
