import logoapp from "./assets/logoapp.png";
import LoginForm from "./components/loginRegistrer/loginForm.jsx";


function App() {

  return (
    <>
    <div className="pag-principal">
    <header className="conteiner-header">
      <img className="img-titulo" src={logoapp} alt="imagen-titulo" />
    </header>
    <LoginForm />
    </div>

    </>  
   )
}

export default App
