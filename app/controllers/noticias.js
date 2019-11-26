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

    var id_noticia = req.query.id_noticia;
    
    noticiasModel.getNoticia(id_noticia, function(error, result){
        res.render("noticias/noticia.ejs", {noticia : result});
    });
}