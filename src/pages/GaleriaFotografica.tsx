import React, { useState } from "react";
import { X } from "lucide-react";

// Imágenes de aplicaciones
import App1 from "../assets/apps/app1.png";
import App2 from "../assets/apps/app2.png";
import App3 from "../assets/apps/app3.png";
import App4 from "../assets/apps/app4.png";
import { useTheme } from "../components/useTheme";

interface App {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
  link?: string;
}

const apps: App[] = [
  {
    id: 1,
    src: App1,
    alt: "Asistente Académico IA",
    category: "Educación",
    description:
      "Potencia tu rendimiento académico con un tutor inteligente diseñado para guiar tu aprendizaje.",
    link: "https://ai.studio/apps/drive/12r27dJd-dsi148OOghtCR4QkSy1IWJX-",
  },
  {
    id: 2,
    src: App2,
    alt: "Corrector de WhatsApp",
    category: "Productividad",
    description:
      "Optimiza tu comunicación con un asistente que perfecciona tus mensajes con naturalidad y precisión.",
    link: "https://ai.studio/apps/drive/1d6bAS2K3WkaGzJMQTxDjqkFJDjkYgQIf",
  },
  {
    id: 3,
    src: App3,
    alt: "GeoRoute Potosí",
    category: "Utilidades",
    description:
      "Tu guía inteligente para descubrir la riqueza histórica y cultural de la Villa Imperial de Potosí.",
    link: "https://ai.studio/apps/drive/1PS1nT4GeSiguo2Aeq0kdtH8H4OMJGKwX",
  },
  {
    id: 4,
    src: App4,
    alt: "Constelación Interior",
    category: "Entretenimiento",
    description:
      "Explora la profundidad de tu ser con este asistente de autoconocimiento y bienestar emocional.",
    link: "https://ai.studio/apps/drive/1ZMi5kGhMuZIScNW_0Re0r95J5DjDs_tM",
  },
];

const GaleriaFotografica: React.FC = () => {
  const { theme } = useTheme();
  const [appSeleccionada, setAppSeleccionada] = useState<App | null>(null);
  const [filtro, setFiltro] = useState<string>("Todos");

  const categorias = ["Todos", ...new Set(apps.map((app) => app.category))];

  const appsFiltradas =
    filtro === "Todos" ? apps : apps.filter((app) => app.category === filtro);

  // Estilos dinámicos basados en el tema
  const estilosTema = {
    contenedor:
      theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800",
    titulo: theme === "dark" ? "text-white" : "text-gray-800",
    boton:
      theme === "dark"
        ? "bg-gray-700 text-white hover:bg-gray-600"
        : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm",
  };

  return (
    <div className={`w-full min-h-full p-8 ${estilosTema.contenedor}`}>
      <div className="flex justify-between items-center mb-8">
        <h1
          className={`text-4xl font-extrabold tracking-tight ${estilosTema.titulo}`}
        >
          Galería de Aplicaciones
        </h1>
      </div>

      {/* Filtros de Categoría */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setFiltro(categoria)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
              filtro === categoria
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                : `${estilosTema.boton} border border-gray-200/50`
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Cuadrícula de Aplicaciones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {appsFiltradas.map((app) => (
          <div
            key={app.id}
            className={`group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-100"
            }`}
            onClick={() => setAppSeleccionada(app)}
          >
            <div className="aspect-square overflow-hidden bg-gray-100 p-0 flex items-center justify-center">
              <img
                src={app.src}
                alt={app.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3
                className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                {app.alt}
              </h3>
              <p
                className={`text-sm mt-1 font-medium ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                {app.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalle de App */}
      {appSeleccionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setAppSeleccionada(null)}
        >
          <div
            className={`relative max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 ${
              theme === "dark"
                ? "bg-gray-900 border border-gray-800"
                : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setAppSeleccionada(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-500/10 hover:bg-gray-500/20 transition-colors z-10"
            >
              <X
                className={theme === "dark" ? "text-white" : "text-gray-800"}
              />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 bg-gray-50 flex items-center justify-center">
                <img
                  src={appSeleccionada.src}
                  alt={appSeleccionada.alt}
                  className="w-full h-auto object-contain rounded-2xl shadow-xl"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
                >
                  {appSeleccionada.category}
                </span>
                <h2
                  className={`mt-2 text-3xl font-black ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  {appSeleccionada.alt}
                </h2>
                <p
                  className={`mt-4 text-lg leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                >
                  {appSeleccionada.description}
                </p>
                <div className="mt-8 flex gap-4">
                  {appSeleccionada.link ? (
                    <a
                      href={appSeleccionada.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-blue-500/30 text-center"
                    >
                      Ir a la aplicación
                    </a>
                  ) : (
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-blue-500/30">
                      Instalar
                    </button>
                  )}
                  <button
                    className={`flex-1 font-bold py-3 px-6 rounded-xl transition-colors border ${
                      theme === "dark"
                        ? "border-gray-700 text-white hover:bg-gray-800"
                        : "border-gray-200 text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    Más info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaFotografica;
