export default function About(){
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
                <button id="curriculo">Meu Curriculo</button>
                <img id="handImage" src="../src/assets/images/handImage.png" alt="" />
            </div>
        </section>
    )
}