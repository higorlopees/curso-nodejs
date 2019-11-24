var mysql = require('mysql');
var connMySQL = function(){
    console.log('conexao com db estabelecida')
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: '1234',
        database : 'portal_noticias'
    })
};

module.exports = function(){
    console.log('O auto load carregou o modulo de conexao com o db')
    return connMySQL;
}