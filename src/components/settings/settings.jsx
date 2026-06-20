import styles from "./settings.module.css";
import bambooTask from "../../assets/bambooTask.png";
import { SunMoon, Calendar1, X } from "lucide-react";
import panditaCool from "../../assets/panditaCool.png";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Settings() {
  const [showCalendar, setShowCalendar] = useState(false);

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
          <div className={styles.modoClaro}>
            <SunMoon size={60} color="#4e3821f8" />
          </div>

          <div className={styles.calendario}  onClick={() => setShowCalendar((prev) => !prev)} >
            <Calendar1 size={60} color="#4e3821f8"/>.
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
            <button className={styles.btnClose}>
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
