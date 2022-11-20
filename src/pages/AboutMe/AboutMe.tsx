import React, { useEffect, useRef } from 'react';
import './styles/AboutMe.scss';
import { useObserver } from '@/hooks';
import lr1 from '@/assets/leandro-rebequi1.webp';
import lr2 from '@/assets/leandro-rebequi2.webp';

export interface AboutMeInterface {
  serInView: React.Dispatch<React.SetStateAction<string>>;
}

const AboutMe: React.FC<AboutMeInterface> = ({ serInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5
  });
  useEffect(() => {
    isIntersecting && serInView('about-me');
  }, [isIntersecting]);

  return (
    <section className="aboutme" ref={setReference} id="about-me">
      <div
        className={`aboutme__photos aboutme__photos--${
          isIntersecting ? 'in' : 'out'
        }`}
      >
        <img src={lr1} alt="leandro rebequi" className="aboutme__photos__img" />
      </div>
      <div className="aboutme__decription-container">
        <h2
          className={`text-primary--sub aboutme__sub-title aboutme__sub-title--${
            isIntersecting ? 'in' : 'out'
          }`}
        >
          Sobre mi
        </h2>
        <p
          style={{}}
          className={`text-secondary--sub aboutme__description aboutme__description--${
            isIntersecting ? 'in' : 'out'
          }`}
        >
          ¡Hola! Mi nombre es Leandro Rebequi y me apasioná crear cosas desde 0
          y ver como se trasforman en algo increíble. <br />
          <br />
          Mis inicios en el desarrollo web comenzaron a mediados del 2019,
          comencé haciendo simples maquetaciones en HTML y CSS, inspeccionando
          códigos de otras webs y viendo cursos en YouTube.
          <br />
          Luego por el 2021, comencé a capacitarme más en serio, tome un
          Bootcamp Full Stack, donde adquirí una buena base para crear webs y
          aplicaciones completas, a partir de ese punto comencé a capacitarme
          por mi cuenta a medida que los trabajos o proyectos lo iban
          requiriendo.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
