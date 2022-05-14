import React from "react";
import TareaFormulario from "./TareaFormulario";
import Tareas from "./Tareas";
import '../styles/ListaDeTareas.css'
import { useLocalStorage } from '../useLocalStorage'


function ListaDeTareas(){

    const [tareas, setTareas] = useLocalStorage('tareas', [])

    const agregarTarea = tarea =>{
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map( tarea =>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    const actualizarTarea = (id, texto) =>{
        const temp = [...tareas];
        const tarea = temp.find((item) => item.id === id)
        tarea.texto = texto;
        setTareas(temp);
    }

    return(
        <>
        <TareaFormulario agregarTarea={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
            {
                tareas.map((tarea)=>
                    <Tareas 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        eliminarTarea={eliminarTarea}
                        completarTarea={completarTarea}
                        actualizarTarea={actualizarTarea} />
                )
            }
        </div>
        </>
    );
}

export default ListaDeTareas;