'use strict';
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const processo = require("./processo");

const Subprocesso = sequelize.define("Subprocesso", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT,allowNull:false },
  processoId:{ type: DataTypes.INTEGER,allowNull: false },
  subprocessoId:{ type: DataTypes.INTEGER }
});
processo.hasMany(Subprocesso,{foreignKey: "processoId",onDelete: "CASCADE"})


Subprocesso.hasMany(Subprocesso,{foreignKey: "subprocessoId",as:"children"})

Subprocesso.belongsTo(processo, { foreignKey: "processoId",onDelete: "CASCADE"});
Subprocesso.belongsTo(Subprocesso, { foreignKey: "subprocessoId",  as: "parent"});

module.exports = Subprocesso;