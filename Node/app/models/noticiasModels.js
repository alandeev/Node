module.exports = function(){
    this.getNoticias = function(connection, callback){
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(index, connection, callback){
        connection.query(`select * from noticias where id_noticia = ${index}`, callback);
    }

    this.sendNoticia = function(value, connection, callback){
        connection.query(`INSERT INTO noticias (titulo, noticia)VALUES('${value.titulo}', '${value.noticia}')`, callback)
    }

    return this;
}