// /services/articleLongService.js
const prisma = require("../db/postgre_db");



// Fetch a single long article by ID
const getArticleById = async (id) => {
  return await prisma.article.findUnique({
    where: { id: parseInt(id) }
  });
};

module.exports = {
  
  getArticleById
};
