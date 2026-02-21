import React from "react";
import Menu from "../components/menu";
import MusicaBG from "../assets/musica.jpg";
import { Music, ExternalLink } from "lucide-react";
import { useTheme } from "../components/useTheme";

const Contacto: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Imagen de Fondo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${MusicaBG})` }}
      >
        <div
          className={`absolute inset-0 ${theme === "dark" ? "bg-black/60" : "bg-white/40"} backdrop-blur-sm`}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex-grow flex items-center justify-center p-6 mb-12">
        <div
          className={`max-w-3xl w-full p-12 rounded-[2rem] shadow-2xl backdrop-blur-xl border transition-all duration-500 ${
            theme === "dark"
              ? "bg-gray-900/40 border-gray-700/50 text-white"
              : "bg-white/40 border-white/50 text-gray-900"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-2xl bg-blue-600/20 mb-6">
              <Music className="w-12 h-12 text-blue-500" />
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
              Música con <span className="text-blue-500">IA</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium opacity-90 mb-10 max-w-2xl">
              Explora el futuro de la composición musical. Descubre nuestra
              lista de reproducción curada y generada totalmente por algoritmos
              de inteligencia artificial.
            </p>

            <a
              href="https://suno.com/playlist/liked"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl shadow-blue-500/40 hover:-translate-y-1 hover:scale-105"
            >
              Escuchar en Suno
              <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <p className="mt-8 text-sm font-semibold uppercase tracking-widest opacity-50">
              Powered by Suno AI & In.Nova
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-auto">
        <Menu />
      </div>
    </div>
  );
};

export default Contacto;
