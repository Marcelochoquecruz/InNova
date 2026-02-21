import React from "react";

const ElegantBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20 select-none">
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-700" />

      {/* Vector Shapes with Animations */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-20 transition-opacity duration-700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              className="stop-color-light-1 dark:stop-color-dark-1"
            />
            <stop offset="100%" className="stop-color-transparent" />
          </radialGradient>
          <radialGradient
            id="grad2"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              className="stop-color-light-2 dark:stop-color-dark-2"
            />
            <stop offset="100%" className="stop-color-transparent" />
          </radialGradient>

          <style>{`
            .stop-color-light-1 { stop-color: #60a5fa; }
            .stop-color-dark-1 { stop-color: #1e3a8a; }
            .stop-color-light-2 { stop-color: #c084fc; }
            .stop-color-dark-2 { stop-color: #581c87; }
            .stop-color-transparent { stop-color: transparent; }
            
            @keyframes float {
              0% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(10%, -10%) scale(1.1); }
              66% { transform: translate(-5%, 15%) scale(0.9); }
              100% { transform: translate(0, 0) scale(1); }
            }
            .animate-float {
              animation: float 25s ease-in-out infinite;
            }
            .animate-float-delayed {
              animation: float 30s ease-in-out infinite reverse;
              animation-delay: -5s;
            }
          `}</style>
        </defs>

        {/* Large flowing shapes */}
        <circle
          cx="20%"
          cy="30%"
          r="40%"
          fill="url(#grad1)"
          className="animate-float"
        />
        <circle
          cx="80%"
          cy="70%"
          r="45%"
          fill="url(#grad2)"
          className="animate-float-delayed"
        />
        <circle
          cx="50%"
          cy="50%"
          r="35%"
          fill="url(#grad1)"
          className="animate-float"
          style={{ animationDelay: "-10s" }}
        />
      </svg>

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grain-y.com/assets/noise-light.png')]" />

      {/* Final Glass Overlay for Content Contrast */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/20 backdrop-blur-[100px]" />
    </div>
  );
};

export default ElegantBackground;
