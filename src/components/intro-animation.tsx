import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Cargar el script de Tenor
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://tenor.com/embed.js";
    
    // Asegurarnos de que el script se cargue antes de iniciar el temporizador
    script.onload = () => {
      // Dar tiempo para que el GIF se cargue y mostrarlo por 2 segundos
      setTimeout(() => {
        const timer = setTimeout(() => {
          setShow(false);
        }, 2000); // Reducido a 2 segundos
        return () => clearTimeout(timer);
      }, 500); // Reducido el tiempo de espera inicial también
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // Reducida la duración de la transición de salida
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.3 }} // Reducida la duración de la transición
            className="relative w-full max-w-4xl"
            style={{
              aspectRatio: "16/9",
            }}
          >
            <div 
              className="tenor-gif-embed w-full h-full" 
              data-postid="17990525" 
              data-share-method="host" 
              data-aspect-ratio="1.77778" 
              data-width="100%"
              style={{ 
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            ></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 