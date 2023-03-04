import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './routes/Books';
import Categories from './routes/Categories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
