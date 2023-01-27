// import { useContext, useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import {Contexto} from "../../servicios/Memoria";
// import {pedirMetas} from '../../servicios/Pedidos';
// import Meta from "./Meta";



// function Lista() {

//     const [estado,enviar] = useContext(Contexto);

//     useEffect(() => {
//         const metas = pedirMetas();
//         enviar({tipo: 'colocar', metas});
//     },[]);

    
//     return (
//         <>
//             {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
//             <Outlet/>
//         </>
        
//     );
// }

// export default Lista;

import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {Contexto} from "../../servicios/Memoria";
import {pedirMetas} from '../../servicios/Pedidos';
import Meta from "./Meta";

function Lista() {
    const [estado,enviar] = useContext(Contexto);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pedirMetas().then(metas => {
            enviar({tipo: 'colocar', metas});
            setLoading(false);
        });
    },[]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
            <Outlet/>
        </>
    );
}

export default Lista;
