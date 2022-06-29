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
                <button className="arrowButton" value="footer-btn" id="footer-btn">
                <img
                    className="icone-arrow"
                    alt="ícone-arrow do footer"
                    src={Arrow}
                />
                <p className="paragrafo-footer">voltar</p>
            </button>
            </footer>
        </>
    )
}