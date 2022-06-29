import Button from '../button/Button';
import "./header.css"

export function Header() {
    return (
        <header className="Header">
            <button className="arrowButton">
                <svg className="svgImage" width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32.5" r="31" stroke="#666666" strokeWidth="2" />
                    <path d="M48 33.5C48.5523 33.5 49 33.0523 49 32.5C49 31.9477 48.5523 31.5 48 31.5L48 33.5ZM15.2929 31.7929C14.9024 32.1834 14.9024 32.8166 15.2929 33.2071L21.6569 39.5711C22.0474 39.9616 22.6805 39.9616 23.0711 39.5711C23.4616 39.1805 23.4616 38.5474 23.0711 38.1569L17.4142 32.5L23.0711 26.8431C23.4616 26.4526 23.4616 25.8195 23.0711 25.4289C22.6805 25.0384 22.0474 25.0384 21.6569 25.4289L15.2929 31.7929ZM48 31.5L16 31.5L16 33.5L48 33.5L48 31.5Z" fill="#666666" />
                </svg>
            </button>
            <div className='container-info'>
                <h1 className="titleHeader">Formalizações </h1>
                <p className="subtitleHeader">APROVADAS - 05/01/2021 - 13:40:32</p>
            </div>
            <Button className="button-header" value='Gerar CNAB' text="Gerar CNAB" />
        </header>
    )
}