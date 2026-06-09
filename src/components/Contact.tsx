/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, NotebookPen, ShieldAlert, Sparkles, Building, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Mosaïque d\'Art');
  const [timeline, setTimeline] = useState('Rapide (1-2 mois)');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 7000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-charcoal-deep text-stone-beige relative overflow-hidden grain-overlay"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Emotion and Photographic Address Frame */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-[10px] md:text-xs text-bronze-accent tracking-[0.2em] uppercase font-bold">
                  07 / REJOINDRE L’ATELIER
                </span>
                <div className="h-[1px] w-12 bg-bronze-accent" />
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-stone-beige font-light tracking-tight leading-tight">
                Parlons de votre projet.
              </h2>
              <p className="font-sans text-xs md:text-sm text-stone-300 font-light leading-relaxed max-w-sm">
                Que vous soyez architecte d'intérieur, conservateur de musée, ou particulier passionné d'art d'exception, nous serons honorés de donner forme à vos aspirations.
              </p>
            </div>

            {/* Visual Photographic Canvas with raw texture */}
            <div className="aspect-[16/10] w-full relative overflow-hidden bg-charcoal-muted border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000"
                alt="Atelier d'Art et matière en fusion"
                className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/30 to-transparent" />
            </div>

            {/* Coordinates and Contact details with elegant icons */}
            <div className="space-y-4 pt-4 border-t border-stone-800">
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-bronze-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-[9px] text-stone-400 uppercase tracking-widest">ATELIER HISTORIQUE :</p>
                  <p className="font-sans text-xs text-stone-200 mt-0.5">Place d'Armes des Artisans d'Art, 13000 PACA, France</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-bronze-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-[9px] text-stone-400 uppercase tracking-widest">LIAISON DE DIRECTION :</p>
                  <p className="font-sans text-xs text-stone-200 mt-0.5">+33 (0)4 91 25 45 60</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-bronze-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-[9px] text-stone-400 uppercase tracking-widest">CORRESPONDANCE D'ART :</p>
                  <p className="font-sans text-xs text-stone-200 mt-0.5">direction@atelier-artisanat.fr</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Premium Form with strict minimalist look */}
          <div className="lg:col-span-7 bg-charcoal-muted p-8 md:p-12 border border-stone-800 relative">
            
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 space-y-4"
              >
                <div className="w-12 h-12 rounded-full border border-bronze-accent flex items-center justify-center text-bronze-accent bg-charcoal-deep shadow-lg">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="font-serif text-2xl text-stone-beige font-light">Le Mémoire est déposé.</h3>
                <p className="font-sans text-xs text-stone-450 max-w-sm leading-relaxed">
                  Votre mémoire d'intention créative pour {projectType} a été répertorié. Un de nos artisans d'art ou notre directeur de liaison étudiera vos esquisses initiales et vous contactera sous 24h.
                </p>
                <div className="pt-4">
                  <span className="font-mono text-[9px] text-bronze-accent tracking-widest uppercase py-1 px-3 border border-bronze-accent/20 bg-stone-900 rounded-full">
                    SÉCURISÉ & EXCLUSIF
                  </span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-bronze-accent tracking-widest uppercase block">
                    — PROTOCOLE DE LIAISON NUMÉRIQUE —
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-beige font-light">
                    Sollicitation Spécifique d'Oeuvre
                  </h3>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] text-stone-400 uppercase tracking-wider">Nom & Prénom / Maison :</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex : Cabinet d'architecture Vendôme"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 px-4 py-3 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-bronze-accent focus:bg-stone-950 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] text-stone-400 uppercase tracking-wider">Email de Liaison Directe :</label>
                    <input
                      type="email"
                      required
                      placeholder="Ex : contact@cabinet-vendome.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 px-4 py-3 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-bronze-accent focus:bg-stone-950 transition-colors"
                    />
                  </div>
                </div>

                {/* Project selector dropdown/boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] text-stone-400 uppercase tracking-wider">Territoire Artistique Concerné :</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 px-3 py-3 text-xs text-stone-100 focus:outline-none focus:border-bronze-accent focus:bg-stone-950 transition-colors font-sans"
                    >
                      <option value="Mosaïque d'Art">Mosaïque d'Art Murale / Sol</option>
                      <option value="Sculpture sur Roche">Sculpture sur Roche Calcaire / Marbre</option>
                      <option value="Bijouterie d'Auteur">Bijou d'Auteur & Parure de Sodalite</option>
                      <option value="Sur-mesure Complet">Autre Projet Unique / Restauration historique</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] text-stone-400 uppercase tracking-wider">Échéance de Création Désirée :</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 px-3 py-3 text-xs text-stone-100 focus:outline-none focus:border-bronze-accent focus:bg-stone-950 transition-colors font-sans"
                    >
                      <option value="Prestige (3 à 6 mois)">Prestige (3 à 6 mois)</option>
                      <option value="Muséal (+6 mois)">Muséal (+6 mois)</option>
                      <option value="À Définir d'un commun accord">À Définir d'un commun accord</option>
                    </select>
                  </div>
                </div>

                {/* Conceptual Narrative */}
                <div className="space-y-1.5 mr-1">
                  <label className="font-mono text-[9px] text-stone-400 uppercase tracking-wider">Description de l'Intention Artistique :</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Quelles sont les dimensions de l'espace, la roche ou l'histoire géologique que vous souhaiteriez que nous racontions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 p-4 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-bronze-accent focus:bg-stone-950 transition-colors resize-none"
                  />
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-bronze-accent text-charcoal-deep font-sans text-xs uppercase tracking-widest font-semibold hover:bg-stone-beige hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>DÉPOSER LE MÉMOIRE INTENTIONNEL</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Disclaimer/Reassurance footer */}
                <div className="pt-4 border-t border-stone-850 flex items-center space-x-2.5 text-[10px] text-stone-500 font-mono">
                  <NotebookPen className="w-3.5 h-3.5 text-bronze-accent" />
                  <span>Traitement hautement confidentiel. Aucune donnée n'est cédée à des tiers.</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
