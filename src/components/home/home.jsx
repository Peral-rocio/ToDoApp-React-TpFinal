import styles from "./home.module.css"
import { Trash2, Check} from "lucide-react";
import pandaBusca from "../../assets/pandaBusca.png";
import bambooTask from "../../assets/bambooTask.png";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useTasks } from "../taskContext";
import { use } from "react";
import { useState } from "react";
import { Filter } from "lucide-react";
import Swal from "sweetalert2";


function Home (){
const {tasks, borrarTarea, marcarTarea} = useTasks ();
const [filtro, setFiltro] = useState ("Todas");

const tareasFiltrada = tasks.filter ( task => {
    if (filtro === "Completas") return task.completa;
    if (filtro === "Incompletas") return !task.completa;
    return true;
});
     
const confirmarBorrado = (id) => {
  Swal.fire({
    title: "¿Eliminar tarea?",
    text: "Esta acción no se puede deshacer.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, borrar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#487215",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      borrarTarea(id);
    }
  });
};

return <>
  <header className={styles.headerHome}>
    <img className={styles.logoBambooTask} src={bambooTask} alt="logo panda feliz" />
  </header>
   
   <main className={styles.main}>
    <div className={styles.conteinerTareas}>
    <h1 className={styles.h1Tareas}>
        Tareas
    </h1>

     {tareasFiltrada.map (task => (
          <div key={task.id} className={styles.divTareas}>
        <div className= {`${styles.tarea} ${task.completa ? styles.tareaCompleta : ""}`}>
        {task.texto}
        </div>
        <button className= {styles.tareaCheck}
        onClick={() => marcarTarea (task.id)}>
            <Check/>
        </button>
        <button className={styles.tareaTrash}
        onClick={() => confirmarBorrado(task.id)}>
            <Trash2/>
        </button>
    </div> 
     )) }    
  

    </div>
    <div className={styles.conteinerFiltro}>
        <h1 className= {styles.h1Tareas}>
            Filtrar Tarea
        </h1>
        <select className={styles.SelectContenedor} value={filtro}
        onChange={(e) => setFiltro(e.target.value)} >
            <option value="Todas">Todas</option>
            <option value="Completas">Completas</option>
            <option value="Incompletas">Incompletas</option>
        </select>
   <div className={styles.conteinerImg}>
    <img  className={styles.pandaBusca} src={pandaBusca} alt="pandabusca" />
   </div>
    </div>   
   </main>

</>
}


export default Home;