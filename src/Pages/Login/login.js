import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Logo from "../../img/logo-solfacil.png";
import styles from "./login.module.css";
import { login, useAuth } from "../../firebase/firebase";
import { useNavigate } from 'react-router';

function Login() {

    document.body.style.backgroundColor = '#333333';

    const [msgError, setMsgError] = useState("")

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();


    async function handleLogin(e) {
        e.preventDefault()
        setLoading(true);

        try {
            if (!email) {
                setMsgError('Preencha o campo email.');
                return
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                setMsgError('Email inválido.');
                return
            }
            if (!password) {
                setMsgError('Preecha o campo senha.');
                return
            }
            if (password.length < 6) {
                setMsgError('Senha curta.');
                return
            }
            setMsgError("")
            await login(email, password);
            navigate("/feed");

        } catch (error) {
            const errorCode = error.code;
            console.log(errorCode, "Senha incorreta.")
            switch (errorCode) {
                case "auth/wrong-password":
                    setMsgError('Senha incorreta.');
                    break
                default: setMsgError('Ops, algo aconteceu.');
            }
        }
        setLoading(false);
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
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="user@suaempresa.com.br"
                />
                <Input
                    classNameInput="input"
                    classNameLabel="input-label"
                    label="Sua senha"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="******"
                />
                <Button
                    text="Entrar"
                    ClassName="button-input"
                    disabled={loading || currentUser}
                />
                {msgError && (
                    <div className={styles.errorContainer}>
                        <p className={styles.errorMensage}>{msgError}</p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Login;
