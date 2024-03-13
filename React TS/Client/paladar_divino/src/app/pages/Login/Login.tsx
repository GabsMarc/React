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

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)

    useEffect(() => {
        HandleLogin()
    }, [register])


    function HandleLogin() {
        if (register === true) {
            navigate('/menu')
        }
    }

    // const handleLogin = useCallback(() => {

    // }, [register],)


    return (

        <Card
            TypeOfAccess={true}
            onChangeEmail={newValue => setEmail(newValue)}
            onChangePassword={newValue => setPassword(newValue)}
            onClick={value => setRegister(value)}
        >

        </Card>

    )

}



