/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, ArrowUp, ArrowRight, Notebook, Github, MapPin, Feather, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Artist from './components/Artist';
import Universes from './components/Universes';
import Gallery from './components/Gallery';
import Geste from './components/Geste';
import Exhibitions from './components/Exhibitions';
import CommissionProcess from './components/CommissionProcess';
import Contact from './components/Contact';
import StudioPanel from './components/StudioPanel';

export default function App() {
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top threshold
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Handle premium intro loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaderActive(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. Immersive Luxury Loader Curtain ("Le Prélude") */}
      <AnimatePresence>
        {isLoaderActive && (
          <motion.div
            id="prelude-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 bg-charcoal-deep z-50 flex flex-col items-center justify-center text-center px-4 grain-overlay text-stone-beige select-none"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-3xl md:text-5xl tracking-widest uppercase font-light text-stone-beige">
                  ATELIER D'ART
                </span>
                <span className="font-mono text-[10px] text-bronze-accent tracking-[0.4em] uppercase mt-2 font-medium">
                  HAUTE CRÉATION SIGNÉE
                </span>
              </motion.div>

              {/* Minimal line load animation */}
              <div className="w-24 h-[1px] bg-stone-800 mx-auto relative overflow-hidden">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-1/2 bg-bronze-accent"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-400"
              >
                Excavation & Transformation Minérale
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Canvas */}
      <div className="min-h-screen flex flex-col justify-between selection:bg-bronze-accent selection:text-charcoal-deep relative bg-mineral-white grain-overlay">
        
        {/* Navigation Headed element */}
        <Header
          onToggleStudio={() => setIsStudioOpen(!isStudioOpen)}
          isStudioActive={isStudioOpen}
        />

        {/* Core application presentation layers */}
        <main className="flex-1 w-full" id="main-content">
          <Hero />
          
          {/* Aesthetic Interstice Section Note (Transition line) */}
          <div className="bg-mineral-white py-12 flex justify-center items-center">
            <div className="w-px h-16 bg-gradient-to-b from-stone-300 to-transparent" />
          </div>

          <Artist />
          <Universes />
          <Gallery />
          <Geste />
          <Exhibitions />
          <CommissionProcess />
          <Contact />
        </main>

        {/* Editorial Signature Footer */}
        <footer
          id="app-footer"
          className="bg-charcoal-deep text-stone-beige border-t border-stone-900 pt-20 pb-12 overflow-hidden grain-overlay"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            
            {/* 1st column: signature stamp */}
            <div className="md:col-span-2 space-y-4">
              <span className="font-serif text-lg tracking-widest uppercase block text-stone-100">
                Atelier Art et Artisanat
              </span>
              <p className="font-sans text-xs text-stone-400 font-light leading-relaxed max-w-sm">
                Entreprise du Patrimoine Vivant (EPV) en cours d'étude, engagée dans la transmission éternelle du geste et l'approvisionnement géologique responsable.
              </p>
              <p className="font-mono text-[9px] text-bronze-accent tracking-widest uppercase">
                FRANCE • ATELIER LABELLISÉ D'EXCELLENCE
              </p>
            </div>

            {/* 2nd column: collections links */}
            <div className="space-y-3">
              <span className="font-mono text-[9.5px] text-stone-400 tracking-widest uppercase font-semibold">
                — SCÉNOGRAPHIES
              </span>
              <ul className="space-y-2 text-xs text-stone-300 font-light">
                <li><a href="#artiste" className="hover:text-bronze-accent transition-colors">Maître d'Art</a></li>
                <li><a href="#univers" className="hover:text-bronze-accent transition-colors">Mosaïque, Sculpture, Bijoux</a></li>
                <li><a href="#galerie" className="hover:text-bronze-accent transition-colors">La Scénographie d'Œuvres</a></li>
                <li><a href="#geste" className="hover:text-bronze-accent transition-colors">Chantier d'Atelier</a></li>
              </ul>
            </div>

            {/* 3rd column: trust & credentials */}
            <div className="space-y-3">
              <span className="font-mono text-[9.5px] text-stone-400 tracking-widest uppercase font-semibold">
                — SÉCURITÉ D'ACQUISITION
              </span>
              <ul className="space-y-2 text-xs text-stone-300 font-light">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-accent" />
                  <span>Certificat de pièce unique signé</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-accent" />
                  <span>Crate bois renforcée sur mesure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-accent" />
                  <span>Dossier d'assurance intégrale</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[10px] text-stone-500 font-mono gap-4">
            <p>© {new Date().getFullYear()} ATELIER ART & ARTISANAT. TOUS DROITS RÉSERVÉS.</p>
            <div className="flex space-x-6">
              <span className="hover:text-bronze-accent transition-colors cursor-pointer">Mentions Éditoriales</span>
              <span>•</span>
              <span className="hover:text-bronze-accent transition-colors cursor-pointer">Réglementation RGPD</span>
              <span>•</span>
              <button
                onClick={() => setIsStudioOpen(true)}
                className="text-bronze-accent hover:underline font-semibold"
              >
                Dossier de Livrables d'Agence
              </button>
            </div>
          </div>
        </footer>

        {/* 2. Interactive "Audit & Design System" Studio SideDrawer Open Handler */}
        <AnimatePresence>
          {isStudioOpen && (
            <>
              {/* Back shadows overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsStudioOpen(false)}
                className="fixed inset-0 bg-black z-40 cursor-pointer"
              />
              <StudioPanel onClose={() => setIsStudioOpen(false)} />
            </>
          )}
        </AnimatePresence>

        {/* 3. Float scroll-to-top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 p-4 bg-charcoal-deep text-stone-beige z-30 shadow-2xl hover:bg-bronze-accent hover:text-charcoal-deep transition-all duration-300 rounded-full border border-stone-850"
              title="Remonter les sédiments"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
