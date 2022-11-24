import { Input, TextArea } from '@/components';
import React from 'react';
import './styles/PopupForm.scss';
import emailjs from '@emailjs/browser';

export interface PopupFormInterface {}

const ContactForm: React.FC<PopupFormInterface> = () => {
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form: any = event.target;
    emailjs
      .sendForm(
        'leandro_rebequi1398',
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="contact-form">
      <form
        className="contact-form__form"
        onSubmit={sendEmail}
        autoComplete="false"
      >
        <Input
          type="text"
          placeHolder="Nombre"
          name="user_name"
          onChange={() => null}
        />
        <Input
          type="email"
          placeHolder="Email"
          name="user_email"
          onChange={() => null}
        />
        <TextArea name="message" placeHolder="Mensaje" />
        <div className="contact-form__buttons">
          <button
            className="border-gradient contact-form__buttons--btn"
            type="reset"
          >
            Cancelar
          </button>
          <button className="btn contact-form__buttons--btn" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
