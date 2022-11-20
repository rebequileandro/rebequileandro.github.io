import React, { useEffect, useRef } from 'react';
import './styles/AboutMe.scss';
import { useObserver } from '@/hooks';

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
      AboutMe
    </section>
  );
};

export default AboutMe;
