/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Feather, Compass, CompassIcon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onToggleStudio: () => void;
  isStudioActive: boolean;
}

export default function Header({ onToggleStudio, isStudioActive }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'L\'Artiste', href: '#artiste' },
    { name: 'Les Univers', href: '#univers' },
    { name: 'Galerie d\'Œuvres', href: '#galerie' },
    { name: 'Le Geste', href: '#geste' },
    { name: 'Expositions', href: '#expositions' },
    { name: 'Commandes', href: '#commandes' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ${
          scrolled
            ? 'bg-mineral-white/90 backdrop-blur-md border-b border-stone-beige py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand / Signature */}
          <a href="#" className="group flex flex-col justify-start">
            <span className="font-serif text-lg md:text-xl font-medium tracking-wide uppercase text-charcoal-deep transition-colors duration-500">
              Atelier Art & Artisanat
            </span>
            <span className="font-mono text-[9px] text-bronze-dark tracking-[0.2em] uppercase font-medium mt-0.5">
              Savoir-Faire Français d'Excellence
            </span>
          </a>

          {/* Desktop Right Nav (Editorial Style) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-xs uppercase tracking-widest text-charcoal-deep/75 hover:text-bronze-dark transition-colors duration-300 font-medium py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-bronze-accent hover:after:w-full after:transition-all after:duration-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Special Action: Studio Mode (Delivery & Specification Toggle) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="studio-toggle-btn"
              onClick={onToggleStudio}
              className={`flex items-center space-x-2 px-4 py-2 border rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-500 ${
                isStudioActive
                  ? 'bg-charcoal-deep text-stone-beige border-charcoal-deep shadow-sm'
                  : 'bg-transparent border-bronze-accent/40 text-charcoal-deep hover:bg-stone-beige hover:border-bronze-accent'
              }`}
            >
              <span className="relative flex h-1.5 w-1.5 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-bronze-dark"></span>
              </span>
              <span>{isStudioActive ? 'Retourner à l\'Atelier' : 'Cabinet d\'Audit & Design'}</span>
              <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onToggleStudio}
              className="px-2.5 py-1.5 rounded-full border border-bronze-accent/30 font-mono text-[9px] uppercase tracking-wider text-bronze-dark"
            >
              {isStudioActive ? 'Œuvres' : 'Audit'}
            </button>
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-charcoal-deep hover:text-bronze-dark transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu Overlay (Polène/Aesop inspired) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-mineral-white z-30 flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden grain-overlay"
          >
            <div className="flex flex-col space-y-6">
              <span className="font-mono text-[10px] text-bronze-dark tracking-[0.25em] uppercase font-semibold">
                — EXPLORATION ARCHITECTURALE
              </span>
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.6 }}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-3xl font-light text-charcoal-deep hover:text-bronze-dark tracking-wide block transition-colors duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer Area inside Mobile Drawer */}
            <div className="border-t border-stone-beige pt-6 flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-mono text-[10px] text-stone-500">ATELIER ARTISANAL</p>
                  <p className="font-sans text-xs text-charcoal-deep font-medium mt-1">Place d'Armes, 13000 PACA, France</p>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onToggleStudio();
                  }}
                  className="px-4 py-2 border border-charcoal-deep bg-charcoal-deep text-stone-beige rounded-full font-mono text-[9px] uppercase tracking-widest"
                >
                  Audit & Wireframes
                </button>
              </div>
              <p className="font-mono text-[8px] text-stone-400 tracking-wider">
                © {new Date().getFullYear()} ATELIER ART & ARTISANAT. CRÉATION EXCLUSIVE HAUTE FACTURE.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
