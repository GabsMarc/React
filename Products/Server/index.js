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


    let SQL = `INSERT INTO items ( name, category, value ) 
               VALUES ( ?, ?, ? )`


    db.query(SQL, [name, category, value], (err, result) => {
        if (err) console.log(err)
        else res.send(result), console.log('Novo registro inserido com sucesso!')
    })
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params
    let SQL = `DELETE 
               FROM items
               WHERE id = ? `

    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err)
        else res.send(result), console.log('Deletado com sucesso!')
    })
})

app.put('/edit', (req, res) => {
    const { id } = req.body
    const { name } = req.body
    const { value } = req.body
    const { category } = req.body

    console.log(name)

    let SQL = `UPDATE items 
               set name = ?,
               value = ?,
               category = ?
               WHERE id = ?
               `


    db.query(SQL, [name, value, category, id], (err, result) => {
        if (err) console.log(err)
        else res.send(result), console.log('Atualizado com sucesso!')
    })

})



app.listen(3001, () => {
    console.log('Servidor Rodando na porta 3001! ')
})