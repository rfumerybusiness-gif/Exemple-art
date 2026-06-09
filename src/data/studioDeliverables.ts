/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuditTopic, WireframeBlock } from '../types';

export const auditTopics: AuditTopic[] = [
  {
    id: 'aud-01',
    title: 'Perception Locale vs. Signature de Prestige',
    weakness: 'Présentation de l\'atelier comme une quincaillerie d\'art locale ou une petite boutique régionale de souvenirs.',
    consequence: 'Baisse dramatique de la valeur perçue. Incapacité d\'adresser des collectionneurs d\'art internationaux, architectes d\'intérieur prestigieux ou maisons de luxe.',
    solutionAfter: 'Transformation en signature d\'auteur française. Positionnement muséal s\'appuyant sur des textes littéraires, des typographies éditoriales inspirées de l\'Ancien Régime et l\'emploi systématique du mot  "Matière" et "Le Geste".',
    impactValue: '+ 350% de valeur perçue immédiate'
  },
  {
    id: 'aud-02',
    title: 'Le Geste Absent (Storytelling Vide)',
    weakness: 'Montrer le produit fini sans jamais révéler les mains de l\'artisan, ses outils séculaires, ni la matière brute d\'excavation.',
    consequence: 'Le visiteur perçoit l\'œuvre comme un article industriel ou de loisir créatif standard. Le prix est déconnecté du travail réel.',
    solutionAfter: 'Création de la section immersive "Le Geste", découpant le voyage minéral de la carrière au salon du collectionneur. Valorisation de la marteline, de la gradine de sculpteur et du temps long de fabrication.',
    impactValue: 'Justification des prix d\'art (Bespoke premium)'
  },
  {
    id: 'aud-03',
    title: 'Galerie Produit Froide vs. Scénographie Muséale',
    weakness: 'Vues en grille carrée serrée, fonds de photos hétérogènes, fiches types "e-commerce" froides avec des boutons "Ajouter au panier".',
    consequence: 'Vulgarisation de la démarche créative. On vend un produit, on ne collectionne pas une œuvre.',
    solutionAfter: 'Création d\'un écran type "Lightroom de Galerie" en fond sombre et mat. Présentation en format asymétrique (Masonry d\'art), notices détaillant l\'intention esthétique et filtres intelligents par matière dominante.',
    impactValue: 'Expérience d\'achat exclusive, digne de la Place des Vosges'
  },
  {
    id: 'aud-04',
    title: 'Protocole de Commande Neutre',
    weakness: 'Un simple champ adresse email ou un formulaire générique impersonnel de contact sans structure d\'accompagnement direct.',
    consequence: 'Les clients aisés ou professionnels (designers d\'hotels de luxe) abandonnent par manque de rigueur et d\'attention.',
    solutionAfter: 'Création d\'une section "Cabinet de Commande" décrivant un protocole en 4 étapes rituelles. Intégration d\'un questionnaire de commande d\'œuvre sur-mesure digne des plus grands ateliers de Haute Couture.',
    impactValue: 'Capture qualifiée de projets haute facture complexes'
  }
];

export const sitemapNodes = [
  {
    title: '1. Le Front-Office Immersif (Sitemap)',
    children: [
      { name: 'Le Manifeste d\'Entrée (Hero)', desc: 'Tension dramatique, focus textural ralenti ou gravure monumentale. Déclaration de posture d\'auteur.' },
      { name: 'L\'Origine & L\'Auteur (L\'Artiste)', desc: 'Storytelling littéraire, portrait en clair-obscur, note d\'intention créative de l\'artisan-designer.' },
      { name: 'Le Triptyque des Univers', desc: 'Salles virtuelles distinctes pour la Mosaïque d\'Art, la Sculpture sur Calcaire/Marbre, et l\'Or & Joaillerie.' },
      { name: 'La Galerie du Collectionneur (Lightroom)', desc: 'Scénographie d\'art avec filtres par noble matériau, zoom de texture et statut de cession historique.' },
      { name: 'Le Geste Sacré (Chronos de Création)', desc: 'Chronologie des étapes d\'atelier, valorisant l\'outil ancien et le geste de la main de l\'artisan.' },
      { name: 'L\'Agenda Culturel (Expositions)', desc: 'Conversion d\'actualités en vernissages de musées d\'art contemporain avec adresses d\'exposition physiques.' },
      { name: 'Le Cabinet de Commande (Sur-Mesure)', desc: 'Processus d\'accompagnement architectural et artistique pas à pas pour les commandes privées.' },
      { name: 'La Note d\'Entretien (Contact)', desc: 'Formulaire de Haute Facture, carte géographique de l\'Atelier historique et coordonnées restreintes.' }
    ]
  },
  {
    title: '2. Spécification Technique Agence',
    children: [
      { name: 'Performance Core Web Vitals', desc: 'Optimisation du poids des médias, chargement différé progressif (lazy-loading), absence totale de requêtes tierces inutiles.' },
      { name: 'SEO Précision Sémantique', desc: 'Balisage Hn éditorial strict respectant les lexiques de prestige ("sculpture d\'art", "mosaïque byzantine", "haute parure").' },
      { name: 'Accessibilité Inclusive (Contrastes)', desc: 'Fonds blanc minéral (#FCFBFA) et beige grès (#F5F2EB) pour la lisibilité, contrastés par un noir de charbon (#161616).' }
    ]
  }
];

export const wireframeBlocks: WireframeBlock[] = [
  {
    id: 'wf-hero',
    sectionName: 'Entête & Manifeste Émotionnel (Hero)',
    structure: [
      { label: 'ZONE 01 : Top Nav Restreinte', details: 'Logo typographié Serif à gauche. Liens : Univers / Galerie / Le Geste / Commande. Signature à droite : "Atelier Certifié — Paris - Provence".' },
      { label: 'ZONE 02 : Image Texturale Immersive', details: 'Bandeau pleine hauteur (100vh). Overlay dégradé subtil beige/ardoise. Focus visuel : Plan macro de marbre de Carrare ou main guidant la marteline.' },
      { label: 'ZONE 03 : Bloc Typographique Centré', details: 'Accroche littéraire "Quand la matière devient émotion" (H1, Serif, 5vw) + Slogan descriptif minimaliste. Bouton A : "Explorer l\'Oeuvre" (Plein, contrasté), Bouton B : "L\'Atelier" (Bordure fine bronze).' }
    ]
  },
  {
    id: 'wf-univers',
    sectionName: 'Le Triptyque des Univers',
    structure: [
      { label: 'ZONE 01 : En-tête de Section Épurée', details: 'Grand espacement vertical (12rem). Label "01 / COLLECTIONS TEMPLES". Titre : "Trois territoires de création, une même âme."' },
      { label: 'ZONE 02 : Les Colonnes de Matière', details: 'Trois colonnes asymétriques interactives à largeur variable. Au survol, la colonne s\'élargit légèrement. Effet parallaxe discret sur l\'image interne.' },
      { label: 'ZONE 03 : Légende d\'Orfèvre', details: 'Sous chaque colonne : Nom de l\'univers (ex : Joaillerie de Pierre), citation de matière (ex : "Sodalite & Or brut") et lien éditorial.' }
    ]
  },
  {
    id: 'wf-gallery',
    sectionName: 'La Galerie du Collectionneur (Lightroom)',
    structure: [
      { label: 'ZONE 01 : Rail de Filtre Contemporain', details: 'Boutons de filtres textuels minimaux : "Tous", "Mosaïque d\'Art", "Sculpture", "Joaillerie". Indicateur discret du nombre de pièces sélectionnées.' },
      { label: 'ZONE 02 : Grille Asymétrique (Masonry)', details: 'Disposition décalée pour simuler l\'accrochage d\'une galerie parisienne. Chaque cadre dispose de marges de respiration généreuses pour laisser respirer l\'œuvre.' },
      { label: 'ZONE 03 : Panneau de Détails Intégré', details: 'Au clic sur une œuvre : Ouverture d\'une lightbox immersive avec description poétique de l\'intention de l\'auteur, dimensions, matériaux certifiés et bouton d\'option de réservation.' }
    ]
  }
];

export const designSystemInfo = {
  colors: [
    { name: 'Blanc Minéral', hex: '#FCFBFA', desc: 'Fond principal épuré, rappelle le calcaire d\'Anjou sec et le plâtre à modeler d\'atelier.', type: 'Light Mode Background', textTheme: 'text-charcoal-deep' },
    { name: 'Beige Pierre Naturelle', hex: '#F5F2EB', desc: 'Couleur organique chaleureuse, évoquant le grès d\'Ardèche, le travertin brossé et le lin brut.', type: 'Secondary Accent', textTheme: 'text-charcoal-deep' },
    { name: 'Slate Clay (Gris Ardoise)', hex: '#1F2421', desc: 'Gris vert crayeux, imitant le schiste argileux et les plans de travail patinés par le temps.', type: 'Decorative Border / Muted Slate', textTheme: 'text-white' },
    { name: 'Noir Profond (Onyx)', hex: '#161616', desc: 'Noir saturé mat d\'accrochage d\'art. Utilisé pour les textes d\'impact, la typographie fine et la galerie Lightroom.', type: 'Primary Text / Dark Lightroom Base', textTheme: 'text-white' },
    { name: 'Bronze Discret (Or Antique)', hex: '#C5A880', desc: 'Accent noble et intemporel rappelant la patine du laiton ou les reflets des mosaïques byzantines.', type: 'Interactive Highlight / Buttons', textTheme: 'text-charcoal-deep' }
  ],
  typography: {
    title: { font: 'Cormorant Garamond (Serif)', weight: 'Light / Medium', usage: 'Titres majeurs, manifestes littéraires, en-têtes de collections. Favorise l\'élégance historique et la stature muséale.' },
    body: { font: 'Inter (Sans-serif)', weight: 'Light / Regular (300/400)', usage: 'Paragraphes, fiches techniques de sculptures, descriptions d\'œuvres. Optimise la lisibilité à l\'écran et le confort de lecture contemporain.' },
    data: { font: 'JetBrains Mono (Monospace)', weight: 'Medium', usage: 'Numéros de sections ("01 / L\'ORIGINE"), dimensions, statuts d\'œuvres ("DISPONIBLE"), caractéristiques géologiques. Crée un repère technique rigoureux et luxueux sans fioritures.' }
  },
  spacing: {
    containerMaxWidth: '1280px (Tailwind max-w-7xl)',
    editorialPadding: 'py-24 to py-36 (Espaces de respiration majeurs d\'agence)',
    touchTargets: 'Min 48px pour tous les éléments cliquables desktop et mobile'
  }
};
