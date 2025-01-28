const sendArticle = (req, res) => {
    res.status(200).json({ message: 'short Article sent' });
  };
  
module.exports = sendArticle;