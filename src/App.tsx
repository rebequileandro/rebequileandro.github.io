import { Tabbar } from './components';
import { useObserver } from './hooks';

import { Home } from './pages';

const App: React.FC = () => {
  const [inView, ref, entries] = useObserver({
    root: null,
    threshold: 0.5
  });
  console.log(inView);

  return (
    <>
      <Home reference={ref} />
      <Tabbar inView="home" />
    </>
  );
};

export default App;
