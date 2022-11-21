const mysql = require('mysql')
const config = require('./db.config')

//conectando com o bando de dados mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
})


connection.connect(error => {
    if(error) throw error;
    console.log('Conectado com sucesso')
})


module.exports = connection;