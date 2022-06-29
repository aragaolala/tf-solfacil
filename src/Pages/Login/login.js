import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Logo from "../../img/logo-solfacil.png";
import styles from "./login.module.css";
import { login, useAuth } from "../../firebase/firebase";
import { useNavigate } from 'react-router';
// import ErrorsMessage from "./loginValid";


function Login() {

    document.body.style.backgroundColor = '#333333';

    const [msgError, setMsgError] = useState("")

    // const { errors } = handleLogin(ErrorsMessage)

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
                setMsgError('Eita, faltou o email.');
                return
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                setMsgError('Ops, email inválido.');
                return
            }
            if (!password) {
                setMsgError('Ops, faltou a senha.');
                return
            } 
            if (password.length < 6) {
                setMsgError('Vish, senha curta.');
                return
            }
            setMsgError("")
            await login(email, password);
            
            
        } catch {

            // ok = !email && !password;

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
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="user@suaempresa.com.br"
                    // required={true}
                />
                <Input
                    classNameInput="input"
                    classNameLabel="input-label"
                    label="Sua senha"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="******"
                    // required={true}
                />
                <Button
                    text="Entrar"
                    ClassName="button-input"
                    disabled={loading || currentUser}
                />
                {msgError && (
                    <div className="error-container">
                        <p className="error-mensage">{msgError}</p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Login;
