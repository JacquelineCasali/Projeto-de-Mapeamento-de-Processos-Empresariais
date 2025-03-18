const User =require("../db/models/User")

const userController = {
// 🔹 Criar um novo processo
create:async (req, res) => {
    try {
    
      const { nome, email } = req.body;
      const novoProcesso = await User.create({ nome, email });
      res.status(201).json(novoProcesso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar processo" });
    }
  },
  // 🔹 Listar todos os processos com área associada
listar: async (req, res) => {
    try {
      const user = await User.findAll();
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar processos" });
    }
  }

}

module.exports = userController;