import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({
    gastos, 
    setGastos, 
    presupuesto, 
    setPresupuesto,
    setIsValidPresupuesto,
    setNuevoPresupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        //Calculo porcentaje
        const porcentajeGastado = ((totalGastado*100)/(totalGastado + totalDisponible)).toFixed(2);
        
        setDisponible(totalDisponible);
        setGastado(totalGastado);
        setTimeout(() => {
            setPorcentaje(porcentajeGastado);
        }, 1200)
    }, [gastos])
 
    const formatearCantidad= cantidad => {
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
         })
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reinciar presupuesto y gastos?')
        if(resultado){
            setGastos([]);
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar
            styles={buildStyles({
                pathColor: porcentaje > 100 ? '#dc2626' :'#3b82f6',
                textColor: porcentaje > 100 ? '#dc2626' :'#3b82f6',
                trailColor: 'f5f5f5'
            })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
            />
        </div>

        <div className="contenido-presupuesto">
            <button
            className="reset-app"
            type="button"
            onClick={handleResetApp}
            >
                Resetear App
            </button>
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>

            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>

            <button 
                className="button__cambioPresupuesto"
                onClick={() => setNuevoPresupuesto(true)}
            >Cambiar Presupuesto</button>
        </div>


    </div>
  )
}

export default ControlPresupuesto