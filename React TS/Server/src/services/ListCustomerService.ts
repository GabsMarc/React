import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient()

class ListCustomerService {

    async searchCustomer(request: Request, response: Response) {

        const { email, password } = request.query

        try {
            const customerEmail = await prismaClient.customer.findFirst({
                where: {
                    email: email
                } as Prisma.customerWhereUniqueInput
            })

            if (!customerEmail) {
                return response.status(404).json({ error: 'Não existe um registro com esse email.' });
            }

        } catch {
            return response.status(400).json({ error: 'Erro ao encontrar o cliente' });
        }



        try {
            const login = await prismaClient.customer.findFirst({
                where: {
                    email: email,
                    password: password
                } as Prisma.customerWhereUniqueInput
            })

            if (!login) {
                return response.status(404).json({ error: 'Senha incorreta!' });
            }

            return response.send({
                id: login.id,
                name: login.name,
                lastname: login.lastname
            })

        } catch (error) {
            return response.status(400).json({ error: 'Erro ao encontrar o cliente' });
        }

    }
}

export { ListCustomerService }