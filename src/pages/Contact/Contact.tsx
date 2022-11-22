import React, { useEffect, useRef } from 'react';
import './styles/Contact.scss';
import { useObserver } from '@/hooks';
import emailjs from '@emailjs/browser';

// const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = process.env ?? "";

export interface ContactInterface {
  serInView: React.Dispatch<React.SetStateAction<string>>;
}

const Contact: React.FC<ContactInterface> = ({ serInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5
  });
  useEffect(() => {
    isIntersecting && serInView('contact');
  }, [isIntersecting]);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form: any = event.target;
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
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
    <div className="contact" ref={setReference} id="contact">
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
