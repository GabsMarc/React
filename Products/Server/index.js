const express = require('express')
const app = express()
const mysql = require('mysql')
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

app.post('/register', (req, res) => {
    let name = req.body.name
    let category = req.body.category
    let value = req.body.value
    let active = req.body.active

    if (active === 'on') {
        active = 1
    } else {
        
    }


    let SQL = `INSERT INTO items ( name, category, value, active ) 
               VALUES ( ?, ?, ?, ? )`

    console.log(name)

    db.query(SQL, [name, category, value, active], (err, result) => {
        console.log(err), console.log('Novo registro inserido com sucesso!')
    })
})





app.listen(3001, () => {
    console.log('Servidor Rodando na porta 3001! ')
})