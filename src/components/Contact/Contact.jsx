import style from "./Contact.module.css"
import ContactForm from "./ContactForm"
import linkedinIcon from "../../assets/images/icons/linkedin_Icon.svg"
import githubIcon from "../../assets/images/icons/github_icon.svg"
import emailIcon from "../../assets/images/icons/email_icon.svg"
import contactAvatar from "../../assets/images/contactImage.svg"

export default function Contact(){
    return(
        <section id="contact-section" className={style.container}>
            <div className={style.content}>
                <div className={style.contactInfo}>
                    <h2>ENTRE EM <br />CONTATO</h2>
                    <p className={style.subtext}>
                        Gostaria de falar comigo? 
                        <span className="textImportant"> Mande-me uma mensagem!</span>
                    </p>
                    <ul className={style.list}>
                        <li className={style.contactItem}>
                            <a href="https://www.linkedin.com/in/eduardo-olvreis/" target="__blank">
                                <img src={linkedinIcon} alt="Link para o meu Linkedin" />
                                <p>Eduardo Reis</p>
                            </a>
                        </li>
                        <li className={style.contactItem}>
                            <a href="https://github.com/eduardo-olvreis" target="__blank">
                                <img src={githubIcon} alt="Link para o meu GitHub" />
                                <p>eduardo-olvreis</p>
                            </a>
                        </li>
                        <li className={style.contactItem}>
                            <a href="mailto:eduardo.olvreis@gmail.com">
                                <img src={emailIcon} alt="Link para o meu Email" />
                                <p>eduardo.olvreis@gmail.com</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.formWrapper}>
                    <ContactForm/>
                </div>
            </div>
            <div className={style.imageContainer}>
                <img id="contactImage" src={contactAvatar} alt="Meu Avatar" />
            </div>
        </section>
    )
}