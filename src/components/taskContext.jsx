import { createContext, useContext , useState , useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({children}) => {

    const [tasks , setTasks] = useState (() => {
        const tareasGuardadas = localStorage.getItem("tasks");
        return tareasGuardadas ? JSON.parse (tareasGuardadas) : [];
    });

    useEffect (()=> {
        localStorage.setItem("tasks", JSON.stringify (tasks));
    }, [tasks]);


const tareaNueva = (texto) =>{
    const nueva = {
        id: Date.now(),
        texto,
        completa : false,
    }
    setTasks (prev => [...prev, nueva]);
}

const borrarTarea = (id) =>{
   setTasks(prev => prev.filter(task => task.id !== id))
}

const marcarTarea = (id) =>{
    setTasks(prev => prev.map(task => task.id === id ? {...task, completa: !task.completa} : task));
}
  
return (
    <TaskContext.Provider value= {{tasks, tareaNueva, borrarTarea, marcarTarea}}>
    {children}
    </TaskContext.Provider>
)
}

export const useTasks = () => useContext(TaskContext);