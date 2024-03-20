import Express, { request, response } from 'express'
import { CreateCustomerController } from './controllers/CreateCustumerController';
import { ListCustomerController } from './controllers/ListCustomerController';
import { ListProductController } from './controllers/ListProductController';


const router = Express.Router()




router.get('/teste', (request, response) => {
    return console.log(response.send('Entrou no TESTE!'))
})


router.get('/register', async (request, response) => {
    return await new CreateCustomerController().handle(request, response);
})


router.get('/customer', async (request, response) => {
    return await new ListCustomerController().handle(request, response);
})


router.get('/product', async (request, response) => {
    return await new ListProductController().handle(request, response)
})


export { router }



