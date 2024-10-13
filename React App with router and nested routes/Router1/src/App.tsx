import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Uebung03 from './components/Uebung03/Ue03';
import Uebung05 from './components/Uebung05/Uebung05';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="uebung3">Assignment 3</Link> |
        <Link to="uebung5">Assignment 5</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Home Page!</h1>} />
          <Route path="uebung3" element={<Uebung03 />} />
          <Route path="uebung5" element={<Uebung05 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
