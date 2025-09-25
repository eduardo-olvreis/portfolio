import { useState} from "react"
import style from "./Header.module.css"

export default function Header(){

    //Abrir ou fechar o menu
    const [visivel, setVisivel] = useState(false)

    function toggleMenu(){
        setVisivel(!visivel)
    }
    
    return( 
        <div className={style.containerHeader}>
            <div className={style.logo}>
                <img src="../src/assets/images/logo.svg" alt="Portfólio Eduardo Reis" />
            </div>
            <nav className={style.containerMenu}>
                {/* Menu fixado no header em resoluções maiores */}
                <ul className={style.menuFixed}>
                    <li><a href="#about-section"><p onClick={toggleMenu}>SOBRE MIM</p></a></li>
                    <li><a href="#projects-section"><p onClick={toggleMenu}>PROJETOS</p></a></li>
                    <li><a href="#contact-section"><p onClick={toggleMenu}>CONTATO</p></a></li>
                </ul>
                {/* Menu escondido no mobile */}
                <ul className={`${style.menu} ${visivel? style.menuAberto : ""}`}>
                    <div className={style.containerItens}>
                        <li><a href="#about-section"><p onClick={toggleMenu}>SOBRE MIM</p></a></li>
                        <li><a href="#projects-section"><p onClick={toggleMenu}>PROJETOS</p></a></li>
                        <li><a href="#contact-section"><p onClick={toggleMenu}>CONTATO</p></a></li>
                    </div>
                    <div className={style.containerIcones}>
                        <li><a href="https://www.linkedin.com/in/eduardo-olvreis/" target="__blank"><img src="../src/assets/images/icons/linkedin_Icon.svg" alt="Link para o meu Linkedin" /></a></li>
                        <li><a href="https://github.com/eduardo-olvreis" target="__blank"><img src="../src/assets/images/icons/github_icon.svg" alt="Link para o meu GitHub" /></a></li>
                        <li><a href="mailto:eduardo.olvreis@email.com"><img src="../src/assets/images/icons/email_icon.svg" alt="Link para o meu Email" /></a></li>
                        <li><a href="https://wa.me/5551994412790"><img src="../src/assets/images/icons/whatsap_icon.svg" alt="Link para o meu Celular" /></a></li>
                    </div>
                </ul>
                <button className={`${style.botao} ${visivel ? style.botaoAberto : ""}`} onClick={toggleMenu}>
                    <div className={style.front}><img src="../src/assets/images/icons/menu-icon.svg"/></div>
                    <div className={style.back}><img src="../src/assets/images/icons/close-icon.svg"/></div>
                </button>
            </nav>
        </div>
    )
}