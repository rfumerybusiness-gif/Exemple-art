/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Layers, Pencil, Hammer, Sparkles, CheckSquare, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { GesteStep } from '../types';

const steps: GesteStep[] = [
  {
    number: 'I',
    title: 'L\'Excavation & Sourcing Géologique',
    description: 'Le parcours commence au cœur de la roche. Jean-Louis trie personnellement chaque calcaire d\'Anjou, marbre de Carrare et ardoise de schiste directement dans les carrières régionales pour s\'assurer de son grain sédimentaire.',
    materialFocus: 'Calcaire de Bourgogne & marbres impériaux',
    quote: '« La matière dicte la tension structurelle de l\'œuvre future. »',
    detailImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000'
  },
  {
    number: 'II',
    title: 'L\'Esquisse & Tracé Architectural',
    description: 'Une étude géométrique à l\'échelle 1:1 est tracée sur papier calque rustique. Ce plan définit les lignes de force directrices, la courbure des vagues ou les nuances de clair-obscur requises.',
    materialFocus: 'Dessin à la mine de plomb grasse d\'Atelier',
    quote: '« Structurer le vide pour mieux donner de l\'ampleur aux ombres portées. »',
    detailImage: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1000'
  },
  {
    number: 'III',
    title: 'La Coupe Directe & La Marteline',
    description: 'Chaque fragment de mosaïque ou bloc de sculpture est façonné à l\'ancienne. C\'est l\'étreinte brute : l\'artisan utilise la marteline sur un ciseau en acier trempé pour fendre le minéral de manière nette.',
    materialFocus: 'Chisels d\'or, acier et marteau de compagnon',
    quote: '« L\'oreille entend la vérité de la pierre au son précis du choc métallique. »',
    detailImage: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1000'
  },
  {
    number: 'IV',
    title: 'Le Dialogue de l\'Assemblage',
    description: 'Les fragments (tesselles) sont insérés un à un sur un mortier de chaux grasse formulé par l\'atelier. L\'inclinaison subtile de chaque tesselle (entre 10° et 15°) contrôle la réfraction lumineuse sous l\'œil du soleil.',
    materialFocus: 'Mortier étouffé historique à la chaux naturelle',
    quote: '« C\'est l\'imperfection maîtrisée de l\'angle de pose qui crée la lumière vibrante. »',
    detailImage: 'https://images.unsplash.com/photo-1595121226040-3ee7aa892694?q=80&w=1000'
  },
  {
    number: 'V',
    title: 'Le Polissage de Cire & Finitions',
    description: 'L\'œuvre finale fait l\'objet d\'un brossage à la poudre de pierre puis d\'un lustrage de conservation à base de cire d\'abeille biologique chaude, révélant les veines profondes sans jamais altérer le matte originel.',
    materialFocus: 'Cire d\'abeille sauvage et huiles végétales de lin',
    quote: '« Nourrir la pierre pour lui conférer son éternité d\'apparat. »',
    detailImage: 'https://images.unsplash.com/photo-1601887389937-0b02c26b6c3c?q=80&w=1000'
  }
];

export default function Geste() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section
      id="geste"
      className="py-24 md:py-36 bg-charcoal-deep text-stone-beige relative overflow-hidden grain-overlay"
    >
      {/* Absolute layout borders mimicking high-end magazines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-900" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 relative z-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-[10px] md:text-xs text-bronze-accent tracking-[0.2em] uppercase font-bold">
                04 / L’AME ET L’ETREINTE
              </span>
              <div className="h-[1px] w-12 bg-bronze-accent" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-stone-beige font-light tracking-tight leading-tight">
              Le Geste Sacré
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-stone-400 font-light max-w-sm">
            Rien ne remplace la main. Découvrez le triptyque de transformation de la pierre sédimentaire en objet d'émotion profonde.
          </p>
        </div>

        {/* Dynamic Storyteller Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Interactive Steps Selector Index */}
          <div className="lg:col-span-4 space-y-4">
            {steps.map((st, idx) => (
              <div
                key={st.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`group p-4 border border-transparent hover:border-stone-800 transition-all duration-500 cursor-pointer flex items-center space-x-4 ${
                  activeStepIndex === idx
                    ? 'bg-charcoal-muted/90 border-bronze-accent/40 shadow-xl'
                    : 'opacity-70'
                }`}
              >
                {/* Number */}
                <span className={`font-serif text-xl ${activeStepIndex === idx ? 'text-bronze-accent font-semibold' : 'text-stone-500'}`}>
                  {st.number}
                </span>
                
                {/* Step Info Summary */}
                <div className="flex-1">
                  <h4 className="font-serif text-md text-stone-100 font-light">
                    {st.title}
                  </h4>
                  <p className="font-mono text-[9px] text-stone-500 uppercase tracking-wider mt-0.5">
                    {st.materialFocus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Immersive Detailed view of active step */}
          <div className="lg:col-span-8 bg-charcoal-muted p-8 md:p-12 border border-stone-800 flex flex-col md:flex-row gap-8 md:gap-12 items-center min-h-[400px]">
            {/* Image Preview */}
            <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden bg-stone-900 border border-stone-800">
              <motion.img
                key={activeStepIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                src={steps[activeStepIndex].detailImage}
                alt={steps[activeStepIndex].title}
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal-deep/30" />
            </div>

            {/* Explanation narrative specs */}
            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-bronze-accent tracking-widest uppercase block">
                  ÉTAPE TECHNIQUE {steps[activeStepIndex].number} — DÉTAIL D'AUTEUR
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-stone-beige leading-snug">
                  {steps[activeStepIndex].title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-stone-300 font-light leading-relaxed">
                  {steps[activeStepIndex].description}
                </p>
              </div>

              {/* Master Quote */}
              <div className="p-4 bg-stone-950/60 border-l border-bronze-accent font-serif text-xs md:text-sm italic text-stone-400 font-light pr-2">
                {steps[activeStepIndex].quote}
              </div>

              {/* Specs label */}
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[9px] text-stone-500 uppercase tracking-wider">MATÉRIAU PHARE :</span>
                {/* Gold micro capsule */}
                <span className="px-2.5 py-0.5 border border-stone-800 bg-stone-900 font-mono text-[9px] text-bronze-accent tracking-wide uppercase">
                  {steps[activeStepIndex].materialFocus}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
