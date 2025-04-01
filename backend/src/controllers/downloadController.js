const path = require('path');

const downloadController = {

  async ler(req, res) {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '../../uploads', filename);
  
     res.download(filePath, filename, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao baixar o arquivo' });
      }
    });
  },

};

module.exports = downloadController;