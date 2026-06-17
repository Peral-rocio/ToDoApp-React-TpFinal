import { useState } from "react";
import pandaBambu from "/src/assets/pandaBambu.png";
import { Eye, EyeClosed } from "lucide-react";
import Swal from "sweetalert2";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); //Que no se vea la contraseña.
  const [isRegister, setIsRegister] = useState(false); // "No estoy en pág de registrarme".


  //loguearse

  const handleLogin = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.length === 0) {
      Swal.fire({
        icon: "error",
        title: "No registra usuarios",
        text: "No hay ningún usuario registrado.",
      });
      return;
    }

    const encontrarUsuario = usuarios.find(
      (usuario) => usuario.email === email && usuario.password === password,
    );

    if (encontrarUsuario) {
      Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: `Hola ${encontrarUsuario.email}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Email o contraseña invalidos",
      });
    }
  };

  //registrarse

  const handleRegister = (e) => {
    e.preventDefault();

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Campo vacío ",
        text: "Por favor completá todos los campos.",
      });
      return;
    }

  const siExiste = usuarios.find((usuario) => {
    return usuario.email === email;
  });

  if (siExiste) {
    Swal.fire({
      icon: "error",
      title: "Usuario existente",
      text: "Ya existe una cuenta con ese email.",
    });
    return;
  }


  const usuarioNuevo = { email, password };
  usuarios.push(usuarioNuevo);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  Swal.fire({
    icon: "success",
    title: "¡Registro Logrado!",
    text: "Ya podés iniciar sesión.",
  });

  setIsRegister(false);
  setEmail("");
  setPassword("");
  }; 


  return (
    <>
      <form
        className="conteiner-form"
        onSubmit={isRegister ? handleRegister : handleLogin}
      >
        <div className="conteiner-input">
          <input
            className="input-login"
            type="text"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="conteiner-password">
          <input
            className="input-login"
            type={showPassword ? "text" : "password"}
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="button-eyes"
             type="button" onClick={ () => setShowPassword((prev) => !prev)} //aqui tuve problemas y tuve que investigar como resolver,sali esto en internet. prev (estado previo a cambiar)
          >
            {showPassword ? (
              <Eye className="eyes" size={20} strokeWidth={2.5} />
            ) : (
              <EyeClosed className="eyes" size={20} strokeWidth={2.5} />
            )}
          </button>
        </div>

        <button className="button-login" type="submit">
          {isRegister ? "registrarse" : "Iniciar sesion"}{" "}
        </button>
      </form>

      <div className="conteiner-registrer">
        <p>Sí no tienes cuenta </p>
        <button
          className="button-registrer"
          onClick={() => {
            setIsRegister((prev) => !prev); //me sucedio lo anterior. no me toma setIsRegister (!setIsRegister)
            setEmail("");
            setPassword("");
          }}
        >
          {isRegister ? "iniciar Sesion" : "registrarse"}
        </button>
        <img
          className="pandaBambu"
          src={pandaBambu}
          alt="imagen Panda con un Bambu"
        />
      </div>
    </>
  );
}

export default LoginForm;
