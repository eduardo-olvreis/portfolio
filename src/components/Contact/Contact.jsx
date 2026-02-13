import style from "./Contact.module.css"
import ContactForm from "./ContactForm"

export default function Contact(){
    return(
        <section id="contact-section" className={style.container}>
            <div className={style.content}>
                <h2>ENTRE EM <br />CONTATO</h2>
                <ContactForm/>
                <ul className={style.list}>
                        <li className="contactItem"><a href="https://www.linkedin.com/in/eduardo-olvreis/" target="__blank"><img src="../src/assets/images/icons/linkedin_Icon.svg" alt="Link para o meu Linkedin" /><p>Eduardo Reis</p></a></li>
                        <li className="contactItem"><a href="https://github.com/eduardo-olvreis" target="__blank"><img src="../src/assets/images/icons/github_icon.svg" alt="Link para o meu GitHub" /><p>eduardo-olvreis</p></a></li>
                        <li className="contactItem"><a href="mailto:eduardo.olvreis@email.com"><img src="../src/assets/images/icons/email_icon.svg" alt="Link para o meu Email" /><p>eduardo.olvreis@gmail.com</p></a></li>
                </ul>
            </div>
            <div className={style.imageContainer}>
                <img id="contactImage" src="../src/assets/images/contactImage.svg" alt="" />
            </div>
        </section>
    )
}