import { createContext, useContext , useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({children}) => {

    const [tasks , setTasks] = useState ([]);

const tareaNueva = (texto) =>{
    const nueva = {
        id: Date.now(),
        texto,
        completa : false,
    }
    setTasks (...prev => [...prev, nueva]);
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

export const useTask = () => useContext(TaskContext);