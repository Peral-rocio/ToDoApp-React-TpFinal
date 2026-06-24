import { Outlet, Link } from "react-router-dom";
import styles from "./layout.module.css";
import { Settings, House, FilePlus } from "lucide-react";

function Layout() {
  return (
    <>
      <div className={styles.LayoutContenedor}>
        <div className={styles.paginaContenido}>
          <Outlet />
        </div>
        <div className={styles.nav}>
          <div className={styles.contenedorNav}>
            <Link to="/home" className={styles.iconosNav}>
              <House  className={styles.ico}  size={40} />
            </Link>
          </div>
          <div className={styles.contenedorNav}>
            <Link to="/addTask" className={styles.iconosNav}>
              <FilePlus  className={styles.ico}   size={40} />
            </Link>
          </div>
          <div className={styles.contenedorNav}>
            <Link to="/settings" className={styles.iconosNav}>
              <Settings   className={styles.ico}  size={40} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


export default Layout;