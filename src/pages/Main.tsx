import React, { useEffect, useState } from 'react';
import { AboutMe, Contact, Home, Projects } from '.';
import { LightBlue, Tabbar } from '@/components';

export interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
  const [inView, serInView] = useState<string>('home');

  return (
    <>
      <Home serInView={serInView} />
      <LightBlue position={'start'} />
      <AboutMe serInView={serInView} />
      <LightBlue position={'end'} />
      <Projects serInView={serInView} />
      <Contact serInView={serInView} />
      <LightBlue position={'center'} />
      <Tabbar inView={inView} />
    </>
  );
};

export default Main;
