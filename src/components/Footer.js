import Button from '../components/Button.js';
import logotipo from '../img/logotipo.svg';

export function Footer(){
    return(
        <>
        <img
            className="solfacil-logo"
            alt="Logotipo da Solfacil"
            src={logotipo} />
            
            <Button
                value=' ← Voltar' /></>
    )
}