import estilos from './Detalles.module.css'

function Detalles() {
    const opcionFrecuencia = ['dia','semana','mes'];
    const iconos =['💻','🏃','📚','✈','💵']
    return ( 
        <div className='tarjeta'>
            <form className='p-4'>
                <label className='label'>
                    Describe tu meta
                    <input className='input'  placeholder='Ej. hacer ejercicio' />
                </label>
                <label className='label'>
                    Frecuencia a cumplir la meta <span>Ej. una vez a la semana</span>
                    <div className = 'flex mb-6'>
                        <input className='input mr-10'  type='number' />
                        <select className='select'>
                            {opcionFrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className='label'>
                    Veces a completar tu meta
                    <input className='input'  type='number'placeholder='Ej. 50' />
                </label>
                <label className='label'>
                    Fecha limite:
                    <input className='input'  type='date' />
                </label>
                <label className='label'>
                    Escoge icono para la meta:
                    <div>
                        <select className='select'>
                            {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
            </form>
            <div className={estilos.botones}>
                <button className='boton boton--negro' >Crear</button>
                <button className='boton boton--gris'>Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;