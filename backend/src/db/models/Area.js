const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Area = sequelize.define("Area", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Area;