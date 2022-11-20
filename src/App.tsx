import { useState } from 'react';
import { Tabbar } from './components';
import { AboutMe, Contact, Home, Projects } from './pages';

const App: React.FC = () => {
  const [inView, serInView] = useState<string>('home');

  return (
    <>
      <Home serInView={serInView} />
      <AboutMe serInView={serInView} />
      <Projects serInView={serInView} />
      <Contact serInView={serInView} />
      <Tabbar inView={inView} />
    </>
  );
};

export default App;
