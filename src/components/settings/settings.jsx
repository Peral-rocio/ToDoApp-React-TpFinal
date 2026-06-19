import styles from "./settings.module.css";
import bambooTask from "../../assets/bambooTask.png";
import { SunMoon, Calendar1 } from "lucide-react";
import panditaCool from "../../assets/panditaCool.png";

function Settings() {
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
            <SunMoon />
          </div>
          <div className={styles.calendario}>
            <Calendar1 />
          </div>
        </div>
        <div className={styles.hijoSettings}>
          <div className={styles.buttonClose}>
            <button>cerrar sesion</button>
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
