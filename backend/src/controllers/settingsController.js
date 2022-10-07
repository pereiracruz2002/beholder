function getSettings(req, res){
    res.json ({
        email: 'contato@bholder.com'
    })
}

module.exports = { getSettings };