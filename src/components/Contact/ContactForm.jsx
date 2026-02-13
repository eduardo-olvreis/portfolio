import { useForm, ValidationError } from '@formspree/react';
import style from "./Contact.module.css"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkovjdgn");

  if (state.succeeded) {
      return <p>Obrigado pelo contato! Responderei em breve.</p>;
  }

  return (
    <form className={style.formContainer} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor="full-name">Nome Completo</label>
      <input
        className={style.input}
        id="full-name"
        type="text" 
        name="name"
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
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label className={style.label} htmlFor="message">Mensagem</label>
      <input
        className={style.input}
        id="message"
        name="message"
        required
      />
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