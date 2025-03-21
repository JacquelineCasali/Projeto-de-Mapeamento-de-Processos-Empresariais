const { area, processo } = require("../db/models");

const areaController = {
  // 🔹 Listar todos as areas
  listar: async (req, res) => {
    try {
      const processos = await area.findAll({
        order: [["nome", "ASC"]],
      });
      res.json(processos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar processos" });
    }
  },

  // 🔹 Criar nova area
  create: async (req, res) => {
    try {
      const { nome } = req.body;
      const areas = await area.findOne({ where: { nome } });
      if (areas) {
        return res.status(422).json({ message: `Àrea ${nome} já cadastrado` });
      }
      // verificando se a area ja existe
      const newArea = await area.create({ nome });
      res.status(201).json(newArea);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar processo" });
    }
  },
  async ler(req, res) {
    try {
      const { id } = req.params;
      const users = await area.findOne({ where: { id } });
      // caso nao encotre o usuario
      if (!users) {
        return res.status(404).json({ message: "Àrea não encontrado" });
      }
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const areas = await area.findOne({ where: { id } });
      if (!areas) {
        return res.status(404).json({
          message: "Àrea não encontrado",
        });
      } else if (await area.findOne({ where: { nome } })) {
        return res.status(422).json({ message: `Àrea ${nome} já cadastrado` });
      } else {
        await area.update({ nome }, { where: { id } });
        return res.status(200).json({
          message: "Area atualizado com suceso!",
          nome,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar área" });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
       const rows = await area.findByPk(id);
      if (!rows) {
        return res.status(400).json({
          message: "Àrea não encontrada",
        });
      } else {
        await area.destroy({ where: { id } });

        return res.status(200).json({
          message: "Deletado com suceso!",
        });
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};

module.exports = areaController;
