/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, Hammer, ShieldX, Scissors, Eye, MoveRight } from 'lucide-react';
import { motion } from 'motion/react';

const universes = [
  {
    id: 'mosaique',
    step: '01',
    name: 'La Mosaïque d\'Art',
    material: 'Verre d\'Or & Marbre Blanc',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000',
    tagline: 'Jeux de lumière, vibration lumineuse du verre soufflé d\'or byzantin.',
    desc: 'Un assemblage minutieux de tesselles taillées à la marteline traditionnelle. Le positionnement asymétrique des marbres de Carrare et smalts crée une texture vibrante qui capte chaque rayon solaire pour métamorphoser les parois murales en chef-d\'œuvre vivant.',
    icon: Sparkles
  },
  {
    id: 'sculpture',
    step: '02',
    name: 'La Sculpture sur Roche',
    material: 'Calcaire Oolithique & Cipollin',
    image: 'https://images.unsplash.com/photo-1576016770956-debb63d900bb?q=80&w=1000',
    tagline: 'Extraction de la finesse tridimensionnelle de la pierre brute nationale.',
    desc: 'La pierre de Bourgogne et le cipollin de Corse se transforment sous les coups assurés du ciseau. Un travail minutieux sur l\'érosion géométrique, offrant des volumes élancés et des clair-obscur dramatiques et intemporels.',
    icon: Hammer
  },
  {
    id: 'bijoux',
    step: '03',
    name: 'La Bijouterie d\'Auteur',
    material: 'Quartz Rutile, Sodalite & Or',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000',
    tagline: 'Le port conscient de la poésie minérale comme une sculpture portative.',
    desc: 'Des pièces uniques sculptées à même la pierre fine monolithique, mêlant or brut 18 carats et imperfections naturelles préservées. Une parure d\'art asymétrique et contemporaine pensée pour les esthètes en mouvement.',
    icon: Eye
  }
];

export default function Universes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="univers"
      className="py-24 md:py-36 bg-stone-beige/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 space-y-6 md:space-y-0">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-[10px] md:text-xs text-bronze-dark tracking-[0.2em] uppercase font-bold">
                02 / LES ESPACES DE CRÉATION
              </span>
              <div className="h-[1px] w-12 bg-bronze-accent" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal-deep font-light tracking-tight leading-tight">
              Trois Univers d'Exception
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-stone-600 font-light max-w-md leading-relaxed">
            De l'œuvre monumentale murale à la micro-sculpture joaillière, l'Atelier décline sa démarche unique autour de la vérité minérale et de l'âme du geste.
          </p>
        </div>

        {/* Three Columns Grid Interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {universes.map((univ, index) => {
            const IconComponent = univ.icon;
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={univ.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 1.0, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex flex-col justify-between bg-mineral-white p-6 md:p-8 border border-stone-beige transition-all duration-700 ease-in-out cursor-pointer ${
                  isHovered
                    ? 'shadow-2xl translate-y-[-10px] bg-white border-bronze-accent'
                    : isAnyHovered
                    ? 'opacity-65'
                    : 'shadow-sm'
                }`}
              >
                {/* Content Elements */}
                <div className="space-y-8">
                  {/* Step and Noble Material */}
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-bronze-dark font-semibold tracking-widest">
                      {univ.step} / {univ.material}
                    </span>
                    <IconComponent className="w-5 h-5 text-bronze-accent" />
                  </div>

                  {/* Cinematic Visual Frame with Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-beige group">
                    <img
                      src={univ.image}
                      alt={univ.name}
                      className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-charcoal-deep/10 hover:bg-transparent transition-all duration-1000" />
                  </div>

                  {/* Title & Slogan */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal-deep">
                      {univ.name}
                    </h3>
                    <p className="font-serif text-sm italic text-stone-500 font-light leading-relaxed">
                      {univ.tagline}
                    </p>
                  </div>

                  {/* In-depth Narrative */}
                  <p className="font-sans text-xs md:text-sm text-stone-500 font-light leading-relaxed">
                    {univ.desc}
                  </p>
                </div>

                {/* Bottom link call, which appears interactive */}
                <div className="pt-8 mt-4 border-t border-stone-100 flex items-center justify-between text-charcoal-deep group">
                  <span className="font-mono text-[10px] tracking-widest uppercase font-medium group-hover:text-bronze-dark transition-colors">
                    VOIR LA COLLECTION DÉDIÉE
                  </span>
                  <MoveRight className="w-4 h-4 text-bronze-accent group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
