/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MessageSquare, Clipboard, Palette, ArrowRightLeft, Truck, CheckCircle, Trophy, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    phase: 'L\'Échange Initial',
    title: 'Dialogue & Diagnostic d\'Intention',
    desc: 'Un premier entretien confidentiel se déploie à l\'atelier ou lors d\'un appel privé. Nous étudions l\'implantation architecturale de l\'œuvre (mur, sol, parure), la tonalité lumineuse requise, vos préférences géologiques et la dimension du projet.',
    duration: '1 à 2 semaines',
    partner: 'Client & Directeur artistique',
    details: 'Recommandation géologique personnalisée basée sur l\'exposition solaire de la résidence du client.',
    icon: MessageSquare
  },
  {
    num: '02',
    phase: 'La Conception',
    title: 'Esquisse & Palette Minérale',
    desc: 'Jean-Louis exécute plusieurs tracés d\'intentions artistiques. Nous soumettons au client un dossier de pré-étude comprenant les croquis originaux à la main, des échantillons physiques de pierres, marbres précieux ou verres vénitiens pour validation finale.',
    duration: '2 à 4 semaines',
    partner: 'Validation finale par le collectionneur',
    details: 'Envoi d\'un écrin d\'échantillonnage physique scellé par coffret de lin brut.',
    icon: Palette
  },
  {
    num: '03',
    phase: 'La Création',
    title: 'Taille Directe & Assemblage',
    desc: 'L\'œuvre prend vie au sein de l\'atelier. Le client reçoit des photographies hebdomadaires confidentielles révélant la progression de l\'action de taille à l\'acier, l\'inclinaison des tesselles ou le ponçage délicat.',
    duration: '4 à 12 semaines',
    partner: 'Artisan d\'Art Maître',
    details: 'Carnet de bord d\'Atelier transmis sous format numérique privé.',
    icon: ArrowRightLeft
  },
  {
    num: '04',
    phase: 'La Livraison d\'Honneur',
    title: 'Pose in-situ & Certification',
    desc: 'Nous supervisons personnellement la livraison murale ou l\'écrin de parure d\'art. L\'œuvre est signée d\'un poinçon d\'or et accompagnée du registre d\'Atelier contenant l\'empreinte géologique, certifiant l\'authenticité unique et éternelle de la pièce.',
    duration: 'Date convenue d\'échéance',
    partner: 'Équipe d\'Atelier & Maître d\'œuvre',
    details: 'Certificat scellé de cire d\'abeille d\'atelier numéroté et répertorié.',
    icon: Truck
  }
];

export default function CommissionProcess() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="commandes"
      className="py-24 md:py-36 bg-mineral-white border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-[10px] md:text-xs text-bronze-dark tracking-[0.2em] uppercase font-bold">
                06 / PROTOCOLE DE COMMANDE
              </span>
              <div className="h-[1px] w-12 bg-bronze-accent" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal-deep font-light tracking-tight leading-tight">
              Le Cabinet des Commandes
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-stone-500 font-light max-w-sm">
            Toutes les créations d'architecture d'intérieur et parures exclusives sont conçues sur-mesure d'après un protocole rigoureux d'excellence.
          </p>
        </div>

        {/* Modular horizontal phase roadmap tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            const isActive = activeTab === idx;

            return (
              <div
                key={st.num}
                onClick={() => setActiveTab(idx)}
                className={`p-6 border transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-stone-beige border-bronze-accent shadow-md'
                    : 'bg-mineral-white border-stone-150 hover:bg-stone-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-bronze-dark' : 'text-stone-400'}`}>
                    PHASE {st.num}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-bronze-dark' : 'text-stone-300'}`} />
                </div>
                
                <div className="mt-8 space-y-1">
                  <span className="font-mono text-[10px] uppercase text-stone-400 tracking-wider">
                    {st.phase}
                  </span>
                  <p className="font-serif text-md md:text-lg text-charcoal-deep font-light">
                    {st.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Expanded active phase specifications */}
        <div className="bg-stone-beige/40 p-8 md:p-12 border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Spec breakdown details columns */}
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-[9px] text-bronze-dark tracking-widest uppercase py-1 px-3 bg-white/70 rounded-full inline-block">
                PROTOCOLE DE CRÉATION EXCLUSIVE — PHASE {steps[activeTab].num}
              </span>
              
              <div className="space-y-4">
                <h3 className="font-serif text-3xl text-charcoal-deep font-light">
                  {steps[activeTab].title}
                </h3>
                <p className="font-sans text-sm md:text-base text-stone-650 font-light leading-relaxed">
                  {steps[activeTab].desc}
                </p>
              </div>

              {/* Dual technical rows representing trust / precision details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200 text-xs">
                <div className="space-y-1">
                  <span className="font-mono text-stone-400 uppercase">DURÉE MOYENNE :</span>
                  <p className="font-sans text-charcoal-deep font-semibold">{steps[activeTab].duration}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-stone-400 uppercase">INTERLOCUTEUR DIRECT :</span>
                  <p className="font-sans text-charcoal-deep font-semibold">{steps[activeTab].partner}</p>
                </div>
              </div>
            </div>

            {/* Visual reassurance / Trust card */}
            <div className="lg:col-span-4 bg-mineral-white p-6 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-2.5 text-xs text-charcoal-deep font-mono font-bold tracking-wide">
                <Trophy className="w-4 h-4 text-bronze-accent" />
                <span>GAGE D'EXCELLENCE</span>
              </div>
              <p className="font-sans text-[11px] text-stone-400 leading-relaxed font-light">
                {steps[activeTab].details}
              </p>
              <hr className="border-stone-100" />
              <div className="flex items-center space-x-2 text-[10px] text-emerald-700 font-mono">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Assurances techniques & transports internationaux certifiés</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
