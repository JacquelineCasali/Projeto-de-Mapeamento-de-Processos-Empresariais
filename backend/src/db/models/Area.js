'use strict';
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");



const area = sequelize.define("Area", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false,unique:true,
    validate:{
      notEmpty:{
        msg:"Campo nome não pode ser vazio"
      },
    }  
   
   },
},{
  timeStamp:true,
});



module.exports = area;