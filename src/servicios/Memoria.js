import { createContext, useReducer } from "react"

const listaMock = [{
    "id": "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "dia",
    "eventos": 1,
    "icono": "🏃",
    "meta": 365,
    "plazo":"2030-10-01",
    "completado": 180
}]

const estadoInicial ={
    orden:[],
    objetos:{}
};

function reductor(estado,accion){
    switch(accion.tipo){
        case 'colocar':{
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta => meta.id),
                objetos: metas.reduce((objeto,meta) => ({...objeto, [meta.id]:meta}),{})
            };
            return nuevoEstado;
        }
        case 'crear':{
            const id = Math.random();//accion.meta.id;
            const nuevoEstado={
                orden: [...estado.orden, id],
                objetos: {...estado.objetos,[id]: accion.meta}
            }
            return nuevoEstado;
        }
    }
}

const metas = reductor(estadoInicial,{tipo: 'colocar', metas: listaMock});

export const Contexto = createContext(null);

function Memoria({children}) {
    const [estado, enviar] = useReducer(reductor,metas);
    return ( 
        <Contexto.Provider value={[estado,enviar]}>
            {children}
        </Contexto.Provider>
     );
}

export default Memoria;