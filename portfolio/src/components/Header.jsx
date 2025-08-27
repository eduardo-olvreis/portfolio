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
                    <li><a href=""><p className="itemMenu">Sobre Mim</p></a></li>
                    <li><a href=""><p className="itemMenu">Projetos</p></a></li>
                    <li><a href=""><p className="itemMenu">Contato</p></a></li>
                </ul>
                <button className={visivel? "botaoFlip aberto" : "botaoFlip"} onClick={toggleMenu}>
                    <div className="front"><img src="../src/assets/images/icons/menu-icon.svg"/></div>
                    <div className="back"><img src="../src/assets/images/icons/close-icon.svg"/></div>
                </button>
            </nav>
        </header>
    )
}