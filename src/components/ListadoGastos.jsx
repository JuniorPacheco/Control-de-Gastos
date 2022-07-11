import Gasto from "./Gasto"

const ListadoGastos = ({
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  filtro,
  gastosFiltrados}) => {
    const arrayGastosSinAhorro = gastos.filter(gasto => gasto.categoria !== 'ahorro')
  return (
      <div className="listado-gastos contenedor">

          {
            filtro ? (
              <>
                <h2>{filtro === 'ahorro' ? 'Ahorros' : gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoría'}</h2>
                {gastosFiltrados.map(gasto => (
                  <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                  />
                ))}
              </>
            ) : (
              <>
                  <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos Aún'}</h2>
                  {arrayGastosSinAhorro.map(gasto => (
                    <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                    />
                  ))}
              </>
            )
          }
      </div>
  )
}

export default ListadoGastos