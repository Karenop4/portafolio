"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  Wrench,
  Code,
  Database,
  Layers,
  Box,
  Terminal,
  Cable,
  CircuitBoard,
  Coffee,
  Briefcase,
  BookOpen,
  Target,
  Globe,
  Star
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    { name: "IoT", icon: Cable },
    { name: "PC Maintenance", icon: Wrench },
    { name: "Next.js - React", icon: Code },
    { name: "Nest.js", icon: Layers },
    { name: "Python", icon: Terminal },
    { name: "Java", icon: Coffee },
    { name: "SQL", icon: Database },
    { name: "C", icon: Cpu },
    { name: "Embedded Systems", icon: CircuitBoard },
  ];

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side (big card) */}
        <Card className="md:row-span-2 p-6 shadow-lg rounded-2xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <CardContent className="space-y-4 text-left">
            <p>
              I’m <strong>Karen Ortiz</strong>, a Computer Science Engineering student at{" "}
              <strong>Universidad Politécnica Salesiana</strong>. I’m passionate about
              learning technologies that connect the physical and digital worlds. I
              consider myself curious, committed, and eager to contribute solutions that
              make a real difference.
            </p>

            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Experience</h2>
            </div>
            <p className="ml-7">Currently in active training</p>

            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Education</h2>
            </div>
            <p className="ml-7">Universidad Politécnica Salesiana (UPS)</p>

            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Goals</h2>
            </div>
            <p className="ml-7">Fullstack Developer</p>

            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Languages</h2>
            </div>
            <ul className="list-disc list-inside ml-7">
              <li>Spanish (Native)</li>
              <li>English (Intermediate)</li>
            </ul>

            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Motto</h2>
            </div>
            <p className="ml-7 italic">
              "It’s not the tool that makes the engineer, but the passion to create
              solutions."
            </p>
          </CardContent>
        </Card>

        {/* Right side top card */}
        <Card className="p-6 shadow-lg rounded-2xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <CardContent className="text-left">
            <h2 className="text-xl font-semibold mb-2">Additional Training</h2>
            <p>
              I hold <strong>Cisco certifications in IoT and PC Maintenance</strong>. I’m
              currently immersed in the technology world, enthusiastically expanding my
              skills.
            </p>
            <div className="flex flex-wrap justify-start mt-4 gap-4">
              <a href="https://www.credly.com/badges/22c45bd9-e216-4e3c-b6d0-2dced9a62a4a/public_url" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/Intro2IoT.png"
                  alt="Badge IoT"
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              </a>
              <a href="https://www.credly.com/badges/2bbd9214-801c-4f81-bfa5-dec4de1709de/public_url" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/computerBasics.png"
                  alt="Badge Computer Hardware"
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Right side bottom card (skills) */}
        <Card className="p-6 shadow-lg rounded-2xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <CardContent className="text-left">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map(({ name, icon: Icon }) => (
                <div key={name} className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
