const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PWD,{
    dialect:process.env.DB_DIALECT,
    storage:'./src/database.sqlite'
});
module.exports = sequelize;