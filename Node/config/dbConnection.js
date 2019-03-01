var mysql = require('mysql')

function dbConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return dbConnection;
}

