import Carousel from "./Carousel"

const meusProjetos = [
    {   // Alma Joias 
        id: 1,
        name: "Alma Joias",
        description: "Website para a Alma Joias em desenvolvimento. O projeto é um site de e-commerce e catálogo de produtos, focado em um layout limpo e responsivo, feito com HTML, CSS e JavaScript.",
        image: "../src/assets/images/projects/almaImage.svg",
        alt: "Imagem do projeto Alma Joias",
        url: "https://github.com/eduardo-olvreis/projeto-alma-joias"
    },
    {
        id: 2,
        name: "Portfólio",
        description: "Este é o próprio site, desenvolvido em React como uma Single-Page Application (SPA) para demonstrar minhas habilidades na criação de interfaces dinâmicas e responsivas.",
        image: "../src/assets/images/projects/portfolioImage.svg",
        alt: "Imagem do projeto portfólio",
        url: "https://github.com/eduardo-olvreis/portfolio"
    },
    {
        id: 3,
        name: "Shopping Cart",
        description: "Carrinho de compras funcional em React, desenvolvido para praticar estados, props e estilização com CSS Modules.",
        image: "../src/assets/images/projects/shoppingcartImage.svg",
        alt: "Imagem do projeto shopping cart",
        url: "https://github.com/eduardo-olvreis/shopping-cart-exercise"
    },
    {
        id: 4,
        name: "Conversor de Moedas",
        description: "Conversor de moedas em React, criado para praticar estados, formulários, eventos e consumo de dados externos.",
        image: "../src/assets/images/projects/conversorImage.svg",
        alt: "Imagem do projeto Conversor de Moedas",
        url: "https://github.com/eduardo-olvreis/currency-converter-exercise"
    },
    {
        id: 5,
        name: "Calculadora",
        description: "Uma calculadora funcional, desenvolvida como meu primeiro projeto para aprendizado em HTML, CSS e JavaScript.",
        image: "../src/assets/images/projects/calculatorImage.svg",
        alt: "Imagem do projeto Calculadora",
        url: "https://github.com/eduardo-olvreis/calculadora-js"
    },
    {
        id: 6,
        name: "Task List",
        description: "Lista de tarefas feita para praticar HTML, CSS e JavaScript. Foco em manipulação de elementos da página e criação de uma interface intuitiva.",
        image: "../src/assets/images/projects/tasklistImage.svg",
        alt: "Imagem do projeto Task List",
        url: "https://github.com/eduardo-olvreis/task-list-js"
    }
]

export default function Projects(props){
    return(
        <section id="projects-section" className="projectsSection">
            <div className="projectsContent">
                <h2>MEUS <br />PROJETOS</h2>
                <Carousel items={meusProjetos}></Carousel>
            </div>
        </section>
    )
}