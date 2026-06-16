import logoapp from "./assets/logoapp.png";
import LoginFrom from "./components/loginFrom";


function App() {

  return (
    <>
    <div className="pag-principal">
    <header className="conteiner-header">
      <img className="img-titulo" src={logoapp} alt="imagen-titulo" />
    </header>
    <LoginFrom />
    </div>

    </>  
   )
}

export default App
