import { useState, useEffect } from "react"
import style from "./Header.module.css"
import logo from "../../assets/images/logo.svg"
import linkedinIcon from "../../assets/images/icons/linkedin_Icon.svg"
import githubIcon from "../../assets/images/icons/github_icon.svg"
import emailIcon from "../../assets/images/icons/email_icon.svg"
import menuIcon from "../../assets/images/icons/menu-icon.svg"
import closeIcon from "../../assets/images/icons/close-icon.svg"

export default function Header(){
    const [visivel, setVisivel] = useState(false)

    function toggleMenu(){
        setVisivel(!visivel)
    }
    
    useEffect(() => {
        if (visivel) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [visivel]);
    
    return( 
        <div className={style.containerHeader}>
            <div className={style.logo}>
                <a href="/"><img src={logo} alt="Portfólio Eduardo Reis" /></a>
            </div>
            <nav className={style.containerMenu}>
                {/* Menu fixado no header em resoluções maiores */}
                <ul className={style.menuFixed}>
                    <li><a href="#about-section"><p>SOBRE MIM</p></a></li>
                    <li><a href="#projects-section"><p>PROJETOS</p></a></li>
                    <li><a href="#contact-section"><p>CONTATO</p></a></li>
                </ul>
                {/* Menu escondido no mobile */}
                <ul className={`${style.menu} ${visivel? style.menuAberto : ""}`}>
                    <div className={style.containerItens}>
                        <li><a href="#about-section"><p onClick={toggleMenu}>SOBRE MIM</p></a></li>
                        <li><a href="#projects-section"><p onClick={toggleMenu}>PROJETOS</p></a></li>
                        <li><a href="#contact-section"><p onClick={toggleMenu}>CONTATO</p></a></li>
                        <li><a href="/Curriculo.pdf" target="__blank"><p onClick={toggleMenu}>CURRICULO</p></a></li>
                    </div>
                    <div className={style.containerIcones}>
                        <li><a href="https://www.linkedin.com/in/eduardo-olvreis/" target="__blank"><img src={linkedinIcon} alt="Link para o meu Linkedin" /></a></li>
                        <li><a href="https://github.com/eduardo-olvreis" target="__blank"><img src={githubIcon} alt="Link para o meu GitHub" /></a></li>
                        <li><a href="mailto:eduardo.olvreis@gmail.com"><img src={emailIcon} alt="Link para o meu Email" /></a></li>
                    </div>
                </ul>
                <button className={`${style.botao} ${visivel ? style.botaoAberto : ""}`} onClick={toggleMenu}>
                    <div className={style.front}><img src={menuIcon}/></div>
                    <div className={style.back}><img src={closeIcon}/></div>
                </button>
            </nav>
        </div>
    )
}