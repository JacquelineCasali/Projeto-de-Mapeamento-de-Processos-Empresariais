const path = require('path');
const { processo } = require('../db/models');

const pdfController = {

   ler:async (req, res)=> {
    try {
      const { processoId } = req.params;
      const processos = await processo.findByPk(processoId);
      if(!processos){
        return res.status(422).json({message:`Processo não encontrada`});
      }
      const filePath = path.join(__dirname, '../../uploads', processos.documentacao);
      res.sendFile(filePath);
      // res.json(processos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
 
    // const filePath = path.join(__dirname, '../../uploads', filename);
  
    // res.sendFile(filePath, (err) => {
    //     if (err) {
    //         res.status(404).json({ error: 'Arquivo não encontrado' });
    //     }
    // });

    // res.download(filePath, filename, (err) => {
    //   if (err) {
    //     res.status(500).json({ error: 'Erro ao baixar o arquivo' });
    //   }
    // });
  },

};

module.exports = pdfController;