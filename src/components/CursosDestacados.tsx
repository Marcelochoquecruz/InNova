import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { useTheme } from "./useTheme";
import libroNavidadImg from "../assets/libro-navidad.jpg";
import recetasNavidenasImg from "../assets/recetas-navidenas.jpg";
import recetasRentablesImg from "../assets/recetas-rentables.jpg";
import bisuteriaImg from "../assets/bisuteria.jpg";
import slider3Img from "../assets/slider3.jpg";

const courses = [
  {
    title: "Recetas Rentables",
    category: "Emprendimiento",
    badge: "La mejores recetas para emprender",
    description:
      "Inicia tu negocio con las recetas más vendidas y rentables del mercado.",
    price: "desde $1,00 a $3.00",
    image: recetasRentablesImg,
    action: "Ver Detalle",
    gradient: "from-orange-500 to-red-500",
    link: "https://productosnet.systeme.io/megapackrecetas?ref=R103413090M",
  },
  {
    title: "Libro Navidad",
    category: "Arte",
    badge: "Libro de Navidad para Colorear:",
    description:
      "Disfruta de la magia de la Navidad con este hermoso libro para colorear.",
    price: "desde $7.00",
    image: libroNavidadImg,
    action: "Ver Curso",
    gradient: "from-green-500 to-emerald-700",
    link: "https://natighigliermino.hotmart.host/libro-para-colorear-navidad-bf080484-87ae-4146-bdcb-fc3284d124a5?ref=B103413233Q",
  },
  {
    title: "Recetas Navideñas",
    category: "Temporada",
    badge: "Recetas Navideñas",
    description:
      "Sorprende a todos con las mejores recetas para estas fiestas.",
    price: "$19.99",
    image: recetasNavidenasImg,
    action: "Ver Curso",
    gradient: "from-red-600 to-rose-800",
    link: "https://infomasteracademy.wixsite.com/resposteria-navidad?ref=L103412316L",
  },
  {
    title: "Joyería Artesanal",
    category: "Bisutería",
    badge: "Dominio Artesanal",
    description:
      "Crea piezas únicas y elegantes dominando las técnicas de joyería artesanal más rentables.",
    price: "$43.00",
    image: bisuteriaImg,
    action: "Ver Curso",
    gradient: "from-amber-600 to-yellow-800",
    link: "https://go.hotmart.com/A101453671U?dp=1",
  },
];

const CursosDestacados: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 px-4 transition-colors duration-500 ${theme === "dark" ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-black mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Nuestros Cursos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Destacados
            </span>
          </h2>
          <p
            className={`text-xl ${theme === "dark" ? "text-slate-400" : "text-slate-600"} max-w-2xl mx-auto font-medium`}
          >
            Eleva tus habilidades con contenido de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl 
              ${theme === "dark"
                  ? "bg-slate-900/50 border-slate-800 hover:border-slate-700 shadow-slate-900/40"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-slate-200/40"
                }`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg bg-gradient-to-r ${course.gradient} text-white`}
                  >
                    {course.category}
                  </span>
                </div>

                {/* Star rating placeholder */}
                <div className="absolute top-4 right-4 flex gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
                  >
                    {course.badge}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold mb-4 transition-colors ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                >
                  {course.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-8 h-12 overflow-hidden ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  {course.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span
                      className={`text-xs uppercase font-bold tracking-tighter ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}
                    >
                      Precio
                    </span>
                    <span
                      className={`text-2xl font-black ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    >
                      {course.price}
                    </span>
                  </div>

                  {course.link.startsWith("http") ? (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform active:scale-95 shadow-lg
                      ${theme === "dark"
                          ? "bg-white text-slate-950 hover:bg-slate-100"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                    >
                      {course.action}
                      <ArrowRight size={18} />
                    </a>
                  ) : (
                    <Link
                      to={course.link}
                      className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform active:scale-95 shadow-lg
                      ${theme === "dark"
                          ? "bg-white text-slate-950 hover:bg-slate-100"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                    >
                      {course.action}
                      <ArrowRight size={18} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Hover effect bottom bar */}
              <div
                className={`absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r ${course.gradient} transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CursosDestacados;
