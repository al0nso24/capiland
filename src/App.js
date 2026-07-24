import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Navbar from './Navbar';
import Galeria from './Galeria';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path='/galeria' element={<Galeria></Galeria>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
