const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
})

conexion.connect((error) => {
    if(error){
        console.log('Error de conexion: ' +error)
        return
    }
    console.log('Conexion realizada con exito.')
})

module.exports = conexion