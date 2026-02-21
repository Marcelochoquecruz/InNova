import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Heart, Code2, Download, X } from "lucide-react";
import { useTheme } from "./useTheme";
import miQR from "../assets/qr_code.jpeg";

interface DonationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
    const { theme } = useTheme();

    const themeStyles = {
        text: theme === "dark" ? "text-white" : "text-slate-900",
        border: theme === "dark" ? "border-slate-800" : "border-slate-200",
        cardBg: theme === "dark" ? "bg-slate-900/95" : "bg-white/95",
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={`relative w-full max-w-2xl overflow-hidden rounded-[3rem] border-2 ${themeStyles.border} ${themeStyles.cardBg} backdrop-blur-xl shadow-2xl p-8 md:p-12`}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-500/10 transition-colors z-10"
                        >
                            <X className={themeStyles.text} size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            {/* Header */}
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                                <Code2 size={16} />
                                <span>OPEN SOURCE SPIRIT</span>
                            </div>

                            <h2 className={`text-4xl font-black mb-4 ${themeStyles.text} tracking-tight`}>
                                Apoya el <span className="text-blue-500">Desarrollo</span>
                            </h2>

                            <p className={`text-base opacity-70 ${themeStyles.text} max-w-md mx-auto leading-relaxed mb-8`}>
                                Tu contribución nos permite seguir innovando y manteniendo estas herramientas libres para todos.
                            </p>

                            {/* QR Image */}
                            <div className="relative w-64 h-64 bg-white rounded-[2rem] p-5 shadow-xl mb-8 group">
                                <img
                                    src={miQR}
                                    alt="QR Donación"
                                    className="w-full h-full object-contain rounded-lg"
                                />
                                <div className="absolute inset-0 border-2 border-blue-500/10 rounded-[2rem] pointer-events-none" />
                            </div>

                            {/* Contribution Badge */}
                            <div className="flex items-center gap-2 text-red-500 font-bold bg-red-500/10 px-6 py-2 rounded-full mb-8">
                                <Heart size={18} className="fill-current animate-pulse" />
                                <span>Invítanos a un café</span>
                                <Coffee size={16} />
                            </div>

                            {/* Botón Descargar */}
                            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-500/30 active:scale-95">
                                <Download size={20} />
                                Descargar QR
                            </button>

                            <p className={`mt-6 text-[10px] font-medium tracking-widest uppercase opacity-40 ${themeStyles.text}`}>
                                © 2024 In.Nova | Construyendo el futuro de forma abierta
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DonationModal;
