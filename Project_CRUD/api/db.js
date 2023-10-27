import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Marcc1254679',
    database: 'crud'
})