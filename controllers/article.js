const sendArticle = (req, res) => {
    res.status(200).json({ message: 'Article sent' });
  };
  
module.exports = sendArticle;