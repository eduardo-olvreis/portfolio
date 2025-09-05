import { useState } from "react"

export default function Header(){
    
    const [visivel, setVisivel] = useState(false)

    function toggleMenu(){
        setVisivel(!visivel)
    }
    
    return(
        <header>   
            <div className="headerLogo">
                <img src="../src/assets/images/logo.svg" alt="Logo principal do portfolio" />
            </div>
            <nav>
                <ul className={visivel? "menu aberto" : "menu"}>
                    <div className="itensListaMenu">
                        <li><a href="#about-section"><p className="itemMenu" onClick={toggleMenu}>SOBRE MIM</p></a></li>
                        <li><a href=""><p className="itemMenu" onClick={toggleMenu}>PROJETOS</p></a></li>
                        <li><a href=""><p className="itemMenu" onClick={toggleMenu}>CONTATO</p></a></li>
                    </div>
                    <div className="iconesListaMenu">
                        <li><a href="https://www.linkedin.com/in/eduardo-olvreis/" target="__blank"><img src="../src/assets/images/icons/linkedin_Icon.svg" alt="Link para o meu Linkedin" /></a></li>
                        <li><a href="https://github.com/eduardo-olvreis" target="__blank"><img src="../src/assets/images/icons/github_icon.svg" alt="Link para o meu GitHub" /></a></li>
                        <li><a href="mailto:eduardo.olvreis@email.com"><img src="../src/assets/images/icons/email_icon.svg" alt="Link para o meu Email" /></a></li>
                        <li><a href="https://wa.me/5551994412790"><img src="../src/assets/images/icons/whatsap_icon.svg" alt="Link para o meu Celular" /></a></li>
                    </div>
                </ul>
                <button className={visivel? "botaoFlip aberto" : "botaoFlip"} onClick={toggleMenu}>
                    <div className="front"><img src="../src/assets/images/icons/menu-icon.svg"/></div>
                    <div className="back"><img src="../src/assets/images/icons/close-icon.svg"/></div>
                </button>
            </nav>
        </header>
    )
}