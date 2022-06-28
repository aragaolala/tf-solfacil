// <button>  + "Formalizações aprovadas" +  <button> Gerar CNAB </button>

import Button from '../components/button/Button';

export function Header(){
return(
    <>
    <div className='titleHeader'>
        <Button
            value='Btn ou IMG' />

        <h1>Formalizações </h1>
        <h2>Aprovadas - 05/01/2021 - 13:40:32</h2>
    </div>
    
    <Button
    value='Gerar CNAB' />
    
    </>
)
}
