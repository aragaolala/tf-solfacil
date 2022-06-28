import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Logo from "../../img/logo-solfacil-png.png";
import styles from "./login.module.css";
import { login, useAuth } from "../../firebase/firebase";
import { useNavigate } from 'react-router';


function Login() {

    // const [msgError, setMsgError] = useState("")

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();


    async function handleLogin(e) {
        e.preventDefault();
        // console.log(email.current.value, password.current.value);
        setLoading(true);

        try {
            await login(email.current.value, password.current.value);
        } catch {
            alert("Error!");
        }
        setLoading(false)
        navigate("/feed");
    }

    return (
        <div className={styles.containerLogin}>
            <img className={styles.logo} src={Logo} alt="Logo Solfacil" />
            <form className={styles.containerForm} onSubmit={handleLogin}>
                <h1 className={styles.tituloLogin}>Acesse sua conta</h1>
                <Input
                    classNameLabel="input-label"
                    label="Seu E-mail"
                    type="text"
                    onchange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="user@suaempresa.com.br"
                    required={true}
                />
                <Input
                    classNameInput="input"
                    classNameLabel="input-label"
                    label="Sua senha"
                    type="password"
                    onchange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="******"
                    required={true}
                />
                <Button
                    text="Entrar"
                    ClassName="button-input"
                    disabled={loading || currentUser}
                />
                {/* {msgError && (
                    <div className="error-container">
                        <p className="error-mensage">{msgError}</p>
                    </div>
                )} */}
            </form>
        </div>
    );
}

export default Login;
