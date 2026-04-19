import style from "./About.module.css"
import handImage from "../../assets/images/handImage.png"

export default function About(){
    function buttonClick(){
        window.open("../public/Curriculo.pdf", "_blank")
    }
    
    return(
        <section className={style.containerAbout}>
            <div className={style.content} id="about-section">
                <h2>                   
                    SOBRE MIM
                </h2>
                <p>
                    Sou desenvolvedor Full-Stack e estudante de Análise e Desenvolvimento de Sistemas. Iniciei minha trajetória em TI atuando com suporte, onde desenvolvi forte capacidade de análise e resolução de problemas reais.
                    <br /><br />
                    Hoje, atuo no desenvolvimento de aplicações completas, do backend ao frontend, utilizando tecnologias como <span className="textImportant">C# (.NET), React, NestJS e MySQL</span>. Tenho foco em escrever código limpo, organizado e em construir sistemas eficientes e fáceis de usar.
                </p>
            </div>
            <div className={style.curriculum}>
                <button onClick={buttonClick}>Meu Curriculo</button>
                <img src={handImage} alt="Imagem de uma mão clicando no botão" onClick={buttonClick}/>
            </div>
        </section>
    )
}