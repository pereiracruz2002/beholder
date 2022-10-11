const settingsModel = require('../models/settingsModel');

function getSettingsByEmail(email){
    result = settingsModel.findOne({
        where:{
            email:email
        }
    })
    
    return result;
}

function getSettings(id){
    return settingsModel.findOne({
        where:{
            id
        }
    })
}

module.exports = { getSettingsByEmail, getSettings }