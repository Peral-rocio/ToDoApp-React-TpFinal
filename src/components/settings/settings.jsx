import styles from "./settings.module.css";
import bambooTask from "../../assets/bambooTask.png";
import { SunMoon, Calendar1, X } from "lucide-react";
import panditaCool from "../../assets/panditaCool.png";
import { useState , useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Settings() {
  const [showCalendar, setShowCalendar] = useState(false);

  const [tema , setTema] = useState(() =>{
     return localStorage.getItem("data-tema") || "light";
  });

 const cambiarTema = () => { 
  console.log("click");
  setTema((prev) => (prev === "light" ? "dark" : "light")); };

  useEffect (() => {
    document.body.setAttribute ("data-tema" , tema);
      localStorage.setItem("data-tema", tema);
  }, [tema]);

  const navigate = useNavigate();

  const cerrarSesion = () => {
    Swal.fire({
    title: "¿ Vas a Cerrar sesión?",
    text: "¿Estás seguro?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, salir",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#487215",
    cancelButtonColor: "#d33",
    }) .then ((result) =>{
      if (result.isConfirmed) {
        localStorage.removeItem("usuario");
         localStorage.removeItem("data-tema");
        document.body.setAttribute("data-tema", "light")
        navigate ("/");
      }
    })
    }

  return (
    <>
      <header className={styles.headerSettings}>
        <img
          className={styles.bambooSettings}
          src={bambooTask}
          alt="logo panda feliz"
        />
      </header>

 
      <div className={styles.padreSettings}>
        <div className={styles.hijoSettings}>
          <div className={styles.modoClaro}
          onClick={cambiarTema}>
            {tema === "light" ? (
              <SunMoon className= {styles.SunMoon}  size={60} color="#4e3821f8" />
            ): (
                <SunMoon className= {styles.SunMoon} size={60} color="white" />
            )}
          </div>

          <div className={styles.calendario}  onClick={() => setShowCalendar((prev) => !prev)} >
            <Calendar1  className={styles.calendar1} size={60} color="#4e3821f8"/>
          </div>
        </div>

        {showCalendar && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalCalendar}>
              <button
                className={styles.closeButtonModal}
                onClick={() => setShowCalendar(false)}
              >
                <X />
              </button>
              <Calendar />
            </div>
          </div>
        )}

        <div className={styles.hijoSettings}>

          <div className={styles.buttonCloseSesion}>
            <button className={styles.btnClose} onClick={cerrarSesion}>
              cerrar sesion
              </button>
          </div>

          <div className={styles.pandaCool}>
            <img
              className={styles.imgPanditaCool}
              src={panditaCool}
              alt="panda con lentes de sol"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;

