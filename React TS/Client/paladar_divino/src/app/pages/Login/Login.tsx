import { useEffect, useState } from "react"
import { Card } from "../../Shared/components/AccessCard"
import { useNavigate } from "react-router-dom"


interface CreateCustomerProps {
    name: string,
    lastname: string,
    email: string,
    password: string,
    created_at: string,
    updated_at: string
}



export const LoginPage = () => {

    return (

        <Card
            TypeOfAccess={true}
        >

        </Card>

    )

}



