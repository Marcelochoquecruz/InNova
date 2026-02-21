import { useState } from "react";
import { Link } from "react-router-dom";
import { FileCode, Bot, Music } from "lucide-react";
import { useTheme } from "./useTheme";

const menuItems = [
  {
    nivel: "Material Digital",
    descripcion: "Contenido interactivo",
    icon: FileCode,
    gradient: "from-purple-500 to-indigo-500",
    path: "/fotos",
  },
  {
    nivel: "Joyería Artesanal",
    descripcion: "Técnicas creativas",
    icon: Bot,
    gradient: "from-amber-500 to-yellow-500",
    path: "/",
  },
  {
    nivel: "Música con IA",
    descripcion: "Creatividad sonora",
    icon: Music,
    gradient: "from-teal-500 to-emerald-500",
    path: "/contacto",
  },
];

const Menu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  const iconColor = (index: number) =>
    hoveredIndex === index
      ? "text-current"
      : theme === "dark"
        ? "text-white"
        : "text-slate-700";

  return (
    <div className="bg-transparent">
      <section className="py-12">
        <ul className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 transition-all duration-300">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <li
                key={index}
                className="flex-1 relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  to={item.path}
                  className={`flex flex-col h-full items-center p-6 rounded-2xl transition-all duration-300 
                  ${theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white/40 border-white"}
                  backdrop-blur-xl border-2 hover:scale-[1.02] hover:border-opacity-50 
                  hover:shadow-2xl hover:shadow-current/5 transform`}
                >
                  {/* Gradient line animation */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}
                  transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 rounded-full`}
                  />

                  {/* Icon container with gradient background */}
                  <div
                    className={`relative flex items-center justify-center w-16 h-16 mb-4 rounded-2xl 
                  bg-gradient-to-br ${item.gradient} p-0.5 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-current/10`}
                  >
                    <div
                      className={`flex items-center justify-center w-full h-full rounded-xl ${theme === "dark" ? "bg-slate-800" : "bg-white/80"
                        }`}
                    >
                      <Icon
                        size={28}
                        className={`transition-colors duration-300 ${iconColor(index)}`}
                      />
                    </div>
                  </div>

                  <h1 className="text-xl font-extrabold text-center mb-2 transition-colors duration-300 text-slate-800 dark:text-white">
                    {item.nivel}
                  </h1>
                  <h2 className="text-sm font-semibold text-center transition-colors duration-300 text-slate-600 dark:text-slate-300">
                    {item.descripcion}
                  </h2>

                  {/* Decorative corner gradient */}
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 rounded-full -mr-12 -mb-12 
                  bg-gradient-to-br ${item.gradient} opacity-16 transform transition-transform 
                  duration-300 scale-0 group-hover:scale-100`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default Menu;
