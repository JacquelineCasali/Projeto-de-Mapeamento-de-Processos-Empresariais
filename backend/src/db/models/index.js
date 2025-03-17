const sequelize = require("../config/database");
const Area = require("./Area");
const Processo = require("./Processo");
const Subprocesso = require("./Subprocesso");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Banco de dados sincronizado!");
  } catch (error) {
    console.error("Erro ao sincronizar o banco:", error);
  }
};

module.exports = { sequelize, syncDatabase, Area, Processo, Subprocesso };