import styles from "./home.module.css"
import { Settings, Trash2, Check, House, FilePlus} from "lucide-react";
import pandaBusca from "../../assets/pandaBusca.png";
import bambooTask from "../../assets/bambooTask.png";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";


function Home (){
return <>
  <header className={styles.headerHome}>
    <img className={styles.logoBambooTask} src={bambooTask} alt="logo panda feliz" />
  </header>
   
   <main className={styles.main}>
    <div className={styles.conteinerTareas}>
    <h1 className={styles.h1Tareas}>
        Tareas
    </h1>
    <div className={styles.inputTareas}>
        <input className={styles.tarea} type="text" />
        <button className={styles.tareaCheck}>
            <Check/>
        </button>
        <button className={styles.tareaTrash}>
            <Trash2/>
        </button>
    </div> 

    </div>
    <div className={styles.conteinerFiltro}>
        <h1 className= {styles.h1Tareas}>
            Filtrar Tarea
        </h1>
        <select className={styles.SelectContenedor} >
            <option value="Todas">Todas</option>
            <option value="Completas">Completas</option>
            <option value="Incompletas">Incompletas</option>
        </select>
   <div className={styles.conteinerImg}>
    <img  className={styles.pandaBusca} src={pandaBusca} alt="pandabusca" />
   </div>
    </div>   
   </main>

   <footer className={styles.footer}>
    <div className={styles.contenedorNav}>
       <Link to="/home" className={styles.iconosNav}> 
       <House size={40}/>
    </Link>
    </div>
     <div className={styles.contenedorNav}>
       <Link to ="" className={styles.iconosNav}> 
       <FilePlus size={40}/>
    </Link>
    </div>
     <div className={styles.contenedorNav}>
       <Link to="" className={styles.iconosNav}> 
       <Settings size={40}/>
    </Link>
    </div>
   </footer>

</>
}


export default Home;