import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [imagenActiva, setImagenActiva] = useState(null);

  const proyectos = [
    {
      titulo: "Juego de Lanzamiento de dados",
      descripcion: "Juego interactivo para dos jugadores que simula el lanzamiento de un dado, realizado con HTML, CSS y JavaScript.",
      link: "https://github.com/Karenop4/duelo-dados_-Encalada-Ortiz-.git",
      imagen: "/assets/duelo_dados.png" 
    },
    {
      titulo: "Gestor de Tareas",
      descripcion: "App en React con Firebase para gestionar tareas diarias.",
      link: "https://github.com/Karenop4/gestion-tareas",
      web: "https://gestion-tareas.web.app/",
      imagen: "/assets/gestion_tareas.png"
    },
    {
      titulo: "Web Analytics Dashboard",
      descripcion: "Un sistema integral de análisis y visualización de datos para aplicaciones web que permite monitorear KPIs clave como engagement, conversión y comportamiento de usuarios. En progreso...",
      link: "https://github.com/karen-dev/dashboard-ventas",
      imagen: "/assets/proceso.png"
    },
    {
      titulo: "Portafolio Personal",
      descripcion: "Sitio web desarrollado con React, Tailwind y Shadcn/ui.",
      web:"https://portafolio-mocha-eta.vercel.app/",
      link: "https://github.com/karen-dev/mi-portafolio", 
      imagen: "/assets/971.jpg"
    },
    {
      titulo: "App gestión de citas médicas",
      descripcion: "Aplicación para agendar y gestionar citas médicas, realizado con Angular y Firebase. En desarrollo...",
      link: "https://github.com/Karenop4/Gestion-citas-medicas-Encalada-Ortiz.git",
      web: "https://citamedicas-encalada-ortiz.web.app/",
      imagen: "/assets/citas_medicas.png"
    },
    {
      titulo: "App de escritorio para gestión de una veterinaria",
      descripcion: "Aplicación de escritorio para gestionar una veterinaria, desarrollada con Java y Oracle SQL.",
      link: "https://github.com/Karenop4/ProyectoFinal_Veterinaria.git",
      imagen: "/assets/veterinaria.png"
    }
  ];

  return (
    <section className="p-6 max-w-5xl mx-auto bg-card text-card-foreground rounded-xl shadow-lg mt-20 mb-8">
      <h2 id="projects" className="text-3xl font-semibold text-center mb-8">Proyectos</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-card dark:bg-[#1e1e2e] border border-border rounded-xl shadow-md p-6 flex flex-col"
          >
            {proyecto.imagen && (
              <button
                onClick={() => setImagenActiva(proyecto.imagen)}
                className="cursor-zoom-in"
              >
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="mb-4 rounded-md object-cover h-40 w-full hover:scale-105 transition-transform duration-300"
                />
              </button>
            )}

            <h3 className="text-xl font-bold mb-3">{proyecto.titulo}</h3>
            <p className="text-muted-foreground flex-grow">{proyecto.descripcion}</p>

            <a
              href={proyecto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-primary font-medium hover:underline self-start"
            >
              Ver repositorio →
            </a>

            {proyecto.web && (
              <a
                href={proyecto.web}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-primary font-medium hover:underline self-start"
              >
                Ver sitio web →
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {imagenActiva && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImagenActiva(null)}
          >
            <motion.img
              src={imagenActiva}
              alt="Vista previa"
              className="max-w-full max-h-[90vh] rounded-xl shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
