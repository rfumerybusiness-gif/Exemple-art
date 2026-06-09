/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowDown, Scroll } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-charcoal-deep overflow-hidden select-none"
    >
      {/* Background Cinematic Texture Image with zoom effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0.35 }}
          animate={{ scale: 1.0, opacity: 0.55 }}
          transition={{ duration: 4.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1595121226040-3ee7aa892694?q=80&w=1500')`,
          }}
        />
        {/* Rich moody light gradients simulating high-end museum spotlights */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-transparent to-charcoal-deep/30" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center pt-16">
        <div className="flex flex-col items-center justify-center">
          {/* Subtle Studio Tag */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="font-mono text-[10px] md:text-xs text-bronze-accent tracking-[0.4em] uppercase py-1 px-3 border border-bronze-accent/20 bg-charcoal-muted/40 backdrop-blur-sm rounded-full">
              MAISON DE CRÉATION & SAVOIR-FAIRE
            </span>
          </motion.div>

          {/* Master Headings: "Quand la matière devient émotion." */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-stone-beige tracking-tight leading-[0.95] max-w-5xl">
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Quand la matière
            </motion.span>
            <motion.span
              initial={{ y: 45, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="block italic font-light text-bronze-accent mt-3"
            >
              devient émotion.
            </motion.span>
          </h1>

          {/* Slogan details */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 font-sans text-sm md:text-base lg:text-lg text-stone-beige/80 max-w-xl font-light leading-relaxed tracking-wide"
          >
            Créations d'exception en mosaïque artistique, sculpture de roches natives et haute parure de pierres fines façonnées à la main.
          </motion.p>

          {/* Call-to-actions buttons with strict elegance */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6"
          >
            <a
              href="#artiste"
              className="w-full sm:w-auto px-8 py-3.5 bg-bronze-accent text-charcoal-deep font-sans text-xs uppercase tracking-widest font-semibold rounded-none hover:bg-stone-beige transition-colors duration-500 hover:shadow-lg text-center"
            >
              Découvrir L'Atelier
            </a>
            <a
              href="#galerie"
              className="w-full sm:w-auto px-8 py-3.5 border border-stone-beige/30 text-stone-beige font-sans text-xs uppercase tracking-widest font-medium rounded-none hover:bg-stone-beige hover:text-charcoal-deep transition-all duration-500 block text-center"
            >
              Explorer les Œuvres
            </a>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.6, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
        onClick={() => document.getElementById('artiste')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-300">
          DÉCANTATION DU BRUT
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-bronze-accent" />
        </motion.div>
      </motion.div>

      {/* Minimalist Side Framing (Maison d'Art Stamp) */}
      <div className="absolute bottom-8 right-12 hidden lg:flex items-center space-x-3 text-stone-400 font-mono text-[9px] tracking-[0.2em] uppercase">
        <span>FRANCE METROPOLITAINE</span>
        <span className="w-1.5 h-1.5 rounded-full bg-bronze-accent" />
        <span>PROVENCE & BOURGOGNE</span>
      </div>
    </section>
  );
}
