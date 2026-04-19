import { useForm, ValidationError } from '@formspree/react';
import style from "./Contact.module.css";
import contactImage from "../../assets/images/contactImage.svg"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkovjdgn");
  if (state.succeeded) {
    return (
      <div className={style.successWrapper}>
        <p className={style.formP}>
          Obrigado pelo contato! <span className="textImportant">Responderei em breve.</span>
        </p>
        <div className={style.imageContainerSuccess}>
          <img src={contactImage} alt="Meu Avatar de sucesso" />
        </div>
      </div>
    );
  }

  return (
    <form className={style.formContainer} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor="full-name">Nome Completo</label>
      <input
        className={style.input}
        id="full-name"
        type="text" 
        name="name"
        placeholder='Seu nome'
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

      <label className={style.label} htmlFor="email">E-mail</label>
      <input
        className={style.input}
        id="email"
        type="email" 
        placeholder='Seu email'
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label className={style.label} htmlFor="message">Mensagem</label>
      <textarea
        className={style.input}
        id="message"
        name="message"
        placeholder='Digite sua mensagem...'
        required
        rows="4"
      ></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button className={style.button} type="submit" disabled={state.submitting}>
        {state.submitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}