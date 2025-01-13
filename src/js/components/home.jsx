import React from "react";
import Light from './light';  // Importación correcta con ruta relativa

// Incluir imágenes en el bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Crear el componente Home
const Home = () => {
  return (
    <div>
      <Light />
    </div>
  );
};

export default Home;