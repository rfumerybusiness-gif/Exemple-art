/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Artist() {
  return (
    <section
      id="artiste"
      className="py-24 md:py-36 bg-mineral-white overflow-hidden grain-overlay"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Magazine-like Editorial Photographic Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%200px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full bg-stone-beige p-3 border border-stone-beige shadow-sm"
            >
              {/* Authentique Portrait Artwork */}
              <div className="w-full h-full bg-cover bg-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1000"
                  alt="Jean-Louis Desmarest taillant la roche"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Decorative Mineral Label */}
              <div className="absolute -bottom-6 -right-6 px-4 py-3 bg-charcoal-deep text-stone-beige font-mono text-[9px] uppercase tracking-widest hidden md:block">
                L'Instant du Geste • PACA, PAC
              </div>
            </motion.div>
          </div>

          {/* Right Column: Immersive Storytelling, Literary Copywriting */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Index label */}
            <div className="flex items-center space-x-3">
              <span className="font-mono text-[10px] md:text-xs text-bronze-dark tracking-[0.2em] uppercase font-bold">
                01 / LE DIRECTEUR DE CRÉATION
              </span>
              <div className="h-[1px] w-12 bg-bronze-accent" />
            </div>

            {/* Title & Portrait Intro */}
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-6xl text-charcoal-deep font-light tracking-tight leading-tight">
                Jean-Louis Desmarest
              </h2>
              <p className="font-sans text-xs uppercase tracking-widest text-bronze-dark font-mono font-medium">
                Maître d'Art d'Exception, Sculpteur & Lapidaire
              </p>
            </div>

            {/* Immersive Literary Master Quote */}
            <blockquote className="border-l-2 border-bronze-accent pl-6 py-1">
              <p className="font-serif text-xl md:text-2xl text-charcoal-deep/90 italic font-light leading-relaxed">
                « Je ne cherche pas à plier la pierre à mes exigences. Je l'écoute d'abord. Ma tâche est d'identifier la faille, le fil mystérieux, et de libérer la beauté sacrée qu'elle couve depuis des millions d'années. »
              </p>
            </blockquote>

            {/* Substantive Bio content with superb alignment */}
            <div className="space-y-6 font-sans text-stone-600 font-light leading-relaxed text-sm md:text-base">
              <p>
                Lauréat du prix d'Atelier d'Exception en Provence, <strong className="text-charcoal-deep font-normal">Jean-Louis Desmarest</strong> façonne la roche calcaire, le marbre de Carrare et les gemmes régionales depuis plus de vingt-cinq ans. Diplômé des Beaux-Arts et formé auprès des derniers compagnons mosaïstes de Ravenne, il fusionne deux disciplines ancestrales : la rigueur de la taille directe et la vibration kaléidoscopique de la mosaïque d'or.
              </p>
              <p>
                Dans son atelier niché au cœur des massifs géologiques français, il n'utilise aucun outil numérique. Seule la main, guidée par la marteline traditionnelle et le burin de acier forgé, extrait pas à pas l'émotion de la matière brute. Ses pièces uniques ornent désormais des résidences privées de prestige et des galeries d'art contemporain à Paris, Milan et Genève.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-4 flex items-center space-x-4">
              <div className="flex flex-col">
                <span className="font-serif text-md text-charcoal-deep tracking-wider font-light italic">
                  Jean-Louis Desmarest
                </span>
                <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest mt-1">
                  Atelier d'Art Signé
                </span>
              </div>
              <div className="w-16 h-px bg-stone-200" />
              {/* Fake aesthetic stamp */}
              <div className="px-3 py-1.5 border border-bronze-accent/25 rounded-md font-mono text-[8px] text-bronze-dark/80 tracking-widest uppercase">
                CERTIFIÉ HAUTE FAÇON
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
