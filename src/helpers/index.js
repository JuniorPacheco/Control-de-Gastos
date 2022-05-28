export const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)
    return random + fecha;
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-Es', opciones);
}

export const formatearCantidad= cantidad => {
    return cantidad.toLocaleString('en-US',{
        style:'currency',
        currency:'USD'
     })
}