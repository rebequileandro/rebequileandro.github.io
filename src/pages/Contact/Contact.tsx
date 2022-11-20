import React, { useEffect } from 'react';
import './styles/Contact.scss';
import { useObserver } from '@/hooks';
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
  return (
    <div className="contact" ref={setReference} id="contact">
      Contact
    </div>
  );
};

export default Contact;
