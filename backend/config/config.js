require('dotenv').config();

module.exports = {
    development : {
        dialect: process.env.DB_DIALECT,
        storage:'./src/database.sqlite',
        loggin:true
    },
    test:{
        dialect: process.env.DB_DIALECT,
        storage:'./src/database.sqlite',
        loggin:true
    },
    production:{
        dialect: process.env.DB_DIALECT,
        storage:'./src/database.sqlite',
        loggin:true
    }
}