import { Routes, Route } from 'react-router-dom';
import { CV, Landing, NotFound } from './pages';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/App" element={<Main />} />
      <Route path="/leandro-rebequi-cv" element={<CV />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
