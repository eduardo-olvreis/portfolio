import style from "./Hero.module.css"

export default function Hero(){
    return(
        <div className={style.containerHero}>
            <div className={style.text}>
                <h2>
                    F R O N T E N D <span className={style.quebraLinha}>D E V E L O P E R</span>
                </h2>

                {/* Texto para versões Mobile e Tablet */}
                <p className={style.mobile}>Me chamo <span className="textImportant">Eduardo Reis</span> e desenvolvo soluções frontend modernas, unindo performance e usabilidade.</p>

                {/* Texto para versões Desktop e Tablet paisagem*/}
                <p className={style.desktop}>Me chamo <span className="textImportant">Eduardo Reis</span> desenvolvedor frontend focado em criar interfaces modernas, performáticas e centradas no usuário. Trabalho com <span className="textImportant">HTML, CSS, JavaScript, React e TypeScript </span>para construir aplicações rápidas, acessíveis e visualmente refinadas.</p>
            </div>
            <div className={style.containerImage}>
                <img src="../src/assets/images/heroImage.svg" alt="Imagem de um computador antigo com a minha logo" />
            </div>
        </div>
    )
}