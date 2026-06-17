import logoapp from "./assets/logoapp.png";
import LoginForm from "./components/loginRegistrer/loginForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home.jsx";


function App() {

  return (
    <BrowserRouter>
    <div className="pag-principal">
    <header className="conteiner-header">
      <img className="img-titulo" src={logoapp} alt="imagen-titulo" />
    </header>
    <Routes>
      <Route path="/" element={ <LoginForm />}/>
      <Route path="/home" element= {<Home/>}/>
    </Routes>
    </div>
    </BrowserRouter>
   ); 
}

export default App
