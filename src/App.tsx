import { Tabbar } from './components';
import { Home } from './pages';

function App() {
  return (
    <>
      <Home />
      <Tabbar inView="home" />
    </>
  );
}

export default App;
