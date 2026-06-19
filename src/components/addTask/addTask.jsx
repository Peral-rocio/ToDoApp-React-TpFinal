import styles from "./addTask.module.css";
import bambooTask from "../../assets/bambooTask.png";
import tupuedesPanda from "../../assets/tupuedesPanda.png";

function AddTask() {
  return (
    <>
      <header className={styles.headerAdd}>
        <img
          className={styles.logoBambooAdd}
          src={bambooTask}
          alt="logo panda feliz"
        />
      </header>

      <section className={styles.sectionAdd}>
        <div className={styles.textArea}>
          <textarea
            className={styles.addtarea}
            placeholder="Escribe tu tarea"
            maxLength={100}
            required
          ></textarea>
        </div>
        <div className={styles.contenedorButtonAdd}>
          <div className={styles.pandaPuedesHacerlo}>
            <img
              className={styles.imgPandaPuedes}
              src={tupuedesPanda}
              alt="panda Tu puedes hacerlo"
            />
          </div>
          <button className={styles.buttonAddTarea}>Agregar Tarea</button>
        </div>
      </section>
    </>
  );
}

export default AddTask;
