import styles from "./home.module.css"
import { Settings } from "lucide-react";
import pandaBusca from "../../assets/pandaBusca.png"
import tupuedesPanda from "../../assets/tupuedesPanda.png"


function Home (){
return <>
  <header className={styles.headerHome}>
    <button className={styles.buttonClose}> 
       <Settings />
    </button>
  </header>
   
   <main className={styles.main}>
    <div className={styles.conteinerTareas}>
    <h1>
        Tareas
    </h1>
    <div className={styles.inputTareas}>
        <input className={styles.tarea} type="text" />
         <input className={styles.tarea} type="text" />
          <input className={styles.tarea} type="text" />
           <input className={styles.tarea} type="text" />
            <input className={styles.tarea} type="text" />
             <input className={styles.tarea} type="text" />
    </div> 

    </div>
    <div className={styles.conteinerFiltro}>
        <h1>
            filtrar Tarea
        </h1>
        <input className={styles.filtro} type="text" />
   <div className={styles.conteinerImg}>
    <img  className={styles.pandaBusca} src={pandaBusca} alt="pandabusca" />
   </div>
    </div>   
   </main>

   <footer className={styles.footer}>
    <img className={styles.tupuedes} src={tupuedesPanda} alt="panda de tu puedes lograrlo" />
    <button className={styles.botonAgregar}> Agregar tarea </button>
   </footer>


</>
}

export default Home;