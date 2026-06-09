/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, MapPin, Ticket, Sparkles, Clock, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { exhibitions } from '../data/exhibitions';

export default function Exhibitions() {
  const [rsvpSent, setRsvpSent] = useState<string | null>(null); // Exhibition ID
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpGuests, setRsvpGuests] = useState('1');

  const handleRSVP = (e: React.FormEvent, itemId: string) => {
    e.preventDefault();
    if (rsvpEmail) {
      setRsvpSent(itemId);
      setTimeout(() => {
        setRsvpSent(null);
        setRsvpEmail('');
        setRsvpGuests('1');
      }, 5000);
    }
  };

  return (
    <section
      id="expositions"
      className="py-24 md:py-36 bg-stone-beige/30 transition-all text-charcoal-deep"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-[10px] md:text-xs text-bronze-dark tracking-[0.2em] uppercase font-bold">
                05 / DIALOGUE CULTUREL
              </span>
              <div className="h-[1px] w-12 bg-bronze-accent" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal-deep font-light tracking-tight leading-tight">
              L'Agenda Expositions
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-stone-500 font-light max-w-sm">
            Retrouvez l'Atelier lors des salons contemporains européens ou lors d'expositions exclusives dans nos espaces parisiens ou régionaux.
          </p>
        </div>

        {/* List layout of museum events */}
        <div className="space-y-12">
          {exhibitions.map((exh, idx) => {
            const isRSVPingThis = rsvpSent === exh.id;

            return (
              <motion.div
                key={exh.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-mineral-white p-6 md:p-10 border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-500"
              >
                {/* Event Time indicators (Left) */}
                <div className="lg:col-span-3 space-y-3">
                  <div className="flex items-center space-x-2 text-bronze-dark font-mono text-xs uppercase tracking-widest font-semibold">
                    <Calendar className="w-4 h-4 text-bronze-accent" />
                    <span>{exh.startDate}</span>
                  </div>
                  <div className="text-xs font-mono text-stone-400 pl-6 uppercase tracking-wider">
                    Jusqu'au {exh.endDate}
                  </div>
                  <div className="pl-6 pt-3">
                    <span className="inline-block px-3 py-1 bg-stone-100 text-stone-700 font-mono text-[9px] uppercase tracking-wider border border-stone-200">
                      {exh.type}
                    </span>
                  </div>
                </div>

                {/* Cover representation thumbnail */}
                <div className="lg:col-span-3 aspect-[16/10] overflow-hidden bg-stone-200 border border-stone-100">
                  <img
                    src={exh.imageUrl}
                    alt={exh.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Event descriptions */}
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="font-serif text-xl md:text-2xl font-light text-charcoal-deep leading-tight">
                    {exh.title}
                  </h3>
                  <div className="flex items-start space-x-1 text-xs text-stone-500 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0 mt-0.5" />
                    <span>{exh.location}</span>
                  </div>
                  <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
                    {exh.description}
                  </p>
                </div>

                {/* Interactive RSVP Action Panel */}
                <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-stone-250 lg:pl-8 pt-6 lg:pt-0">
                  {isRSVPingThis ? (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center rounded-none font-sans"
                    >
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                      <p className="font-mono text-[9px] uppercase tracking-widest font-semibold">Invitation confirmée !</p>
                      <p className="text-[11px] mt-1 text-stone-500">Un laissez-passer précieux valable pour {rsvpGuests} {parseInt(rsvpGuests) > 1 ? 'visiteurs' : 'visiteur'} est expédié à votre adresse électronique.</p>
                    </motion.div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-xs text-charcoal-deep font-mono font-medium tracking-wide">
                        <Ticket className="w-4 h-4 text-bronze-accent" />
                        <span>LAISSEZ-PASSER CONFIDENTIEL</span>
                      </div>
                      <p className="font-sans text-[11px] text-stone-400 leading-relaxed font-light">
                        Inscrivez-vous pour assister au vernissage privé. Places limitées réservées aux conservateurs, collectionneurs et sur invitation d'art.
                      </p>

                      <form onSubmit={(e) => handleRSVP(e, exh.id)} className="space-y-2">
                        <div className="flex gap-1.5">
                          <input
                            type="email"
                            required
                            placeholder="Votre Email d'invitation"
                            value={rsvpEmail}
                            onChange={(e) => setRsvpEmail(e.target.value)}
                            className="flex-1 bg-white border border-stone-200 px-3 py-1.5 text-xs font-sans text-charcoal-deep focus:outline-none focus:border-bronze-accent"
                          />
                          <select
                            value={rsvpGuests}
                            onChange={(e) => setRsvpGuests(e.target.value)}
                            className="bg-white border border-stone-200 px-2 py-1.5 text-xs text-charcoal-deep focus:outline-none focus:border-bronze-accent font-sans"
                          >
                            <option value="1">1 pers</option>
                            <option value="2">2 pers</option>
                          </select>
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2 bg-charcoal-deep text-stone-beige font-sans text-[10px] uppercase tracking-widest hover:bg-bronze-accent hover:text-charcoal-deep transition-all duration-300 font-semibold"
                        >
                          S'inscrire au Vernissage
                        </button>
                      </form>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
