import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button"; 

export default function Header() {
  const [flipped, setFlipped] = useState(false);

  return (
    <header className="p-2 bg-gradient-to-b from-background to-background/90 dark:from-background/90 dark:to-background/80">
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
          <CardContent className="flex flex-col items-center gap-5">
            {/* Contenedor de imagen con efecto 3D mejorado */}
            <motion.div
              className="pt-2 w-60 h-60 perspective-1000 cursor-pointer"
              onMouseEnter={() => setFlipped(true)}
              onMouseLeave={() => setFlipped(false)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                animate={{ rotateY: flipped ? 180 : 0 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Imagen frontal */}
                <div className="absolute inset-0 backface-hidden">
                  <img
                    src="/assets/profile.jpg"
                    alt="Karen Ortiz"
                    className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-white/20"
                  />
                </div>
                
                {/* Imagen trasera */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <img
                    src="/assets/2.jpg"
                    alt="Karen Ortiz - Back"
                    className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-white/20"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Contenido de texto */}
            <div className="space-y-6 text-center lg:text-left lg:pl-8 lg:border-l-4 border-primary/50">
              <motion.h1
                className="text-3xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3,
                }}
              >
                Karen Ortiz
              </motion.h1>
              
              <motion.p
                className="text-xl font-medium "
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Estudiante de <span className="text-primary-200">Ingeniería en Ciencias de la Computación</span>
              </motion.p>
              
              <motion.div
                className="flex flex-col items-center lg:items-start gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-xl flex items-center gap-2">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Universidad Politécnica Salesiana
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Button 
                    onClick={() => window.location.href = "#projects"}
                    variant="outline" 
                    className="w-full rounded-full px-8 py-6 text-lg border-white/100 hover:bg-white/10"
                  >
                    <motion.span
                      
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Proyectos
                    </motion.span>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full rounded-full px-8 py-6 text-lg border-white/100 hover:bg-white/10"
                  >
                    <motion.a
                      href="#contacto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contacto
                    </motion.a>
                  </Button>
                  
                  
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </header>
  );
}