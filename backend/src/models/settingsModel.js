const Sequelize = require('sequelize');
const database = require('../db');

const settingsModel = database.define('settings',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    apiUrl:{
        type: Sequelize.STRING
    },
    acessKey:{
        type: Sequelize.STRING
    },
    secretKey:{
        type: Sequelize.STRING
    },
    createdAt:{
        type:Sequelize.DATE
    },
    updatedAt:{
        type: Sequelize.DATE
    }
}, {
    indexes:[{
        fields: ['email'],
        unique: true
    }]
})

module.exports = settingsModel;