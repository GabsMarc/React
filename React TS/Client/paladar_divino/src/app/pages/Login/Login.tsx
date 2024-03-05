import { useEffect, useState } from "react"
import { Card } from "../../Shared/components/Card"
import { useNavigate } from "react-router-dom"

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



