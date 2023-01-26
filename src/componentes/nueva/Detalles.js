import {useEffect, useState, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Contexto } from '../../servicios/Memoria';
import estilos from './Detalles.module.css';

function Detalles() {

    const {id} = useParams();

    const [form,setForm]= useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃',
        meta: 52,
        plazo: '2030-01-01',
        completado: 25
    });

    const [estado, enviar] = useContext(Contexto);

    const{detalles,eventos,periodo,icono,meta,plazo,completado} = form;

    const onChange = (event, prop)=>{
        setForm(estado =>({...estado, [prop]:event.target.value}));
       
    }
//useefect pasa el id al formulario, primero validando si existe para mostrar toda la informacion 
const metaMemoria = estado.objetos[id];
    useEffect(()=>{
        if(!id)return 
        
        if(!metaMemoria){
            return navegar('/404');
        }
        setForm(metaMemoria);
    }, [id, metaMemoria]);

    const navegar = useNavigate();
    const crear = () =>{
        //console.log(form)
       enviar({tipo:'crear', meta: form});
       navegar('/');
    }
    const actualizar = () =>{
        //console.log(form)
       enviar({tipo:'actualizar', meta: form});
       navegar('/');
    }
    const borrar = () =>{
        //console.log(form)
       enviar({tipo:'borrar', id});
       navegar('/lista');
    }
    const cancelar = () =>{
        navegar('/lista');
    }

    const opcionFrecuencia = ['dia','semana','mes'];
    const iconos =['💻','🏃','📚','✈','💵']
    return ( 
        <div className='tarjeta'>
            <form className='p-4'>
                <label className='label'>
                    Describe tu meta
                    <input 
                        className='input'  
                        placeholder='Ej. hacer ejercicio' 
                        value={detalles}
                        onChange = {e => onChange(e,'detalles')}
                    />
                </label>
                <label className='label'>
                    Frecuencia a cumplir la meta <span>Ej. una vez a la semana</span>
                    <div className = 'flex mb-6'>
                        <input 
                            className='input mr-10'  
                            type='number' 
                            value={eventos}
                            onChange = {e => onChange(e,'eventos')}
                        />
                        <select 
                            className='select' 
                            value={periodo}
                            onChange = {e => onChange(e,'periodo')}
                        >
                            {opcionFrecuencia.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className='label'>
                    Veces a completar tu meta
                    <input 
                        className='input' 
                        value={meta} 
                        type='number'
                        placeholder='Ej. 50' 
                        onChange = {e => onChange(e,'meta')}
                    />
                </label>
                <label className='label'>
                    Fecha limite:
                    <input 
                        className='input' 
                        value={plazo} 
                        type='date' 
                        onChange = {e => onChange(e,'plazo')}
                    />
                </label>
                <label className='label'>
                    Cuantas veces has completado la meta:
                    <input 
                        className='input' 
                        value={completado}
                        onChange = {e => onChange(e,'completado')}
                    />
                </label>
                <label className='label'>
                    Escoge icono para la meta:
                    <div>
                        <select 
                            className='select' 
                            value={icono}
                            onChange = {e => onChange(e,'icono')}
                        >
                            {iconos.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id && <button className='boton boton--negro' onClick={crear}>Crear</button>}
                {id && <button className='boton boton--negro' onClick={actualizar}>Actualizar</button>}
                {id && <button className='boton boton--rojo' onClick={borrar}>Eliminar</button>}
                <button className='boton boton--gris' onClick={cancelar}>Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;