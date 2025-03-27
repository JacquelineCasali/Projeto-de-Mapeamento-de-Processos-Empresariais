'use strict';
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const area = require("./area");


const processo = sequelize.define("Processo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false,
    validate:{
      notEmpty:{
        msg:"Campo nome não pode ser vazio"
      },
    }  
   },
  descricao: { type: DataTypes.TEXT,allowNull: false },
  responsavel:{type: DataTypes.STRING,allowNull: false,
    validate:{
      notEmpty:{
        msg:"Campo responsável não pode ser vazio"
      },
    }  
  },
  areaId:{ type: DataTypes.INTEGER ,allowNull: false,
    validate:{
      notEmpty:{
        msg:"Campo área não pode ser vazio"
      },
    }  
  },
  ferramentas: {
    type: DataTypes.STRING,
  },
  documentacao: {
    type: DataTypes.STRING,
  },
  // documentos: {
  //   type: DataTypes.JSON, // Armazena um array de nomes de arquivos
  // },
});
area.hasMany(processo,{ foreignKey: "areaId",onDelete: "CASCADE",onUpdate:'CASCADE' })
processo.belongsTo(area, { foreignKey: "areaId",onDelete: "CASCADE",onUpdate:'CASCADE' });

module.exports = processo;