import { useForm } from 'react-hook-form'
import CerrarBtn from '../img/cerrar.svg'

const ModalCambioPresupuesto = ({setPresupuesto, setNuevoPresupuesto}) => {
    
    const { register, handleSubmit } = useForm() 

    const submit = data => {
        setPresupuesto(parseFloat(data.nuevoPresupuesto))
        setNuevoPresupuesto(false)
    }

    const ocultarModal = () => {
        setNuevoPresupuesto(false)
    }

  return (
    <section className="modal">
        
        <div className="cerrar-modal">
            <img 
            src={CerrarBtn} 
            alt="cerrar modal" 
            onClick={ocultarModal}
            />
        </div>

      <form className="formulario animar cambio__form" onSubmit={handleSubmit(submit)}>
        <legend className="cambio__title">Cambia tu presupuesto</legend>
        <input className="cambio__input nuevo-presupuesto" type="number" {...register('nuevoPresupuesto')}/>
        <button className="cambio__button" type="submit">
            Change
        </button>
      </form>
    </section>
  )
}

export default ModalCambioPresupuesto
