const {Subprocesso, processo }=require("../db/models")

const subprocessoController = {
// 🔹 Criar um novo processo
create:async (req, res) => {
    try {
     
      const { nome,
        descricao,
        processoId,
        subprocessoId} = req.body;

        const procesos = await processo.findByPk(processoId)
        if(!procesos){
          return res.status(422).json({message:`Processo não encontrada`});
        }

      const subprocesso = await Subprocesso.create({ nome,
        descricao,
        processoId,
        subprocessoId });
      res.status(201).json(subprocesso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error:error.message });
    }
  },
 // 🔹 Listar todos os subprocessos de um processo
 listar: async (req, res) => {
  try {
const {processoId}=req.params;

const procesos = await processo.findByPk(processoId)
if(!procesos){
  return res.status(422).json({message:`Processo não encontrada`});
}

    const processos = await processo.findByPk(processoId,{ include: Subprocesso });
    res.json(processos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar processos" });
  }
},

ler: async (req, res) => {
  try {
const {id}=req.params;

const procesos = await Subprocesso.findOne({ where: { id } });
if(!procesos){
  return res.status(422).json({message:`Subporcesso não encontrada`});
}

    const processos = await Subprocesso.findOne({ where: { id } });
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
      processoId,
      subprocessoId} = req.body;
    const processos = await Subprocesso.findByPk( id );
    // caso nao encotre o usuario
    if (!processos) {
      return res.status(404).json({ message: "Subporcesso não encontrado" });
    }
    else {
      await Subprocesso.update(
        {  nome,
          descricao,
          processoId,
          subprocessoId},
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