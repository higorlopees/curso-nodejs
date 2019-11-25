module.exports.noticias = function (app, req, res){
    var connection = app.config.connection.mysql();
    var noticiasModel= new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias.ejs", {noticias : result});
    })
}

module.exports.noticia = function (app, req, res){
    var connection = app.config.connection.mysql();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    
    noticiasModel.getNoticia(function(error, result){
        res.render("noticias/noticia.ejs", {noticia : result});
    });
}