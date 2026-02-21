// pages/Principal.tsx
import Carrousel from "../components/slider";
import CursosDestacados from "../components/CursosDestacados";
import Menu from "../components/menu";
//import Contenidop from "./contenidop";

const Principal = () => {
  return (
    <div>
      <Carrousel />
      <CursosDestacados />
      {/* Otro contenido específico de la página principal */}
      <Menu />
    </div>
  );
};

export default Principal;
