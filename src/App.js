import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './componentes/compartidos/Layout';
import Modulo from './componentes/compartidos/Modulo';
import NoEncontrado from './componentes/compartidos/noEncontrado';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import { Contexto } from './servicios/Memoria';
import { pedirMetas } from './servicios/Pedidos';



function App() {

  const [, enviar] = useContext(Contexto);
  useEffect(() => {
    const fetchData = async () => {
      const metas = await pedirMetas();
      enviar({ tipo: 'colocar', metas });
    }
    fetchData();
  }, []);
  // useEffect(async () => {
  //   const metas = await pedirMetas();
  //   enviar({ tipo: 'colocar', metas });
  // }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Lista/>} />
        <Route path='/lista' element={<Lista />}>
          <Route path='/lista/:id' element={<Modulo>
            <Detalles></Detalles>
          </Modulo>} />
        </Route>
        <Route path='/nueva' element={<Detalles />} />
      </Route>
      <Route path='*' element={<NoEncontrado />} />
    </Routes>
        );
}

export default App;
