
const {processo,area, subprocesso }=require("../db/models");


const processoController = {
// 🔹 Criar um novo processo
create:async (req, res) => {
    try {
   
      const { nome, descricao,areaId } = req.body;
      const areas = await area.findByPk(areaId)
      if(!areas){
        return res.status(422).json({message:`Àrea não encontrada`});
      }
      const novoProcesso = await processo.create({ nome, descricao, areaId });

      res.status(201).json(novoProcesso);
    } catch (err) {

      return res.status(500).json({ message: `Verifique o dados` });
    }
  },
  // 🔹 Listar todos os processos com subprocesso 
  listar: async (req, res) => {
    try {
      const {areaId } = req.query;
      const filtros = areaId ? { where: { areaId } } : {};
      const processos = await processo.findAll({...filtros, include:[{model:area,
        attributes: ['id', 'nome'] 

      },{model:subprocesso
        
      }]  });
      res.json(processos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar processos" });
    }
  },
  //filtar por processo
  async ler(req, res) {
    try {
      const { id } = req.params;
        const users = await processo.findOne({ where: { id },include:subprocesso ,include:area});
      // caso nao encotre o usuario
      if (!users) {
        return res.status(404).json({ message: "Processo não encontrado" });
      }
    return res.status(200).json(users);
      
    } catch (err) {
      return res.status(400).send(err);
    }
  }, 
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao,areaId } = req.body;
      const processos = await processo.findOne({ where: { id } });
      // caso nao encotre o usuario
      if (!processos) {
        return res.status(404).json({ message: "Processo não encontrado" });
      }else {
        await processo.update(
          {  nome, descricao,areaId},
          { where: { id } }
        );
        return res.status(200).json({
           message: "Processo atualizado com suceso!"
       });
      }
    } catch (err) {
      return res.status(500).json({ message: `Area não cadastrado, Cadastre uma área`, err: err.parent.sqlMessage });
    }
    
  },
  
  async delete(req, res) {
    try {
      const { id } = req.params;

      const rows = await processo.findOne({ where: { id } });
      if (!rows) {
        return res.status(400).json({
          message: "Processo não encontrado",
        });
      } else {
        await processo.destroy({ where: { id } });

        return res.status(200).json({
          message: "Deletado com suceso!",
        });
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  },
}



module.exports = processoController;