"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Projects() {
  const portfolioProjects = [
    {
      name: "Fullstack Web App - Hospital Management",
      description: "A web application for managing hospital appointments and patients, built with Angular and Spring Boot.",
      link: "https://github.com/Karenop4/Gestion-citas-medicas-Encalada-Ortiz",
      Image: "/assets/citas_medicas.png",
    },
    {
      name: "Desktop Application - Vet Management",
      description: "Desktop app for veterinarians to manage appointments and patient records, built with Java and Oracle DB.",
      link: "https://github.com/Karenop4/ProyectoFinal_Veterinaria",
      Image: "/assets/veterinaria.png",
    },
    {
      name: "Web Application - Task Management",
      description: "A web app to create, track, and organize tasks efficiently, built with modern web technologies.",
      link: "https://github.com/Karenop4/gestion-tareas",
      Image: "/assets/gestion_tareas.png",
    },
    {
      name: "Web Application - Portfolio",
      description: "My personal portfolio website showcasing projects and skills, built with Next.js and Tailwind CSS.",
      link: "https://github.com/Karenop4/portafolio",
      Image: "/assets/971.jpg",
    },
    {
      name: "Web Application - Game: Dice Duel",
      description: "A fun multiplayer dice game implemented with JavaScript and HTML/CSS for interactive gameplay.",
      link: "https://github.com/Karenop4/duelo-dados_-Encalada-Ortiz-",
      Image: "/assets/duelo_dados.png",
    },
    {
      name: "C Projects",
      description: "Collection of C programming projects covering algorithms, data structures, and embedded systems.",
      link: "https://github.com/Karenop4/Proyectos-c",
      Image: "/assets/c.jpeg",
    },
  ];


  return (
    <div className="p-10 w-full mx-auto justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>

      <Tabs defaultValue="leetcode" className="w-full">
        <TabsList className="grid grid-cols-3 border-b border-gray-300">
          <TabsTrigger value="leetcode" className="text-center">LeetCode</TabsTrigger>
          <TabsTrigger value="github" className="text-center">GitHub</TabsTrigger>
          <TabsTrigger value="portfolio" className="text-center">Portfolio</TabsTrigger>
        </TabsList>

        {/* LeetCode Tab */}
        <TabsContent value="leetcode" className="p-6 flex justify-center">
          <a
            href="https://leetcode.com/u/Karenop4/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col items-center"
          >
            <img
              src="/leetcode.png"
              alt="LeetCode Stats"
              className="w-180 rounded-lg mb-4"
            />
            <h2 className="font-semibold text-lg">LeetCode Profile</h2>
            <p className="text-gray-600 text-center mt-2">Check coding challenges and problem-solving stats.</p>
          </a>
        </TabsContent>

        {/* GitHub Tab */}
        <TabsContent value="github" className="p-6 flex justify-center">
          <a
            href="https://github.com/Karenop4"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col items-center"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Karenop4&show_icons=true&theme=radical"
              alt="GitHub Stats"
              className="w-180 rounded-lg mb-4"
            />
            <h2 className="font-semibold text-lg">GitHub Repositories</h2>
            <p className="text-gray-600 text-center mt-2">Explore my repositories and contributions.</p>
          </a>
        </TabsContent>

        {/* Portfolio Tab */}
        <TabsContent value="portfolio" className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioProjects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col"
            >
              <h2 className="font-semibold text-lg mb-2">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
              <Image
                src={project.Image}
                alt={project.name}
                width={600}
                height={400}
                className="rounded-lg"
              />

            </a>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
