import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route,HashRouter} from 'react-router-dom';
import Inicio from './Inicio';
import Maps from './Maps';
import Poke from './Poke';


function App() {
   const c = localStorage.getItem("correo")
   localStorage.removeItem("correo")
   console.log(c);
  return (
    < BrowserRouter>  
      <Routes>  
      <Route path='/' element={<Maps/>} />
      {c && c.length > 0 ? (
               <Route path='/inicio' element={<Inicio/>} />
            ) : null}    
    </Routes>
    </ BrowserRouter>
  );
}

export default App;