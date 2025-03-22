"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const processo = require("./processo");

const subprocesso = sequelize.define("Subprocesso", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT, allowNull: false },
  processoId: { type: DataTypes.INTEGER, allowNull: false },
});
processo.hasMany(subprocesso, {
  foreignKey: "processoId",
  onDelete: "CASCADE",
});

subprocesso.belongsTo(processo, {
  foreignKey: "processoId",
  onDelete: "CASCADE",
});

module.exports = subprocesso;
