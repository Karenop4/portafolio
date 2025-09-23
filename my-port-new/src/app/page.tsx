"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Variantes de animación para contenedores
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Variantes para elementos individuales
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 10 },
  },
};

// Variantes para el título principal
const titleVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 12 },
  },
};

// Variantes para el texto descriptivo
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
};

// Variantes para el cursor personalizado
const cursorVariants = (mousePosition: { x: number; y: number }) => ({
  default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
  text: {
    x: mousePosition.x - 75,
    y: mousePosition.y - 75,
    height: 150,
    width: 150,
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    mixBlendMode: "difference" as const,
  },
  button: {
    x: mousePosition.x - 40,
    y: mousePosition.y - 40,
    height: 80,
    width: 80,
    backgroundColor: "rgba(59, 130, 246, 0.3)",
  },
});

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  return (
    <>
      {/* Cursor personalizado */}
      <motion.div
        className="cursor"
        variants={cursorVariants(mousePosition)}
        animate={cursorVariant}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 32,
          height: 32,
          backgroundColor: "#3b82f6",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
        transition={{ type: "tween" as const, ease: "backOut", duration: 0.5 }}
      />

      {/* Partículas flotantes */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Contenedor principal */}
      <motion.div
        className="flex-col items-center justify-center text-center space-y-6 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 10 }}
      >
        {/* Hero / presentación */}
        <motion.h1
          className="text-4xl font-extrabold cursor-none"
          variants={titleVariants}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          whileHover={{ scale: 1.05 }}
        >
          Hi, I'm{" "}
          <motion.span
            className="text-blue-500"
            initial={{ color: "#6b7280" }}
            animate={{ color: "#3b82f6" }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Karen Ortiz
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" as const, stiffness: 500 }}
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-xl text-gray-600 dark:text-gray-300 cursor-none"
          variants={itemVariants}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          whileHover={{ scale: 1.02 }}
        >
          Computer Science Student & Web Developer
        </motion.h2>

        {/* Botones de acción */}
        <motion.div className="flex gap-4 justify-center" variants={itemVariants}>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotateX: -90 },
              visible: {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                transition: { type: "spring" as const, stiffness: 100, damping: 15 },
              },
            }}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { type: "spring" as const, stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
            className="cursor-none"
          >
            <Button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
              <Link href="/projects">View my work</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotateX: -90 },
              visible: {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                transition: { type: "spring" as const, stiffness: 100, damping: 15 },
              },
            }}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { type: "spring" as const, stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
            className="cursor-none"
          >
            <Button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Pequeña descripción */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mx-6 cursor-none"
          variants={textVariants}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          whileHover={{ scale: 1.02 }}
        >
          Passionate about building modern web applications with{" "}
          <motion.span
            className="font-semibold"
            initial={{ backgroundColor: "transparent" }}
            animate={{ backgroundColor: ["transparent", "#dbeafe", "transparent"] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            Next.js with React and also some knowledge about Angular
          </motion.span>{" "}
          and backend experience in{" "}
          <motion.span
            className="font-semibold"
            initial={{ backgroundColor: "transparent" }}
            animate={{ backgroundColor: ["transparent", "#dcfce7", "transparent"] }}
            transition={{ delay: 2.5, duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            Spring Boot & NestJS
          </motion.span>
          . Currently focused on improving my skills in{" "}
          <motion.span
            className="font-semibold"
            initial={{ backgroundColor: "transparent" }}
            animate={{ backgroundColor: ["transparent", "#fef3c7", "transparent"] }}
            transition={{ delay: 3, duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            cybersecurity, cloud technologies and IoT
          </motion.span>
          .
        </motion.p>

        {/* Animación de entrada general */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring" as const, stiffness: 100, damping: 15, delay: 2 }}
        />
      </motion.div>
    </>
  );
}
