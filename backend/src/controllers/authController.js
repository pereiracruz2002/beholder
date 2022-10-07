const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const settingsRepository = require('../repositories/settingsRepository');

async function doLogin(req, res){
    const {email, password} = req.body;
    const settings = await settingsRepository.getSettingsByEmail(email);
    if(settings){
        const isValid = bcrypt.compare(password, settings.password);
        if(isValid){
            const token = jwt.sign({id:settings.id},process.env.JWT_SECRET,{
                expiresIn:parseInt(process.env.JWT_EXPIRES)
            })
            return res.json({ token });
        }
    }
    res.sendStatus(401);
}

const blacklist = [];

function doLogout(req, res){
    const token = req.headers['authorization'];
    blacklist.push(token);
    res.sendStatus(200);
}

function isBlackListed(token){
    return blacklist.some(t=> t===token);
}

module.exports = {doLogin,doLogout, isBlackListed}