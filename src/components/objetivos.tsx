import { FaGlobeAmericas, FaLightbulb } from "react-icons/fa";

const Objetivos = () => {
  return (
    <section className="bg-white/70 backdrop-blur-md py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">
          Comprometidos con la innovación educativa mediante el uso de
          tecnologías emergentes para crear un impacto positivo en el
          aprendizaje global.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <FaGlobeAmericas className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              Visión Global
            </h3>
            <p className="text-lg text-gray-600">
              Nuestra meta es democratizar el acceso a material educativo de
              alta calidad, aprovechando la Inteligencia Artificial para romper
              las barreras del aprendizaje tradicional.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaLightbulb className="text-6xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              Innovación
            </h3>
            <p className="text-lg text-gray-600">
              Desde recursos descargables hasta agentes inteligentes y música
              generativa, cada herramienta está diseñada para inspirar
              curiosidad y potenciar el desarrollo intelectual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objetivos;
