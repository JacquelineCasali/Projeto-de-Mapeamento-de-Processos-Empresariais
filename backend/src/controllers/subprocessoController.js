const {subprocesso, processo }=require("../db/models")

const subprocessoController = {
// 🔹 Criar um novo processo
create:async (req, res) => {
    try {
     
      const { nome,
        descricao,
        processoId
        } = req.body;

        const procesos = await processo.findByPk(processoId)
        if(!procesos){
          return res.status(422).json({message:`Processo não encontrada`});
        }
        const novoProcesso = await subprocesso.create({ nome, descricao, processoId });

        res.status(201).json(novoProcesso);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error:error.message });
    }
  },
 // 🔹 Listar todos os subprocessos de um processo
 listar: async (req, res) => {
  try {
    const {processoId } = req.query;
    const filtros = processoId ? { where: { processoId } } : {};
    const subprocessos = await subprocesso.findAll({...filtros,include:[{model:processo}] });
    res.json(subprocessos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar processos" });
  }
},

ler: async (req, res) => {
  try {
const {id}=req.params;

const procesos = await subprocesso.findOne({ where: { id } });
if(!procesos){
  return res.status(422).json({message:`Subporcesso não encontrada`});
}

    const processos = await subprocesso.findOne({ where: { id } });
    res.json(processos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar processos" });
  }
},
async update(req, res) {
  try {
    const { id } = req.params;
    const { nome,
      descricao,
      processoId
      } = req.body;
    const processos = await subprocesso.findByPk( id );
    // caso nao encotre o usuario
    if (!processos) {
      return res.status(404).json({ message: "Subporcesso não encontrado" });
    }
    else {
      await subprocesso.update(
        {  nome,
          descricao,
          processoId
          },
        { where: { id } }
      );
      return res.status(200).json({
         message: "Subprocesso atualizado com suceso!"
     });
    }
  } catch (err) {
    return res.status(500).json({ message: `Area não cadastrado, Cadastre uma área`, err: err.parent.sqlMessage });
  }
  
},
}

module.exports = subprocessoController;