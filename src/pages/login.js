import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import Button from "../components/Button.js"
import Input from "../components/Input";

function LoginPage() {

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
        <div className="container">

            <form className="form" onSubmit={submit}>
                <section className="information">
                    <label> Email:
                        <Input
                            type="text"
                            name="email"
                            placeholder="email@exemplo.com"
                            onChange={handleInputChange}
                            required={true}
                        />
                    </label>
                    <label> Senha:
                        <Input
                            type="password"
                            name="password"
                            placeholder="Até 8 caracteres"
                            maxLength="8"
                            onChange={handleInputChange}
                            required={true}
                        />
                    </label>
                </section>
                <div className="onClick-button">
                    <Button
                        className="button-input"
                        type="submit"
                        text="Entrar"
                    > Entrar </Button>
                </div>
                {/* {msgError && (
                    <div className="error-container">
                        <p className="error-mensage">{msgError}</p>
                    </div>
                )} */}
            </form>
        </div>
    )
}

export default LoginPage