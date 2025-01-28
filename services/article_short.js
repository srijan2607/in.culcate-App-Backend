
const prisma = require("../db/postgre_db");

const PAGE_SIZE = 20; // Number of articles to fetch per request

// Fetch paginated short articles
const getPaginatedArticles = async (page) => {
  const offset = (page - 1) * PAGE_SIZE; // Calculate the offset

=======
// /services/articleShortService.js
const prisma = require("../db/db");

// Fetch all short articles
const getAllArticles = async () => {

  return await prisma.article.findMany({
    where: {
      content: {
        length: {

          lt: 1000, // Assuming short article means content length < 1000
        }
      }
    },
    take: PAGE_SIZE, // Limit to 20 articles per request
    skip: offset, // Offset for pagination
    orderBy: {
      createdAt: "desc" // Optional: Order by newest articles
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

  getPaginatedArticles,

  getAllArticles,

  getArticleById
};
