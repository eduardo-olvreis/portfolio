import Carousel from "./Carousel"
import style from "./Projects.module.css"
import notasFiscais from "../src/assets/images/projects/notasfiscaisImage.svg"
import crmed from "../src/assets/images/projects/crmedImage.svg"
import learnFlix from "../src/assets/images/projects/learnflixImage.svg"
import almaJoias from "../src/assets/images/projects/almajoiasImage.svg"
import portfolio from "../src/assets/images/projects/portfolioImage.svg"
import taskList from "../src/assets/images/projects/tasklistImage.svg"

const meusProjetos = [
    {
        id: 1,
        name: "Notas Fiscais",
        description: <>Sistema de emissão de notas fiscais desenvolvido como desafio técnico, focado em regras de negócio reais com back-end em <span className="textImportant">C# (.NET)</span> e interface em <span className="textImportant">Angular</span>.</>,
        image: {notasFiscais},
        alt: "Imagem do projeto de Emissão de Notas Fiscais",
        url: "https://github.com/eduardo-olvreis/Korp_Teste_EduardoReis"
    },
    {
        id: 2,
        name: "CRMed",
        description: <>Sistema de gestão de clínicas full-stack, desenvolvido em equipe utilizando <span className="textImportant">React</span> no front-end, <span className="textImportant">NestJS</span> na API e banco <span className="textImportant">MySQL</span>.</>,
        image: {crmed},
        alt: "Imagem do projeto CRMed",
        url: "https://github.com/Grupo-02-Turma-JavaScript-10/projeto_integrador_crm_clinica/tree/main/src"
    },
    {
        id: 3,
        name: "LearnFlix",
        description: <>Plataforma de gestão acadêmica estilo LMS, desenvolvida para simplificar a administração escolar com painéis dinâmicos, autenticação e consumo de API via <span className="textImportant">React</span>.</>,
        image: {learnFlix},
        alt: "Imagem do projeto LearnFlix",
        url: "https://github.com/eduardo-olvreis/LearnFlix"
    },
    { 
        id: 4,
        name: "Alma Joias",
        description: <>E-commerce responsivo atualmente em processo de escalabilidade para uma arquitetura full-stack (<span className="textImportant">React</span> e <span className="textImportant">C#</span>), visando integrar sistema completo de autenticação, carrinho e pagamentos.</>,
        image: {almaJoias},
        alt: "Imagem do projeto Alma Joias",
        url: "https://github.com/eduardo-olvreis/projeto-alma-joias"
    },
    {
        id: 5,
        name: "Portfólio",
        description: <>O próprio site, desenvolvido em <span className="textImportant">React</span> como SPA, mostrando uma interface dinâmica e responsiva.</>,
        image: {portfolio},
        alt: "Imagem do projeto portfólio",
        url: "https://github.com/eduardo-olvreis/portfolio"
    },
    {
        id: 6,
        name: "Task List",
        description: <>Lista de tarefas em <span className="textImportant">HTML, CSS e JavaScript</span>, focada na manipulação do DOM e em uma interface intuitiva.</>,
        image: {taskList},
        alt: "Imagem do projeto Task List",
        url: "https://github.com/eduardo-olvreis/task-list-js"
    }
]

export default function Projects(){
    return(
        <section id="projects-section" className={style.container}>
            <div className={style.content}>
                <h2>MEUS PROJETOS</h2>
                <Carousel items={meusProjetos}></Carousel>
            </div>
        </section>
    )
}