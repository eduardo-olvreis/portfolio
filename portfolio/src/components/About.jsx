export default function About(){
    function buttonClick(){
        window.open("../public/Curriculo.pdf", "_blank")
    }
    
    return(
        <section id="about-section" className="aboutSection">
            <div className="aboutContent">
                <h2>                   
                    SOBRE MIM
                </h2>
                <p>
                    Sou estudante de Análise e Desenvolvimento de Sistemas no Infnet. Tenho me dedicado a aprender e desenvolver projetos com 
                    <span className="textImportant"> HTML, CSS, JavaScript e React.</span>
                    <br /><br />
                    Gosto de transformar ideias em soluções práticas e funcionais, criando interfaces que unem simplicidade, performance e boa experiência ao usuário.
                </p>
            </div>
            <div className="aboutCV">
                <button onClick={buttonClick} id="curriculo">Meu Curriculo</button>
                <img id="handImage" src="../src/assets/images/handImage.png" alt="Imagem de uma mão clicando no botão" />
            </div>
        </section>
    )
}