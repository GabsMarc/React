import { useEffect, useState } from "react"
import { Card } from "../../Shared/components/Card"

export const RegisterPage = () => {

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [register, setRegister] = useState(false)

    // useEffect(() => {
    //     console.log('entrou: ' + register)
    // }, [register])
    
    

    return (
        <Card 
            TypeOfAccess={false}
            onChangeName={newValue => setName(newValue)}
            onChangeLastname={newValue => setLastname(newValue)}
            onChangeEmail={newValue => setEmail(newValue)}
            onChangePassword={newValue => setPassword(newValue)}
            onChangeConfirmPassword={newValue => setConfirmPassword(newValue)}
            onClick={value => setRegister(value)}
        >

        </Card>

    )
}