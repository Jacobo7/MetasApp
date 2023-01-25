function Detalles() {
    const opcionFrecuencia = ['dia','semana','mes'];
    const iconos =['💻','🏃','📚','✈','💵']
    return ( 
        <div>
            <form>
                <label>
                    Describe tu meta
                    <input placeholder='Ej. hacer ejercicio' />
                </label>
                <label>
                    Frecuencia a cumplir la meta <span>Ej. una vez a la semana</span>
                    <div>
                        <input type='number' />
                        <select>
                            {opcionFrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label>
                    Veces a completar tu meta
                    <input type='number'placeholder='Ej. 50' />
                </label>
                <label>
                    Fecha limite:
                    <input type='date' />
                </label>
                <label>
                    Escoge icono para la meta:
                    <div>
                        <select>
                            {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;