"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const processo = require("./processo");

const subprocesso = sequelize.define("Subprocesso", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false,
    validate:{
      notEmpty:{
        msg:"Campo nome não pode ser vazio"
      },
    }  
   },
  descricao: { type: DataTypes.TEXT, allowNull: false },
  processoId: { type: DataTypes.INTEGER, allowNull: false,
    validate:{
      notEmpty:{
        msg:"Campo processo não pode ser vazio"
      },
    } 

   },


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
