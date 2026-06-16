import { useState } from "react";
import pandaBambu from "../assets/pandaBambu.png"
import { EyeClosed } from "lucide-react";


function LoginFrom (){

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    return (
<>
   <form className="conteiner-form">
      <div className="conteiner-input">
        <input className="input-login" type="text" placeholder="Ingresa tu email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </div>

      <div className="conteiner-password">
        <input  className="input-login" type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <EyeClosed className="eye-Closed" size={20} strokeWidth={2.5} />
      </div>

   <button className="button-login">Iniciar Sesión</button>
   
   </form>

    <div className="conteiner-registrer">
        <p>Sí no tienes cuenta </p>
   <button className="button-registrer">Registrate</button>
   <img className="pandaBambu" src={pandaBambu} alt="imagen Panda con un Bambu" />
    </div>
</>
    )
} ; 

export default LoginFrom;