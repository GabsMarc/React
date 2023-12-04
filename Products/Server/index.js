const express = require('express')
const app = express()
const mysql = require ('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Marcc1254679',
    database: 'product'
})


app.get('/getProduct', (req, res) => {

    let SQL = `SELECT * FROM items`

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})






app.listen(3001, () => {
    console.log('Servidor Rodando na porta 3001! ')
})