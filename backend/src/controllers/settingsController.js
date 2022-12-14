const settingsRepository = require('../repositories/settingsRepository');

async function getSettings(req, res){
    const id = res.locals.token.id;
    const settings = await settingsRepository.getSettings(id);
    res.json (settings);
}

module.exports = { getSettings };