import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section
        id="contacto"
        className="contact-hover p-6 max-w-4xl mx-auto w-full flex flex-col items-center shadow-sm shadow-zinc-700 mt-10 mb-8 transition-all duration-300 rounded-b-lg"
    >
    {/* Título centrado */}
      <h2 className="text-2xl font-semibold text-center mb-6">Contacto</h2>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* GIF a la izquierda */}
        <img
          src="/assets/contact.gif"
          alt="Gif contacto"
          className="w-40 h-40 object-cover rounded-lg"
        />

        {/* Íconos + texto a la derecha */}
        <div className="flex flex-col gap-4">
          <a
            href="mailto:karenorpe2004@gmail.com"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <Mail size={24} />
            <span>Correo</span>
          </a>
          <a
            href="https://www.linkedin.com/in/karen-ortiz-9a5552258"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Karenop4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/karen.mic04/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <Instagram size={24} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
