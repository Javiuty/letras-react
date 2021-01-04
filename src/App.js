import React, { useState } from "react";
import Formulario from "./components/Formulario";

const App = () => {
  const [busquedaletra, guardarBusquedaLetra] = useState({});

  return (
    <>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
    </>
  );
};

export default App;
