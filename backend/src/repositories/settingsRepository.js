const settingsModel = require('../models/settingsModel');

function getSettingsByEmail(email){
    result = settingsModel.findOne({
        where:{
            email:email
        }
    })
    
    return result;
}

module.exports = { getSettingsByEmail }