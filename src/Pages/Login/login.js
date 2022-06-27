import { useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button"
import Logo from "../../img/logo-solfacil-png.png"

import styles from "./login.module.css"

function Login() {

    const userInfo = {
        email: "",
        password: "",
    }

    const [info, setInfo] = useState({ userInfo });

    // const [msgError, setMsgError] = useState("")

    //const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()

        //função auth firebase
        console.log(info)
    }


    return (
        <div className={styles.containerLogin}>
            <img className={styles.logo} src={Logo} alt="Logo Solfacil" />
            <form className={styles.containerForm} onSubmit={submit} >
            <h1 className={styles.tituloLogin}>Acesse sua conta</h1>
                <Input
                    classNameLabel="input-label"
                    label="Seu E-mail"
                    type="email"
                    onChange={handleInputChange}
                    name="email"
                    placeholder="user@suaempresa.com.br"
                    required={true}
                />                
                <Input
                    classNameInput = "input"
                    classNameLabel= "input-label"
                    label="Sua senha"
                    type="password"
                    onChange={handleInputChange}
                    name="password"
                    placeholder="******"
                    required={true}
                />
                <Button
                    text="Entrar"
                    ClassName="button-input"
                />
                {/* {msgError && (
                    <div className="error-container">
                        <p className="error-mensage">{msgError}</p>
                    </div>
                )} */}
            </form>
        </div>
    )
}

export default Login;