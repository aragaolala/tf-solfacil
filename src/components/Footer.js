import Button from '../components/button/Button';
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