import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Logo from "../../img/logo-solfacil-png.png";
import styles from "./login.module.css";
import { login, useAuth } from "../../firebase/firebase";
// import { Navigate } from 'react-router'; ----- navegação

/* Dúvida: encaixar no handleLogin após o setLoading? Deu erro.

.then(() => {
  Navigate("feed"); ----- navegação
})

*/

function Login() {
    const userInfo = {
        email: "",
        password: "",
    };

    const [info, setInfo] = useState({ userInfo });

    // const [msgError, setMsgError] = useState("")

    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    //const emailRef = useRef();
    // const passwordRef = useRef();

    // ---------------   Erro: não está pegando os valores do input (27/06)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    // console.log(info);

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);

        try {
            await login(info);
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    /* const submit = (e) => {
          e.preventDefault()
  
          //função auth firebase
          console.log(info)
      }
      */

    return (
        <div className={styles.containerLogin}>
            <img className={styles.logo} src={Logo} alt="Logo Solfacil" />
            <form className={styles.containerForm} onSubmit={handleLogin}>
                <h1 className={styles.tituloLogin}>Acesse sua conta</h1>
                <Input
                    classNameLabel="input-label"
                    label="Seu E-mail"
                    type="text"
                    onchange={handleInputChange}
                    name="email"
                    placeholder="user@suaempresa.com.br"
                    required={true}
                />
                <Input
                    classNameInput="input"
                    classNameLabel="input-label"
                    label="Sua senha"
                    type="password"
                    onchange={handleInputChange}
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

// onClick={handleLogin}
