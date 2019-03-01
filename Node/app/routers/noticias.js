module.exports = function(app) {
    app.get('/noticias', (req, res) => {
        var connection = app.config.dbConnection();
        var noticiasModels = app.app.models.noticiasModels();

        noticiasModels.getNoticias(connection, function(error, result){
            res.render("noticias/noticias", {noticias: result})
        })
    });
}
