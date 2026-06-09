/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ShieldCheck, ArrowRight, ClipboardList, Layers, Sliders, Palette, Zap, Sparkles, X, Heart, HelpCircle, Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { auditTopics, sitemapNodes, wireframeBlocks, designSystemInfo } from '../data/studioDeliverables';

interface StudioPanelProps {
  onClose: () => void;
}

type TabType = 'audit' | 'sitemap' | 'direction' | 'wireframes' | 'system';

export default function StudioPanel({ onClose }: StudioPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('audit');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2500);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      className="fixed top-0 right-0 h-full w-full lg:w-[680px] bg-charcoal-deep text-stone-beige z-50 shadow-2xl flex flex-col justify-between border-l border-stone-800 grain-overlay"
    >
      {/* Drawer Header Area */}
      <div className="p-8 border-b border-stone-850 flex items-center justify-between">
        <div>
          <span className="font-mono text-[9px] text-bronze-accent tracking-[0.3em] uppercase block">
            LIVRABLE EXCLUSIF CODIR • DIRECTION DE STRATÉGIE
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-beige mt-1">
            Chantier Refonte & Audit
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 text-stone-400 hover:text-white transition-colors cursor-pointer rounded-full bg-stone-900 border border-stone-800"
          aria-label="Fermer le panel"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Internal Navigation Tabs bar */}
      <div className="flex bg-stone-950 border-b border-stone-900 overflow-x-auto scrollbar-none scroll-smooth">
        {(
          [
            { id: 'audit', label: '1. Audit & Valeur', icon: ClipboardList },
            { id: 'sitemap', label: '2. Arborescence', icon: Layers },
            { id: 'direction', label: '3. Note Créative', icon: Sparkles },
            { id: 'wireframes', label: '4. Wireframes', icon: Sliders },
            { id: 'system', label: '5. Design System', icon: Palette },
          ] as const
        ).map((t) => {
          const IconComp = t.icon;
          const isActive = activeTab === t.id;

          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center space-x-2 px-5 py-4 font-mono text-[10px] uppercase tracking-wider relative whitespace-nowrap transition-colors duration-350 ${
                isActive ? 'text-bronze-accent' : 'text-stone-500 hover:text-stone-300'
              }`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span>{t.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-bronze-accent"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Content View with scroll support */}
      <div className="flex-1 p-8 overflow-y-auto space-y-8">
        
        {/* TAB 1: AUDIT & CRITICAL ANALYSIS */}
        {activeTab === 'audit' && (
          <div className="space-y-6">
            <div className="p-5 bg-charcoal-muted border border-stone-800 rounded-none space-y-3">
              <h3 className="font-serif text-lg text-stone-200 font-light flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-bronze-accent" />
                Pourquoi le site précédent bloquait-il la perception de valeur ?
              </h3>
              <p className="font-sans text-xs text-stone-400 leading-relaxed font-light">
                Les artisans d'art souffrent souvent d'un positionnement par défaut : ils sont référencés comme de petits commerçants locaux. Les clients de luxe (collectionneurs, cabinets d'architecture, hôteliers) n'attribuent aucun prestige s'ils ne voient pas un univers d'auteur.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <h4 className="font-mono text-[10px] text-stone-300 tracking-widest uppercase pb-2 border-b border-stone-850">
                CRITIQUES & DYSFONCTIONNEMENTS CIBLÉS
              </h4>
              <div className="space-y-6">
                {auditTopics.map((topic) => (
                  <div key={topic.id} className="p-4 bg-stone-950 border border-stone-900 space-y-3">
                    <p className="font-mono text-[9px] text-bronze-accent font-semibold uppercase">{topic.id} / AUDIT THÉMATIQUE</p>
                    <h5 className="font-serif text-lg text-stone-beige font-light">{topic.title}</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                      <div className="p-3 bg-red-950/20 border border-red-900/40 text-red-300 font-light space-y-1">
                        <span className="font-mono text-[9px] text-red-400 block tracking-wider">ÉTAT ORIGINAL (DÉGRADÉ) :</span>
                        <p>{topic.weakness}</p>
                        <p className="italic text-[11px] text-red-400/80 pt-1">Effet : {topic.consequence}</p>
                      </div>

                      <div className="p-3 bg-emerald-950/20 border border-emerald-900/40 text-emerald-300 font-light space-y-1">
                        <span className="font-mono text-[9px] text-emerald-400 block tracking-wider">RÉPONSE AGENCE (ATELIER PREMIUM) :</span>
                        <p>{topic.solutionAfter}</p>
                        <p className="font-mono text-[10px] text-bronze-accent pt-1 block">{topic.impactValue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ARBORESCENCE BLOCK */}
        {activeTab === 'sitemap' && (
          <div className="space-y-6">
            <p className="font-sans text-xs text-stone-400 leading-relaxed font-light">
              La nouvelle structure du site est repensée comme un parcours initiatique muséal. Le collectionneur est guidé de la contemplation à la commande confidentielle.
            </p>

            <div className="space-y-6">
              {sitemapNodes.map((node) => (
                <div key={node.title} className="space-y-3">
                  <h4 className="font-mono text-[10px] text-stone-300 tracking-widest uppercase pb-1.5 border-b border-stone-850">
                    {node.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {node.children.map((child) => (
                      <div key={child.name} className="p-3 bg-charcoal-muted border border-stone-900 text-xs font-sans">
                        <h5 className="font-serif text-sm text-stone-beige font-light">{child.name}</h5>
                        <p className="text-stone-500 font-light mt-1 leading-relaxed">{child.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CREATIVE DIRECTION NOTE */}
        {activeTab === 'direction' && (
          <div className="space-y-6 font-sans text-xs leading-relaxed font-light text-stone-450">
            <div className="p-6 bg-stone-950 border border-stone-900 space-y-6">
              <div>
                <span className="font-mono text-[9px] text-bronze-accent font-semibold uppercase block">— MANIFESTE CRÉATIF AGENCE —</span>
                <h3 className="font-serif text-2xl text-stone-beige font-light mt-1">« La Pierre, la Matière et le Geste »</h3>
              </div>
              
              <div className="space-y-4 font-light text-stone-400 text-xs">
                <p>
                  Ce site s'affranchit des grilles e-commerce saturées au profit d'une <strong className="text-stone-200">scénographie éditoriale d'art</strong>. Inspiré par les univers de marques cultes comme Aesop et Bang & Olufsen, nous installons un dialogue permanent entre la brutalité minérale sauvage et l'extrême noblesse du façonnage humain.
                </p>
                <p>
                  Le choix des couleurs se fait l'écho des ateliers de sculpteurs : pas de blanc pur aveuglant, mais des <strong className="text-stone-200">teintes calcaires d'Anjou, de travertin sec</strong>, contrastées par le charbon profond d'un Lightroom muséal d'exposition où chaque pièce d'art est magnifiée par la lumière rasante.
                </p>
                <p>
                  La typographie incarne ce dualisme : la rigueur et la modernité dénudée de l'écriture technique avec <strong className="text-stone-200">JetBrains Mono</strong> s'unissent à l'élégance poétique et souveraine de la Serif italienne <strong className="text-stone-200">Cormorant Garamond</strong>.
                </p>
              </div>

              <div className="p-4 bg-charcoal-muted border border-stone-850 flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-bronze-accent flex-shrink-0" />
                <span className="font-mono text-[10px] uppercase text-stone-300">
                  Postulat : "Chaque pixel doit justifier la stature d'un Maître d'Art français."
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WIREFRAMES INTERACTIVES DETAIL */}
        {activeTab === 'wireframes' && (
          <div className="space-y-6">
            <p className="font-sans text-xs text-stone-400 leading-relaxed font-light">
              Les structures de nos maquettes d'art suivent des règles strictes de tension géométrique et de respiration éditoriale :
            </p>

            <div className="space-y-6">
              {wireframeBlocks.map((block) => (
                <div key={block.id} className="p-4 bg-charcoal-muted border border-stone-900 space-y-3">
                  <span className="font-mono text-[9px] text-bronze-accent font-semibold uppercase">{block.id} / SPÉCIFICATIONS FILAIRE</span>
                  <h4 className="font-serif text-lg text-stone-beige font-light border-b border-stone-850 pb-2">{block.sectionName}</h4>
                  
                  <div className="space-y-3">
                    {block.structure.map((item, id) => (
                      <div key={id} className="pl-4 border-l border-stone-800 text-xs font-sans space-y-1">
                        <span className="font-mono font-medium text-stone-300 block">{item.label}</span>
                        <p className="text-stone-500 font-light">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: INTERACTIVE DESIGN SYSTEM */}
        {activeTab === 'system' && (
          <div className="space-y-6">
            
            {/* Color section with copy tool */}
            <div className="space-y-4">
              <h4 className="font-mono text-[10px] text-stone-300 tracking-widest uppercase pb-2 border-b border-stone-850">
                A. NUANCIER CONTEMPORAIN (INTERACTIF)
              </h4>
              <p className="font-sans text-xs text-stone-450 font-light">
                Cliquez sur un échantillon pour copier sa valeur hexadécimale dans votre presse-papiers technique.
              </p>
              
              <div className="space-y-3">
                {designSystemInfo.colors.map((color) => {
                  const isCopied = copiedHex === color.hex;

                  return (
                    <div
                      key={color.hex}
                      onClick={() => handleCopyHex(color.hex)}
                      className="p-4 bg-stone-950 border border-stone-900 flex items-center justify-between cursor-pointer group hover:border-bronze-accent transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Swatch circle */}
                        <div
                          className="w-10 h-10 border border-stone-800 flex items-center justify-center text-xs"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div>
                          <h5 className="font-serif text-md text-stone-beige font-light leading-snug">{color.name}</h5>
                          <span className="font-mono text-[9px] text-stone-500 uppercase">{color.type}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-stone-400 group-hover:text-white transition-colors">
                        <span className="font-mono text-[10px] tracking-widest uppercase font-semibold">{color.hex}</span>
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500 animate-bounce" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Typography Section */}
            <div className="space-y-4 pt-4">
              <h4 className="font-mono text-[10px] text-stone-300 tracking-widest uppercase pb-2 border-b border-stone-850">
                B. COMPORTEMENT TYPOGRAPHIQUE
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-charcoal-muted border border-stone-900 text-xs font-sans space-y-1">
                  <span className="font-mono text-bronze-accent font-semibold">Titre : {designSystemInfo.typography.title.font}</span>
                  <p className="text-stone-300 font-serif text-base italic font-light pt-1">« {designSystemInfo.typography.title.usage} »</p>
                </div>
                <div className="p-4 bg-charcoal-muted border border-stone-900 text-xs font-sans space-y-1">
                  <span className="font-mono text-bronze-accent font-semibold">Corps : {designSystemInfo.typography.body.font}</span>
                  <p className="text-stone-300 font-sans font-light pt-1">{designSystemInfo.typography.body.usage}</p>
                </div>
                <div className="p-4 bg-charcoal-muted border border-stone-900 text-xs font-sans space-y-1">
                  <span className="font-mono text-bronze-accent font-semibold">Données/Labels : {designSystemInfo.typography.data.font}</span>
                  <p className="text-stone-400 font-mono text-[10px] pt-1">{designSystemInfo.typography.data.usage}</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Drawer Footer Area */}
      <div className="p-6 bg-stone-950 border-t border-stone-900 text-center font-mono text-[8.5px] text-stone-500 tracking-widest uppercase">
        CONÇU AVEC AMOUR ET EXCELLENCE À MARNE-LA-VALLÉE EN MAI 2026. PROJET CERTIFIÉ PRÊT POUR PRODUCTION.
      </div>
    </motion.div>
  );
}
