import { BrowserRouter as Router } from "react-router-dom";
import Head from "./components/head/Head";
import NavBar from "./components/head/NavBar";
import "./App.css";
import { ThemeProvider } from "./components/ThemeContext";
import AppRoutes from "./routes"; // Importa las rutas

import ElegantBackground from "./components/ElegantBackground";
import DonationModal from "./components/DonationModal";
import { Coffee } from "lucide-react";
import { useState } from "react";

const App = () => {
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden transition-colors duration-500">
        {/* Surprise: Dynamic Vector Background */}
        <ElegantBackground />

        <Router>
          <div className="min-h-screen relative z-10">
            <Head />
            <NavBar />
            {/* Aquí van las rutas que cambiarán el contenido según la navegación */}
            <main>
              {/* Las rutas definidas en AppRoutes se manejarán aquí */}
              <AppRoutes />
            </main>

            {/* Global Donation Button */}
            <button
              onClick={() => setIsDonationOpen(true)}
              className="fixed bottom-8 right-8 z-[60] bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-2"
              title="Apoyar el desarrollo"
            >
              <Coffee className="w-6 h-6 group-hover:animate-bounce" />
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
                Apoyar proyecto
              </span>
            </button>

            {/* Donation Modal */}
            <DonationModal
              isOpen={isDonationOpen}
              onClose={() => setIsDonationOpen(false)}
            />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
