const { processo, area, subprocesso } = require("../db/models");

const processoController = {
  // 🔹 Criar um novo processo
  create: async (req, res) => {
    try {
      const { nome, descricao, areaId, responsavel, ferramentas } = req.body;
      const areas = await area.findByPk(areaId);
      if (!areas) {
        return res.status(422).json({ message: `Àrea não encontrada` });
      }
      // retorna erro quando não conseque fazer o upload
      if (!req.file) {
        return res.status(400).json({
          message: "Erro: Selecione um documento valido!",
        });
      }

      const novoProcesso = await processo.create({
        nome,
        descricao,
        areaId,
        responsavel,
        ferramentas,
        documentacao: req.file.filename,
      });

      res.status(201).json(novoProcesso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.errors[0].message });
    }
  },
  // 🔹 Listar todos os processos com subprocesso
  listar: async (req, res) => {
    try {
      const { areaId } = req.query;
      const filtros = areaId ? { where: { areaId } } : {};

      const processos = await processo.findAll({
        order: [["id", "DESC"]],

        ...filtros,
        include: [
          { model: area, attributes: ["id", "nome"] },
          {
            model: subprocesso,
            attributes: ["id", "nome", "descricao", "processoId"],
          },
        ],
      });
      res.json(processos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar processos" });
    }
  },
  
 //filtar por processo
 async lerProcesso(req, res) {
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



//ler pdf

  async ler(req, res) {
    try {
      const { id } = req.params;
      const users = await processo.findByPk(id);

      // caso nao encotre o usuario
      if (!users) {
        return res.status(404).json({ message: "Processo não encontrado" });
      }
      const filePath = path.join(__dirname, "../../uploads", req.file.filename);
      res.sendFile(filePath);

      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao, areaId, responsavel, ferramentas } = req.body;
      const processos = await processo.findOne({ where: { id } });
      // caso nao encotre o usuario
      if (!processos) {
        return res.status(404).json({ message: "Processo não encontrado" });
      } else {
        await processo.update(
          {
            nome,
            descricao,
            areaId,
            responsavel,
            ferramentas,
            documentacao: req.file.filename,
          },
          { where: { id } }
        );
        return res.status(200).json({
          message: "Processo atualizado com suceso!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: `Area não cadastrado, Cadastre uma área`,
             });
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
      }
      // Excluir os arquivos do diretório
      if (processo.documentacao) {
        processo.documentacao.forEach((file) => {
          const filePath = path.join(__dirname, "../uploads", file);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        });
      }
      await processo.destroy({ where: { id } });

      return res.status(200).json({
        message: "Deletado com suceso!",
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};

module.exports = processoController;
