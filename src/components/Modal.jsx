import { useState } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensajeCampos, setMensajeCampos] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false);

        setTimeout(()=>{
            setModal(false);
        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')){
            setMensajeCampos('Todos los campos son obligatorios')

            setTimeout(()=>{
                setMensajeCampos('');
            }, 1000)
            return
        }

        guardarGasto({nombre, cantidad, categoria});

    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
            src={CerrarBtn} 
            alt="cerrar modal" 
            onClick={ocultarModal}
            />
        </div>

        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>

            {mensajeCampos && (<Mensaje tipo="error">{mensajeCampos}</Mensaje>)}

            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>

                <input 
                id='nombre'
                type="text" 
                placeholder='Añade el Nombre del Gasto'
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>

                <input 
                id='cantidad'
                type="number" 
                placeholder='Añade la Cantidad del gasto: ej. 300'
                value={cantidad}
                onChange={e => setCantidad(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoría</label>

                <select
                id="categoria"
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
                >
                    <option value="" >-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="ahorro">Comida</option>
                    <option value="ahorro">Casa</option>
                    <option value="ahorro">Gastos Varios</option>
                    <option value="ahorro">Ocio</option>
                    <option value="ahorro">Salud</option>
                    <option value="ahorro">Suscripciones</option>
                </select>

                <input 
                type="submit" 
                value="Añadir Gasto" 
                onClick={handleSubmit}
                />
            </div>
        </form>
    </div>
  )
}

export default Modal