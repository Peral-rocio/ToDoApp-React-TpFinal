import styles from "./addTask.module.css";
import bambooTask from "../../assets/bambooTask.png";

function AddTask(){
return (
    <>
   <header className={styles.headerAdd}>
      <img className={styles.logoBambooAdd} src={bambooTask} alt="logo panda feliz" />
    </header>
     
    </>
)
}

export default AddTask;