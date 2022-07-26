import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/editBook" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
