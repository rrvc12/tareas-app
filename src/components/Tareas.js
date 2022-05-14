import React from "react";
import '../styles/Tareas.css'
import { AiFillCloseSquare, AiFillEdit } from "react-icons/ai";
import { useState } from "react";


function Tareas({ id, texto, completada, completarTarea, eliminarTarea, actualizarTarea}){

    const [isEdit, setIsEdit] = useState(false);

    const [newValue, setNewValue] = useState(texto);


    const manejarCambioEditar = e =>{
        setNewValue(e.target.value);
    }


    const manejarEnvioEditar = e =>{
        e.preventDefault();
    }

    const actualizar = () =>{
        actualizarTarea(id, newValue);
        setIsEdit(false);
    }
    return (
        <>
            {isEdit ? 
                <form className='tarea-contenedor-editar' onSubmit={manejarEnvioEditar}>
                    <input 
                    className='tarea-editar-input' 
                    type='text' 
                    value={newValue}
                    name='texto'
                    onChange={manejarCambioEditar }/>
                    <button className='tarea-guardar-boton' onClick={actualizar}>Guardar</button>
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