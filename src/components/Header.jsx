import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({ 
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto}) => {

  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? (

          <ControlPresupuesto 
          presupuesto={presupuesto}
          />

        ): (

          <NuevoPresupuesto 
          presupuesto={presupuesto} 
          setPresupuesto={setPresupuesto} 
          setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}

    </header>
  )
}

export default Header