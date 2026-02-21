import React from "react";
import { Coffee, Heart, Code2, ShieldCheck, Download } from "lucide-react";
import { useTheme } from "../components/useTheme";
import miQR from "../assets/qr_code.jpeg";

const Pagos: React.FC = () => {
    const { theme } = useTheme();

    const themeStyles = {
        text: theme === "dark" ? "text-white" : "text-slate-900",
        border: theme === "dark" ? "border-slate-800" : "border-slate-200",
        cardBg: theme === "dark" ? "bg-slate-900/50" : "bg-white/80",
        accent: "text-blue-500",
    };

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === "dark" ? "bg-slate-950" : "bg-slate-50"}`}>
            <main className="max-w-4xl mx-auto px-4 py-20 flex-grow flex flex-col items-center justify-center">

                {/* Header de Donación */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <Code2 size={18} />
                        <span>Open Source Spirit</span>
                    </div>
                    <h1 className={`text-5xl md:text-6xl font-black mb-6 ${themeStyles.text} tracking-tight`}>
                        Impulsa el <span className="text-blue-500">Desarrollo</span>
                    </h1>
                    <p className={`text-xl opacity-80 ${themeStyles.text} max-w-2xl mx-auto leading-relaxed`}>
                        In.Nova es un proyecto impulsado por la comunidad. Tu apoyo nos permite seguir creando herramientas abiertas y democratizar el acceso a la tecnología.
                    </p>
                </div>

                {/* Tarjeta del QR */}
                <div className={`${themeStyles.cardBg} p-8 md:p-12 rounded-[3.5rem] border-2 ${themeStyles.border} backdrop-blur-xl shadow-2xl flex flex-col items-center gap-8 relative overflow-hidden group transition-all duration-500`}>

                    {/* Decoración */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700" />

                    {/* QR Image Container */}
                    <div className="relative w-80 h-80 bg-white rounded-[3rem] p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 border-8 border-transparent group-hover:border-blue-500/5">
                        <img src={miQR} alt="QR de Donación" className="w-full h-full object-contain rounded-2xl" />
                        <div className="absolute inset-0 border-2 border-blue-500/10 rounded-[3rem] pointer-events-none" />
                    </div>

                    {/* Información del Apoyo */}
                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-2 text-red-500 font-bold bg-red-500/10 px-6 py-3 rounded-full">
                            <Heart size={20} className="fill-current animate-pulse" />
                            <span>Contribución Voluntaria</span>
                            <Coffee size={18} />
                        </div>
                        <p className={`text-sm font-medium ${themeStyles.text} opacity-50`}>Escanea con tu aplicación de banca móvil</p>
                    </div>

                    {/* Instrucciones al estilo Linux */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-sm ${themeStyles.text} opacity-80 mt-4`}>
                        <div className={`flex items-start gap-4 p-5 rounded-3xl ${theme === "dark" ? "bg-white/5" : "bg-slate-500/5"} border border-transparent hover:border-blue-500/30 transition-colors`}>
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black">1</div>
                            <p className="leading-relaxed">Tu apoyo financia servidores y el desarrollo de nuevas funcionalidades abiertas.</p>
                        </div>
                        <div className={`flex items-start gap-4 p-5 rounded-3xl ${theme === "dark" ? "bg-white/5" : "bg-slate-500/5"} border border-transparent hover:border-purple-500/30 transition-colors`}>
                            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-black">2</div>
                            <p className="leading-relaxed">Envía tu comprobante si deseas aparecer en nuestra lista de contribuidores.</p>
                        </div>
                    </div>

                    {/* Botón de Acción */}
                    <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-black py-5 px-10 rounded-[2rem] transition-all shadow-xl shadow-blue-500/30 active:scale-95 group/btn">
                        <Download size={22} className="group-hover/btn:-translate-y-1 transition-transform" />
                        Descargar Código QR
                    </button>
                </div>

                {/* Footer simple */}
                <footer className="mt-16 text-center opacity-40 text-xs font-medium tracking-widest uppercase">
                    <p>© 2024 In.Nova | Construyendo el futuro de forma abierta</p>
                </footer>
            </main>
        </div>
    );
};

export default Pagos;
