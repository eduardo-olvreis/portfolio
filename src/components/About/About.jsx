import style from "./About.module.css"

export default function About(){
    function buttonClick(){
        window.open("../public/Curriculo.pdf", "_blank")
    }
    
    return(
        <section id="about-section" className={style.containerAbout}>
            <div className={style.content}>
                <h2>                   
                    SOBRE MIM
                </h2>
                <p>
                    Desenvolvedor Full-Stack e estudante de Análise e Desenvolvimento de Sistemas Infnet. Atuo na arquitetura e desenvolvimento de soluções escaláveis de ponta a ponta.
                    <br /><br />
                    Minha stack principal é focada em <span className="textImportant">React, NestJS e C# (.NET)</span>. Construo desde APIs robustas e modelagem de banco de dados até interfaces front-end otimizadas e de alta performance.
                </p>
            </div>
            <div className={style.curriculum}>
                <button onClick={buttonClick}>Meu Curriculo</button>
                <img src="../src/assets/images/handImage.png" alt="Imagem de uma mão clicando no botão" onClick={buttonClick}/>
            </div>
        </section>
    )
}