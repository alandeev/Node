module.exports = function(app) {
    app.get('/noticia', (req, res) => {
        var connection = app.config.dbConnection();
        var noticiasModels = app.app.models.noticiasModels();
          
        noticiasModels.getNoticia(2, connection, function(error, result){
            res.render("noticias/noticia", {noticia: result})
        });
    });
}
