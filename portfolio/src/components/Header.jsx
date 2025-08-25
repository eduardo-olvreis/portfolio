import { useState } from "react"

export default function Header(){
    
    const [visivel, setVisivel] = useState(false)

    function toggleMenu(){
        setVisivel(!visivel)
    }
    
    return(
        <header>
            <a href="" id="logo">
                <img src="../src/assets/images/logoReto.png" alt="Logo principal do portfolio" />
            </a>
            <nav>
                <ul className={visivel? "menu aberto" : "menu"}>
                    <li><a href="">Sobre Mim</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
                <button className={visivel? "botaoFlip aberto" : "botaoFlip"} onClick={toggleMenu}>
                    <div className="front"><img src="../src/assets/images/icons/icone-menu.svg"/></div>
                    <div className="back"><img src="../src/assets/images/icons/icone-fechar.svg"/></div>
                </button>
            </nav>
        </header>
    )
}