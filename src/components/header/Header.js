// <button>  + "Formalizações aprovadas" +  <button> Gerar CNAB </button>

import Button from '../button/Button';
import "./header.css"

export function Header(){
return(
    
    <header className="containerHeader">
    <Button
            value='Btn ou IMG' 
            ClassName="buttonHeader"
            />
        <h1 className="titleHeader">Formalizações </h1>
        <p className="subtitleHeader">Aprovadas - 05/01/2021 - 13:40:32</p>
        <Button
    text="GERAR CNAB"
    ClassName="buttonCnab"
    />
    </header>    
    
)
}
