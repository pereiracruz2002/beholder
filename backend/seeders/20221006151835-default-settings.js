'use strict';
require('dotenv').config();
const bcrypt = require('bcryptjs');
const crypto = require('../src/utils/crypto')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('settings',[{
      email: 'scott@villares.com.br',
      password:bcrypt.hashSync('scott123'),
      apiUrl: 'https://testnet.binance.vision/api',
      acesskey: 'av6Bk3m6Ort3keTQEKuDvymZgdrjSm2Bk7hrXLyKMCUziDe0jbMkXWALIw9DTFXe',
      secretKey: crypto.encrypt('s3WavCcBLKusVQRBMiTKGNg1WdSTo0hHDOlPt5RNlqtmYSeU6ePgpQx8BGKTfjuB'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('settings',null, {})
  }
};
