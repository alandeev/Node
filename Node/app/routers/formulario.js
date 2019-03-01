module.exports = function(app){
    app.get('/formulario', (req, res) => {
        res.render("admin/formulario");
    })
    
    app.post('/noticias/salvar', (req, res) => {
        var value = req.body;

        var connection = app.config.dbConnection();
        var noticiasModels = app.app.models.noticiasModels;

        noticiasModels.sendNoticia(value, connection, function(error, result){
            res.redirect('/noticias');
        })
    })
}