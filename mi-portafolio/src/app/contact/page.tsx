"use client";

import Image from "next/image";
import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 text-center">Contact Me</h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10">
        {/* Contact Info */}
        <Card className="bg-white rounded-2xl shadow-xl p-8 flex flex-col w-full md:w-1/2 gap-6 items-center text-center">
          <h2 className="text-black text-2xl font-semibold mb-4">Get in touch</h2>

          <a
            href="mailto:k.ortizp004@gmail.com"
            className="flex items-center justify-center space-x-3 text-red-600 hover:underline"
          >
            <SiGmail className="w-6 h-6" />
            <span>k.ortizp004@gmail.com</span>
          </a>

          <a
            href="https://github.com/Karenop4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 text-gray-800 hover:text-black"
          >
            <SiGithub className="w-6 h-6" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/karen-ortiz-9a5552258/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 text-blue-700 hover:text-blue-800"
          >
            <SiLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/karen.mic04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 text-pink-500 hover:text-pink-600"
          >
            <SiInstagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
        </Card>

        {/* Gift / Fun Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/contact.gif"
            alt="Gift"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
