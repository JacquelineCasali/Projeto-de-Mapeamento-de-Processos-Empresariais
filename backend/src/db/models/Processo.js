'use strict';
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const area = require("./area");


const processo = sequelize.define("Processo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT,allowNull: false },
  areaId:{ type: DataTypes.INTEGER ,allowNull: false}
});
area.hasMany(processo,{ foreignKey: "areaId",onDelete: "CASCADE",onUpdate:'CASCADE' })
processo.belongsTo(area, { foreignKey: "areaId",onDelete: "CASCADE",onUpdate:'CASCADE' });

module.exports = processo;