import React from "react";
import '../styles/Tareas.css'
import { AiFillCloseSquare, AiFillEdit } from "react-icons/ai";
import { useState } from "react";


function Tareas({ id, texto, completada, completarTarea, eliminarTarea }){

    const [isEdit, setIsEdit] = useState(false);




    return (
        <>
            {isEdit ? 
                <form className='tarea-contenedor-editar'>
                    <input 
                    className='tarea-editar-input' 
                    type='text' 
                    value={texto}
                    name='texto'/>
                    <button className='tarea-guardar-boton'>Guardar</button>
                </form>
                
                
                :
                <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
                    <div className='tarea-texto'
                        onClick={() => completarTarea(id)}>
                        {texto}
                    </div>
                    <div className='tarea-contenedor-icono'>
                        <div className='icono-editar' onClick={() => setIsEdit(true)}>
                            <AiFillEdit className='tarea-icono' />
                        </div>
                        <div className='icono-eliminar' onClick={() => eliminarTarea(id)}>
                            <AiFillCloseSquare className='tarea-icono' />
                        </div>

                    </div>
                </div>
                }

        </>

    );
}

export default Tareas;