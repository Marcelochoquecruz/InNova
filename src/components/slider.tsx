import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slider0 from "../assets/slider.jpg";
import slider4 from "../assets/slider4.jpg";
import musicaImg from "../assets/musica.jpg";

const Carrousel = () => {
  const [index, setIndex] = useState(0);

  const data = [
    {
      image: slider0,
      nivel: "Material Digital",
      path: "/fotos",
      descripcion:
        "Recursos interactivos y descargables de alta calidad para el aula moderna.",
    },
    {
      image: slider4,
      nivel: "Joyería Artesanal",
      path: "/fotos",
      descripcion:
        "Domina el arte de la bisutería creativa y crea tu propia marca de accesorios.",
    },
    {
      image: musicaImg,
      nivel: "Música e IA",
      path: "/contacto",
      descripcion:
        "Explora la frontera de la creatividad con producciones musicales generadas por IA.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

  const handlePrev = () => {
    setIndex((index - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % data.length);
  };

  return (
    <div className="w-full h-[400px] flex items-center justify-center bg-black dark:bg-[#1c1c1c]">
      <div className="w-full h-full relative overflow-hidden group">
        <img
          src={data[index].image}
          alt="Carousel Image"
          className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
        />

        <Link
          to={data[index].path}
          className="absolute right-10 md:right-20 top-1/2 transform -translate-y-1/2 bg-gray-900/60 backdrop-blur-md text-white p-8 rounded-2xl max-w-lg border border-white/10 shadow-2xl transition-all duration-300 hover:bg-gray-900/80 hover:scale-105 hover:border-white/20"
        >
          <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
            {data[index].nivel}
          </h3>
          <h3 className="text-2xl font-medium text-white/90 leading-tight">
            {data[index].descripcion}
          </h3>
          <div className="mt-4 flex items-center text-yellow-500 font-bold group/link">
            Saber más
            <span className="ml-2 transform transition-transform group-hover/link:translate-x-1">
              →
            </span>
          </div>
        </Link>

        {/* Navigation Buttons */}
        <div className="absolute flex justify-between w-full px-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 pointer-events-auto"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 pointer-events-auto"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
