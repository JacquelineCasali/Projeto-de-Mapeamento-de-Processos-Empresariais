const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Processo = require("./Processo");

const Subprocesso = sequelize.define("Subprocesso", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
});

Subprocesso.belongsTo(Processo, { foreignKey: "processo_id", onDelete: "CASCADE" });
Subprocesso.belongsTo(Subprocesso, { foreignKey: "subprocesso_pai_id", onDelete: "CASCADE", as: "Pai" });

module.exports = Subprocesso;