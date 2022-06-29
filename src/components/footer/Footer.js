import Button from '../button/Button';
import logotipo from "../../img/logotipo.svg";

export function Footer(){
    return(
        <footer>
        <img
            className="solfacil-logo"
            alt="Logotipo da Solfacil"
            src={logotipo} />
            
            <Button
                value=' ← Voltar' 
                className="footerButton"
                />
        </footer>
    )
}