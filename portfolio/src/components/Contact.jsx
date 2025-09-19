export default function Contact(){
    return(
        <section id="contact-section" className="contactSection">
            <div className="contactContent">
                <h2>ENTRE EM <br />CONTATO</h2>
                <ul className="contactList">
                        <li className="contactItem"><a href="https://www.linkedin.com/in/eduardo-olvreis/" target="__blank"><img src="../src/assets/images/icons/linkedin_Icon.svg" alt="Link para o meu Linkedin" /><p>Eduardo Reis</p></a></li>
                        <li className="contactItem"><a href="https://github.com/eduardo-olvreis" target="__blank"><img src="../src/assets/images/icons/github_icon.svg" alt="Link para o meu GitHub" /><p>eduardo-olvreis</p></a></li>
                        <li className="contactItem"><a href="mailto:eduardo.olvreis@email.com"><img src="../src/assets/images/icons/email_icon.svg" alt="Link para o meu Email" /><p>eduardo.olvreis@gmail.com</p></a></li>
                        <li className="contactItem"><a href="https://wa.me/5551994412790"><img src="../src/assets/images/icons/whatsap_icon.svg" alt="Link para o meu Celular" /><p>(51) 99441-2790</p></a></li>
                </ul>
            </div>
            <div className="contactImageContainer">
                <img id="contactImage" src="../src/assets/images/contactImage.svg" alt="" />
            </div>
        </section>
    )
}