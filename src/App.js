import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import Footer from './componentes/footer';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>

      <div className='contenedor-principal'>

        <Contador numClics={numClics} />

      </div>

      <div className='Clic'> 
        <Boton
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic} />
      </div>

      <div className='Reiniciar'>
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>

      <Footer></Footer>

    </div>
  );
}

export default App;
