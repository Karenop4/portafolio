import { useEffect, useState, lazy, Suspense } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';

// Carga diferida (mejor rendimiento)
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 50);
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <LazyMotion features={domAnimation}>
        <m.button
          onClick={() => setIsDark(prev => !prev)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotate: 15 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
          style={{
            opacity: scrolled ? 0.5 : 1,
            transform: scrolled ? 'scale(0.8)' : 'scale(1)',
            transition: 'opacity 0.3s, transform 0.3s',
          }}
        >
          {isDark ? '🔆' : '🌙'}
        </m.button>

        <m.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Header />
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <About />
        </m.div>

        <Suspense fallback={<div className="text-center p-10">Cargando proyectos...</div>}>
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Projects />
          </m.div>
        </Suspense>

        <Suspense fallback={<div className="text-center p-10">Cargando contacto...</div>}>
          <m.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Contact />
          </m.div>
        </Suspense>

        <Suspense fallback={<div className="text-center p-10">Cargando pie de página...</div>}>
          <m.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Footer />
          </m.div>
        </Suspense>
      </LazyMotion>
    </div>
  );
}

export default App;
