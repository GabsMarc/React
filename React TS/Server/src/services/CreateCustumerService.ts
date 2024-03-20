import { customer } from './../../node_modules/.prisma/client/index.d';
import prismaClient from '../prisma'

interface CreateCustomerProps {
    name: string,
    lastname: string,
    email: string,
    password: string
}

class CreateCustomerService {
    async execute({ name, lastname, email, password }: CreateCustomerProps) {
        try {
            if (!name || !lastname || !email || !password) {
                throw new Error("Preencha todos os campos");
            }


            const customer = await prismaClient.customer.create({
                data: {
                    name,
                    lastname,
                    email,
                    password
                }
            });
            return customer;
        } catch (error) {
            throw new Error("Erro ao criar cliente: " + error.message);
        }
    }
}

export { CreateCustomerService }




