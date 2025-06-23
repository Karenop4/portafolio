import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, School, Code, Rocket, Braces, Code2, Atom, CircuitBoard, Database, Layers, Zap } from "lucide-react";

export default function About() {

  const skills = [
    { name: "React", icon: <Atom className="text-cyan-400" size={20} /> },
    { name: "Python", icon: <CircuitBoard className="text-green-400" size={20} /> },
    { name: "Java", icon: <Code2 className="text-red-500" size={20} /> },
    { name: "HTML/ CSS/ JavaScript", icon: <Layers className="text-orange-400" size={20} /> },
    { name: "SQL", icon: <Database className="text-indigo-600" size={20} /> },
    { name: "Angular", icon: <Zap className="text-red-600" size={20} /> },
  ];


  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-violet-900/20 to-indigo-900/20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-300">
          Sobre mí
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Columna izquierda - Descripción */}
          <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:shadow-[0_8px_30px_rgba(124,_58,_237,_0.15)] transition-shadow">
            <motion.p 
              className="text-lg  mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Soy Karen Ortiz, estudiante apasionada de Ingeniería en Ciencias de la Computación 
              en la Universidad Politécnica Salesiana. Mi enfoque combina la creatividad con 
              habilidades técnicas sólidas para desarrollar soluciones innovadoras.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Briefcase className="text-cyan-400" size={24} />
                <div>
                  <h4 className="font-semibold ">Experiencia</h4>
                  <p className="text-sm ">Actualmente en formación activa</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <School className="text-purple-400" size={24} />
                <div>
                  <h4 className="font-semibold ">Educación</h4>
                  <p className="text-sm ">UPS</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Code className="text-amber-400" size={24} />
                <div>
                  <h4 className="font-semibold ">Proyectos</h4>
                  <p className="text-sm ">15+ completados</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Rocket className="text-pink-400" size={24} />
                <div>
                  <h4 className="font-semibold ">Metas</h4>
                  <p className="text-sm ">IA & Fullstack</p>
                </div>
              </motion.div>
            </div>
          </Card>

          {/* Columna derecha - Habilidades */}
          <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="text-cyan-400" /> Mis Habilidades
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                >
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}