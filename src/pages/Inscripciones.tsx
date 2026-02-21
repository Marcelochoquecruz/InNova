import React from "react";
import { Heart } from "lucide-react";
import { useTheme } from "../components/useTheme";

const Inscripciones: React.FC = () => {
  const { theme } = useTheme();

  const themeStyles = {
    text: theme === "dark" ? "text-white" : "text-slate-900",
    border: theme === "dark" ? "border-slate-800" : "border-slate-200",
    cardBg: theme === "dark" ? "bg-slate-900/50" : "bg-white/80",
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === "dark" ? "bg-slate-950" : "bg-slate-50"}`}>
      <main className="max-w-4xl mx-auto px-4 py-20 flex-grow flex items-center justify-center">
        <div className={`${themeStyles.cardBg} p-10 md:p-16 rounded-[2.5rem] border ${themeStyles.border} backdrop-blur-xl shadow-2xl transition-all duration-500`}>
          <div className="flex flex-col items-center text-center gap-8">
            <div className="p-5 rounded-2xl bg-blue-500/20 animate-bounce">
              <Heart className="w-12 h-12 text-blue-500" />
            </div>
            <div>
              <h2 className={`text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent`}>
                Nuestra Filosofía
              </h2>
              <p className={`text-xl md:text-2xl leading-relaxed opacity-90 ${themeStyles.text} font-medium`}>
                En In.Nova, creemos que la educación debe evolucionar tan rápido como la tecnología. Nos comprometemos a formar líderes con valores sólidos, capacidad crítica y un dominio profundo de las herramientas de Inteligencia Artificial que están redefiniendo el mundo.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-8 text-center opacity-50 text-sm">
        <p>© 2024 In.Nova | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Inscripciones;
