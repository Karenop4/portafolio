import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Briefcase,
  School,
  Code,
  Rocket,
  Braces,
  Code2,
  Atom,
  CircuitBoard,
  Database,
  Layers,
  Zap,
  Star,
  Globe,
  User,
} from "lucide-react";

export default function About() {
  const skills = [
    { name: "React", icon: <Atom className="text-cyan-400" size={20} /> },
    { name: "Python", icon: <CircuitBoard className="text-green-400" size={20} /> },
    { name: "Java", icon: <Code2 className="text-red-500" size={20} /> },
    { name: "HTML/ CSS/ JavaScript", icon: <Layers className="text-orange-400" size={30} /> },
    { name: "SQL", icon: <Database className="text-indigo-600" size={20} /> },
    { name: "Angular", icon: <Zap className="text-red-600" size={20} /> },
    { name: "C", icon: <Code className="text-blue-600" size={20} /> },
    { name: "Arduino", icon: <CircuitBoard className="text-red-400" size={20} /> },
  ];

  const cardStyles =
    "p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:shadow-[0_8px_30px_rgba(124,_58,_237,_0.15)] transition-shadow";

  return (
    <section id="about" className="py-10 px-4 bg-gradient-to-b from-violet-900/20 to-indigo-900/20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-300">
          Sobre mí
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-4
            grid-rows-auto
            md:grid-rows-2
            gap-3
            auto-rows-auto
            md:auto-rows-[1fr]
          "
        >
          {/* Descripción */}
          <Card
            className={`${cardStyles} col-span-1 row-span-1 md:col-span-2 md:row-span-2 flex flex-col justify-center`}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-cyan-400">
                <User className="text-cyan-400" size={24} />
                Sobre mí
              </h3>
              <p className="text-base leading-relaxed mb-8">
                Soy Karen Ortiz, estudiante de Ingeniería en Ciencias de la Computación en la Universidad Politécnica Salesiana. Me apasiona aprender tecnologías que conecten el mundo físico y digital.
                <br />
                Me considero curiosa, comprometida y con ganas de aportar soluciones que marquen la diferencia.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <motion.div
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Briefcase className="text-cyan-600" size={24} />
                <div>
                  <h4 className="font-semibold">Experiencia</h4>
                  <p className="text-sm">En formación activa</p>
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
                  <h4 className="font-semibold">Educación</h4>
                  <p className="text-sm">UPS</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Rocket className="text-pink-400" size={24} />
                <div>
                  <h4 className="font-semibold">Metas</h4>
                  <p className="text-sm">Fullstack</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Globe className="text-green-400" size={28} />
                <div>
                  <h4 className="font-semibold">Idiomas</h4>
                  <p className="text-sm">Español (Nativo), Inglés (Intermedio)</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg col-span-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                <Star className="text-yellow-400" size={24} />
                <div>
                  <h4 className="font-semibold">Lema</h4>
                  <p className="text-sm italic">“No es la herramienta la que hace al ingeniero, sino la pasión por crear soluciones.”</p>
                </div>
              </motion.div>
            </div>
          </Card>

          {/* Formación complementaria */}
          <Card className={`${cardStyles} col-span-1 md:col-span-2`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mt-2 mb-4 flex items-center gap-2 text-orange-400">
                <Braces className="text-orange-400" /> Formación complementaria
              </h3>
              <p className="text-sm leading-relaxed  mb-8">
                Cuento con <strong>certificaciones de Cisco en IoT y Mantenimiento de PCs</strong>.
                Actualmente estoy inmersa en el mundo de los <strong>Sistemas Embebidos</strong>, expandiendo mis habilidades con entusiasmo.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.credly.com/badges/22c45bd9-e216-4e3c-b6d0-2dced9a62a4a/linked_in?t=ss8u5s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/IoT.png"
                    alt="IoT"
                    className="w-20 h-20 rounded hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://www.credly.com/badges/2bbd9214-801c-4f81-bfa5-dec4de1709de/linked_in?t=ss8u3u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/chb.png"
                    alt="Mantenimiento"
                    className="w-20 h-20 rounded hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          </Card>

          {/* Habilidades */}
          <Card className={`${cardStyles} col-span-1 row-span-1`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-cyan-400">
                <Code className="text-cyan-400" /> Habilidades
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 text-sm bg-white/5 p-2 rounded">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Card>

          {/* Pasatiempos */}
          <Card className={`${cardStyles} col-span-1 row-span-1`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-orange-400">
                <Zap className="text-orange-400" /> Pasatiempos
              </h3>
              <p className="text-sm">
               Disfruto cocinar y experimentar con nuevas recetas, así como mantenerme activa a través del deporte, en especial el baloncesto, un deporte que me motiva y fortalece.
              </p>
            </motion.div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
