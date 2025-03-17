const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Area = require("./Area");

const Processo = sequelize.define("Processo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
});

Processo.belongsTo(Area, { foreignKey: "area_id", onDelete: "CASCADE" });

module.exports = Processo;