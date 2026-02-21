import { Routes, Route } from "react-router-dom";

// Importa tus páginas
import Principal from "../pages/Principal";
import Fotos from "../pages/GaleriaFotografica";
import Inscripciones from "../pages/Inscripciones";
import Contacto from "../pages/Contacto";
import Pagos from "../pages/Pagos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/fotos" element={<Fotos />} />
      <Route path="/inscripciones" element={<Inscripciones />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/pagos" element={<Pagos />} />
    </Routes>
  );
};

export default AppRoutes;
