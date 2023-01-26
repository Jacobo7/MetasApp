import { Link } from 'react-router-dom';
import estilos from './Meta.module.css'



function Meta({id,icono,eventos, periodo, detalles, meta, completado}) {
    return ( 
        <Link to={`/lista/${id}`} className={estilos.meta + ' tarjeta'}>
            <div className='flex items-center'> 
                <div className={estilos.icono}>{icono}</div>
                <p className='ml-5 mr-10 text-xl'>{eventos}<sub className='text-xs text-gray-500'>/ {periodo}</sub></p>
                <p>{detalles}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{completado} de {meta}</p>
                    <div className={estilos.barra1}>
                        <div className={estilos.barra2} 
                        style={{width: Math.round((completado/meta)*100)+'%'}}></div>
                    </div>
                </div>
                <button className='boton boton--gris'>Completado</button>
            </div>
        </Link>
    );
}

export default Meta;