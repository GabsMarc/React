import Express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = Express()
app.use(Express.json())

async function start(){
    
    app.use(cors())
    app.use(router)
    
    app.listen(8080, () => {
        console.log(`O servidor está rodando na porta 8080`)
    })
}


start()