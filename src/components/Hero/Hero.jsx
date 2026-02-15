import style from "./Hero.module.css"

export default function Hero(){
    return(
        <div className={style.containerHero}>
            <div className={style.text}>
                <h2>
                    F U L L  S T A C K<span className={style.quebraLinha}>D E V E L O P E R</span>
                </h2>
                <p className={style.mobile}>Me chamo <span className="textImportant">Eduardo Reis</span> e desenvolvo soluções frontend modernas, unindo performance e usabilidade.</p>
            </div>
            <div className={style.containerImage}>
                <img src="../src/assets/images/heroImage.svg" alt="Imagem de um computador antigo com a minha logo" />
            </div>
        </div>
    )
}