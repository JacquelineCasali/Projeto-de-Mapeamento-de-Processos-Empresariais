const { area, user, processo, subprocesso } = require("../db/models");

const dashboardController = {
    // 🔹 Listar todos as areas
    listar: async (req, res) => {
      try {
        const totalUser = await user.count();
        const totalProcesso=await processo.count();
        const totalSubprocesso=await subprocesso.count();
        res.json({totalUser,totalProcesso,totalSubprocesso});
      } catch (error) {
        console.error(error);
        res.status(500).json({ error:error.message });
      }
    },
}
module.exports = dashboardController;