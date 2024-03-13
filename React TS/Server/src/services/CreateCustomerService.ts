import prismaClient from '../prisma'

interface CreateCustomerProps {
    name: string,
    lastname: string,
    email: string,
    password: string
}

class CreateCustomerService {
    async execute({ name, lastname, email, password }: CreateCustomerProps) {

        if (!name || !email) {
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                lastname,
                email,
                password
            }
        })

        return customer
    }
}

export { CreateCustomerService }