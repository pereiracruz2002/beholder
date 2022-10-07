'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const settingsId = await queryInterface.rawSelect('settings',{ where:{},limit:1},['id']);
    if(!settingsId){
        return queryInterface.createTable('settings',{
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
        })
    }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('settings')
  }
};
