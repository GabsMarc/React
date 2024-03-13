import { useEffect, useState } from "react"
import { Card } from "../../Shared/components/AccessCard"
import { api } from "../../services/api"




export const RegisterPage = () => {

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // const [register, setRegister] = useState(false)

    // useEffect(() => {
    //     console.log('entrou: ' + register)
    // }, [register])



    async function RegisterCustumer() {

        if (!name || !email || !password) return


        const register = await api.post("/register", {
            name: name,
            lastname: lastname,
            email: email,
            password: password
        })

        console.log(register.data)
    }


    return (
        <Card
            TypeOfAccess={false}
            onChangeName={newValue => setName(newValue)}
            onChangeLastname={newValue => setLastname(newValue)}
            onChangeEmail={newValue => setEmail(newValue)}
            onChangePassword={newValue => setPassword(newValue)}
            onChangeConfirmPassword={newValue => setConfirmPassword(newValue)}
            onClick={value => RegisterCustumer()}
        >

        </Card>

    )
}