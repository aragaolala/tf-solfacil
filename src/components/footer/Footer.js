import logotipo from "../../img/icone-footer.png";
import Arrow from "../../img/arrow-footer.png";
import './footer.css'

export function Footer() {
    return (
        <>
            <footer className="footer">
                <img
                    className="solfacil-logo"
                    alt="ícone do footer"
                    src={logotipo}
                />
                <button className="arrowButton">
                <img
                    className="icone-arrow"
                    alt="ícone-arrow do footer"
                    src={Arrow}
                />
               <p>voltar</p>
            </button>
            </footer>
        </>
    )
}