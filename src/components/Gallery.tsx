/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Maximize2, ZoomIn, ZoomOut, Grid, AlignJustify, Eye, Calendar, MapPin, X, ArrowLeft, ArrowRight, MessageSquareCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { artworks } from '../data/artworks';
import { Artwork } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mosaic' | 'sculpture' | 'jewelry'>('all');
  const [isGridMode, setIsGridMode] = useState(true); // true = grid/masonry, false = large cards list
  const [activeArtworkIndex, setActiveArtworkIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1); // 1x to 3x for texture inspection
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryNote, setInquiryNote] = useState('');

  // Filter logic
  const filteredArtworks = artworks.filter((art) => {
    if (selectedCategory === 'all') return true;
    return art.category === selectedCategory;
  });

  const activeArtwork = activeArtworkIndex !== null ? filteredArtworks[activeArtworkIndex] : null;

  const handleNextArtwork = () => {
    if (activeArtworkIndex !== null) {
      setZoomLevel(1);
      setActiveArtworkIndex((activeArtworkIndex + 1) % filteredArtworks.length);
      setInquirySent(false);
    }
  };

  const handlePrevArtwork = () => {
    if (activeArtworkIndex !== null) {
      setZoomLevel(1);
      setActiveArtworkIndex(
        activeArtworkIndex === 0 ? filteredArtworks.length - 1 : activeArtworkIndex - 1
      );
      setInquirySent(false);
    }
  };

  const submitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryName && inquiryEmail) {
      setInquirySent(true);
      setTimeout(() => {
        setInquirySent(false);
        setInquiryName('');
        setInquiryEmail('');
        setInquiryNote('');
      }, 5000);
    }
  };

  return (
    <section
      id="galerie"
      className="py-24 md:py-36 bg-mineral-white overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-[10px] md:text-xs text-bronze-dark tracking-[0.2em] uppercase font-bold">
                03 / LE CABINET DE SÉLECTION
              </span>
              <div className="h-[1px] w-12 bg-bronze-accent" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal-deep font-light tracking-tight leading-tight">
              La Scénographie d'Œuvres
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-stone-500 font-light max-w-sm">
            Toutes nos pièces sont des créations originales d'art, livrées accompagnées de leur certificat officiel de pièce unique numéroté et signé.
          </p>
        </div>

        {/* Filters Rail & View Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-200 pb-6 mb-12 space-y-4 sm:space-y-0">
          {/* Categories Buttons */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {(
              [
                { label: 'Toutes les Créations', value: 'all' },
                { label: 'Mosaïques d\'Art', value: 'mosaic' },
                { label: 'Sculptures de Roche', value: 'sculpture' },
                { label: 'Bijoux d\'Auteur', value: 'jewelry' },
              ] as const
            ).map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setZoomLevel(1);
                }}
                className={`font-sans text-xs uppercase tracking-widest px-4 py-2.5 transition-all duration-500 ${
                  selectedCategory === cat.value
                    ? 'bg-charcoal-deep text-stone-beige font-semibold'
                    : 'text-stone-500 hover:text-charcoal-deep hover:bg-stone-beige/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Mode controls */}
          <div className="hidden sm:flex items-center space-x-2 text-stone-500">
            <button
              onClick={() => setIsGridMode(true)}
              className={`p-2 transition-colors ${isGridMode ? 'text-bronze-dark' : 'hover:text-charcoal-deep'}`}
              title="Scénographie asymétrique"
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsGridMode(false)}
              className={`p-2 transition-colors ${!isGridMode ? 'text-bronze-dark' : 'hover:text-charcoal-deep'}`}
              title="Focus linéaire minimal"
              aria-label="List view"
            >
              <AlignJustify className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Gallery Content Masonry / Flat */}
        <div
          id="gallery-grid"
          className={
            isGridMode
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dynamic-masonry'
              : 'space-y-16 max-w-4xl mx-auto'
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((art, index) => {
              const globalIndex = artworks.findIndex((x) => x.id === art.id);
              
              return (
                <motion.div
                  key={art.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex flex-col justify-between bg-white border border-stone-100 p-4 transition-all duration-700 hover:shadow-xl ${
                    !isGridMode ? 'flex-col md:flex-row gap-8 items-center p-8' : ''
                  }`}
                >
                  {/* Item Image with overlay and zoom icon */}
                  <div
                    className={`relative overflow-hidden bg-stone-beige ${
                      isGridMode ? 'aspect-[4/3] w-full' : 'w-full md:w-[40%] aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`font-mono text-[8px] uppercase tracking-widest px-2.5 py-1 ${
                          art.status === 'disponible'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : art.status === 'exposition'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-stone-50 text-stone-500 border border-stone-200'
                        }`}
                      >
                        {art.status}
                      </span>
                    </div>

                    {/* Subtle click indicator */}
                    <div
                      onClick={() => {
                        const idx = filteredArtworks.findIndex((item) => item.id === art.id);
                        setActiveArtworkIndex(idx);
                      }}
                      className="absolute inset-0 bg-charcoal-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center cursor-pointer"
                    >
                      <div className="px-4 py-2 bg-mineral-white text-charcoal-deep font-mono text-[9px] uppercase tracking-widest flex items-center space-x-1.5 shadow-md">
                        <Maximize2 className="w-3 h-3" />
                        <span>ENTRER DANS L'ŒUVRE</span>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Content */}
                  <div className={`mt-6 flex-1 flex flex-col justify-between ${!isGridMode ? 'mt-0' : ''}`}>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-xl md:text-2xl text-charcoal-deep font-light leading-snug">
                          {art.title}
                        </h3>
                        <span className="font-mono text-[9px] text-stone-400 tracking-wider">
                          {art.year}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-stone-500">
                        {art.materials}
                      </p>
                      <p className="font-mono text-[10px] text-bronze-dark tracking-wide font-medium">
                        Dim: {art.dimensions}
                      </p>
                    </div>

                    {/* Footer Details */}
                    <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-widest text-stone-400 uppercase">
                        {art.priceCategory}
                      </span>
                      <button
                        onClick={() => {
                          const idx = filteredArtworks.findIndex((item) => item.id === art.id);
                          setActiveArtworkIndex(idx);
                        }}
                        className="font-sans text-xs underline underline-offset-4 text-charcoal-deep hover:text-bronze-dark tracking-wide transition-colors"
                      >
                        Fiche & Audition
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Gallery Lightroom (Immersive Fullscreen Modal) */}
        <AnimatePresence>
          {activeArtwork && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-[#0c0c0c] z-50 flex flex-col lg:flex-row text-white overflow-y-auto"
            >
              
              {/* Left Modal Part: Cinematic Large Canvas View */}
              <div className="flex-1 min-h-[50vh] lg:min-h-screen relative flex items-center justify-center bg-black/90 p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-900">
                {/* Control Toggles on Image Screen */}
                <div className="absolute top-6 left-6 z-20 flex items-center space-x-4">
                  <span className="font-mono text-xs text-stone-400">
                    EXPOSITION CABINET • {activeArtworkIndex! + 1} / {filteredArtworks.length}
                  </span>
                </div>

                {/* Right controls */}
                <div className="absolute top-6 right-6 z-20 flex items-center space-x-2">
                  <button
                    onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.5))}
                    className="p-1.5 text-stone-400 hover:text-bronze-accent bg-stone-900/50 rounded"
                    title="Zoom arrière"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-[10px] px-1 text-stone-400">{zoomLevel.toFixed(1)}x</span>
                  <button
                    onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.5))}
                    className="p-1.5 text-stone-400 hover:text-bronze-accent bg-stone-900/50 rounded"
                    title="Zoomer sur la faille"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Main zoomed image viewport */}
                <div className="w-full h-full max-h-[80vh] flex items-center justify-center overflow-auto relative">
                  <motion.img
                    src={activeArtwork.image}
                    alt={activeArtwork.title}
                    style={{ scale: zoomLevel }}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 ease-out shadow-2xl cursor-grab active:cursor-grabbing"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Left/Right navigation float controls */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                  <button
                    onClick={handlePrevArtwork}
                    className="flex items-center space-x-2 p-3 bg-stone-900/80 hover:bg-bronze-accent hover:text-charcoal-deep transition-all duration-300 rounded-full font-mono text-[10px] tracking-widest uppercase"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden md:inline">Précédente</span>
                  </button>

                  <div className="font-mono text-[9px] text-stone-500 bg-stone-950 px-4 py-2 border border-stone-800 rounded-full hidden md:block">
                    CONSEIL : Augmentez le zoom pour apprécier la vibration du verre d'or d'atelier
                  </div>

                  <button
                    onClick={handleNextArtwork}
                    className="flex items-center space-x-2 p-3 bg-stone-900/80 hover:bg-bronze-accent hover:text-charcoal-deep transition-all duration-300 rounded-full font-mono text-[10px] tracking-widest uppercase animate-pulse"
                  >
                    <span className="hidden md:inline">Suivante</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Modal Part: Editorial technical specs & Reservation form */}
              <div className="w-full lg:w-[480px] bg-charcoal-deep p-8 md:p-12 flex flex-col justify-between space-y-8 relative grain-overlay">
                
                {/* Close Button at top bar of details */}
                <button
                  onClick={() => {
                    setActiveArtworkIndex(null);
                    setZoomLevel(1);
                  }}
                  className="absolute top-6 right-6 p-2 text-stone-400 hover:text-white transition-colors cursor-pointer rounded-full bg-stone-900"
                  aria-label="Fermer Lightroom"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header details */}
                <div className="space-y-6">
                  <span className="font-mono text-[10px] text-bronze-accent tracking-[0.3em] uppercase block">
                    — FICHE TECHNIQUE ET INTENTION —
                  </span>

                  <div className="space-y-2">
                    <h2 className="font-serif text-3xl md:text-4xl text-stone-beige font-light leading-tight">
                      {activeArtwork.title}
                    </h2>
                    <p className="font-mono text-xs text-stone-400">
                      Collection {activeArtwork.year} • Signée Main
                    </p>
                  </div>

                  {/* Specification Box */}
                  <div className="p-4 bg-charcoal-muted border border-stone-900 text-xs font-mono space-y-2.5 text-stone-300">
                    <p className="flex justify-between">
                      <span className="text-stone-500">MATIÈRE :</span>
                      <span className="text-right max-w-[200px]">{activeArtwork.materials}</span>
                    </p>
                    <hr className="border-stone-800" />
                    <p className="flex justify-between">
                      <span className="text-stone-500">DIMENSIONS :</span>
                      <span>{activeArtwork.dimensions}</span>
                    </p>
                    <hr className="border-stone-800" />
                    <p className="flex justify-between">
                      <span className="text-stone-500">STATUS CESSION :</span>
                      <span className="uppercase text-bronze-accent">{activeArtwork.status}</span>
                    </p>
                    <hr className="border-stone-800" />
                    <p className="flex justify-between">
                      <span className="text-stone-500">ÉVALUATION :</span>
                      <span className="text-stone-beige font-semibold">{activeArtwork.priceCategory}</span>
                    </p>
                  </div>

                  {/* Intention narrative description */}
                  <div className="space-y-4">
                    <p className="font-sans text-stone-300 text-sm font-light leading-relaxed">
                      {activeArtwork.description}
                    </p>
                    <div className="p-4 rounded-none bg-stone-950/60 border-l border-bronze-accent">
                      <p className="font-serif text-xs italic text-stone-400 font-light leading-relaxed">
                        Note d'artiste : "{activeArtwork.aestheticNote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reservation Inquiry Form */}
                <div className="border-t border-stone-800 pt-6">
                  <h4 className="font-serif text-lg text-stone-beige font-light mb-4 flex items-center gap-2">
                    <MessageSquareCode className="w-4 h-4 text-bronze-accent" />
                    Accompagnement d'Acquisition
                  </h4>

                  {inquirySent ? (
                    <div className="p-4 bg-stone-900 border border-bronze-accent/30 text-xs text-bronze-accent font-mono">
                      Requête enregistrée. Le directeur de l'atelier établira une liaison confidentielle sous 24h avec le protocole d'acquisition en vigueur.
                    </div>
                  ) : (
                    <form onSubmit={submitInquiry} className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          placeholder="Nom complet"
                          value={inquiryName}
                          onChange={(e) => setInquiryName(e.target.value)}
                          className="w-full bg-stone-900 border border-stone-800 px-3 py-2 text-xs font-sans text-stone-100 placeholder-stone-500 focus:outline-none focus:border-bronze-accent"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Adresse Email"
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          className="w-full bg-stone-900 border border-stone-800 px-3 py-2 text-xs font-sans text-stone-100 placeholder-stone-500 focus:outline-none focus:border-bronze-accent"
                        />
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Une question technique ou une demande d'écrin sur mesure ?"
                        value={inquiryNote}
                        onChange={(e) => setInquiryNote(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-800 p-3 text-xs font-sans text-stone-100 placeholder-stone-500 focus:outline-none focus:border-bronze-accent resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-bronze-accent text-charcoal-deep font-sans text-xs uppercase tracking-widest font-semibold hover:bg-stone-beige transition-colors duration-300"
                      >
                        Solliciter des Informations d'Acquisition
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
