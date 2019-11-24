module.exports = function(app){
    
    app.get('/noticias', function(req, res){
        var connection = app.config.connection.mysql();
        
        connection.query('select * from noticias;', function(error, result){
            res.render("noticias/noticias.ejs", {noticias : result});
        });
    });
};