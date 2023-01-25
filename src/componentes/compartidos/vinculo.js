import estilos from '../compartidos/Vinculo.module.css'

function Vinculo ({Icono, texto, href}){
    return(
        <a className={estilos.vinculo} href={href}>
                <Icono className={estilos.icono}/>
                {texto &&<span className={estilos.texto}>{texto}</span>}
              </a>
    );
}

export default Vinculo;