import Input from "../../components/Input";
import Button from "../../components/Button"
import Logo from "../../img/logo-solfacil-png.png"

import styles from "./login.module.css"

function Login() {

    return (
        <div className={styles.containerLogin}>
            <img className={styles.logo} src={Logo} alt="Logo Solfacil" />
            <form className={styles.containerForm}>
            <h1 className={styles.tituloLogin}>Acesse sua conta</h1>
                <Input
                    classNameLabel="input-label"
                    label="Seu E-mail"
                    type="email"
                    name="email"
                    placeholder="user@suaempresa.com.br"
                    required={true}
                />                
                <Input
                    classNameInput = "input"
                    classNameLabel= "input-label"
                    label="Sua senha"
                    type="password"
                    name="password"
                    placeholder="******"
                    required={true}
                />
                <Button
                    text="Entrar"
                    ClassName="button-input"
                />
            </form>
        </div>
    )
}

export default Login;