import React from "react";
import { useTheme } from "../components/useTheme";
import { FileCode, Target, Bot, Users, Music, Zap, Brain } from "lucide-react";

const Contenidop: React.FC = () => {
  const { theme } = useTheme();

  // Estilos base para cada tema
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-800";
  const cardBg =
    theme === "dark"
      ? "bg-gray-800"
      : "bg-gradient-to-r from-cyan-300 via-green-200 to-purple-300";
  const cardBorder = "border-2 border-gray-300";
  const cardShadow = "shadow-lg hover:shadow-2xl";
  const sectionBg = theme === "dark" ? "bg-gray-800/50" : "bg-blue-50";
  const highlightColor = theme === "dark" ? "text-blue-400" : "text-blue-800";

  // Clase contenedora para evitar repetición
  const cardClass = `${cardBg} ${cardBorder} ${cardShadow} rounded-lg p-6`;

  return (
    <div className={`${bgColor} ${textColor} min-h-screen p-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Cabecera */}
        <header className="mb-12 text-center">
          <h1
            className={`text-4xl font-bold ${highlightColor} mb-6 flex items-center justify-center gap-3`}
          >
            <Zap className="w-10 h-10" />
            Innovación en el Aprendizaje Digital
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Transformamos la educación mediante el uso de herramientas digitales
            de vanguardia, técnicas artesanales y creatividad potenciada por la
            pasión y el diseño.
          </p>
        </header>

        {/* Contenido Principal */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sección Estrategia */}
          <section className={`${sectionBg} rounded-lg p-6 shadow-lg`}>
            <h2
              className={`text-2xl font-semibold ${highlightColor} mb-6 flex items-center gap-3`}
            >
              <Target className="w-6 h-6" />
              Nuestra Misión
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Brain className="w-6 h-6 text-blue-500" />
                <p className="leading-relaxed">
                  Creemos que la tecnología es el puente hacia una educación más
                  accesible, personalizada y eficiente para todos los niveles
                  académicos.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-blue-500" />
                <p className="leading-relaxed">
                  Desarrollamos ecosistemas digitales que permiten a educadores
                  y alumnos explotar su máximo potencial creativo.
                </p>
              </div>
            </div>
          </section>

          {/* Sección Soluciones */}
          <section className="space-y-6">
            <h2
              className={`text-2xl font-semibold ${highlightColor} mb-4 flex items-center gap-3`}
            >
              <Users className="w-6 h-6" />
              Soluciones Digitales
            </h2>

            {/* Material Digital */}
            <div className={cardClass}>
              <div className="flex items-start gap-4">
                <FileCode className="w-8 h-8 text-blue-500" />
                <div>
                  <h3
                    className={`text-xl font-semibold ${highlightColor} mb-2`}
                  >
                    Recursos Educativos
                  </h3>
                  <p className="leading-relaxed">
                    Materiales PDF de alta calidad, interactivos y listos para
                    usar en cualquier entorno digital.
                  </p>
                </div>
              </div>
            </div>

            {/* Joyería Artesanal */}
            <div className={cardClass}>
              <div className="flex items-start gap-4">
                <Bot className="w-8 h-8 text-blue-500" />
                <div>
                  <h3
                    className={`text-xl font-semibold ${highlightColor} mb-2`}
                  >
                    Joyería Artesanal
                  </h3>
                  <p className="leading-relaxed">
                    Domina el arte de crear piezas únicas con técnicas que
                    perduran en el tiempo y cautivan miradas.
                  </p>
                </div>
              </div>
            </div>

            {/* Música IA */}
            <div className={cardClass}>
              <div className="flex items-start gap-4">
                <Music className="w-8 h-8 text-blue-500" />
                <div>
                  <h3
                    className={`text-xl font-semibold ${highlightColor} mb-2`}
                  >
                    Creatividad Sonora
                  </h3>
                  <p className="leading-relaxed">
                    Producción musical generativa diseñada para acompañar y
                    potenciar la concentración y el ambiente educativo.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contenidop;
