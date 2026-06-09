/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Exhibition } from '../types';

export const exhibitions: Exhibition[] = [
  {
    id: 'exh-01',
    title: 'Matière Vibrante : Entre Ciel et Pierre',
    location: 'Galerie de l\'Œil, Place des Vosges, Paris III',
    startDate: '12 Septembre 2026',
    endDate: '28 Octobre 2026',
    description: 'Une exposition personnelle d\'envergure présentant vingt-quatre créations inédites à l\'intersection de la sculpture monumentale et de la mosaïque d\'art murale. Une exploration poétique de la profondeur minérale française.',
    imageUrl: 'https://images.unsplash.com/photo-1595121226040-3ee7aa892694?q=80&w=1000',
    status: 'prochain',
    type: 'Exposition Personnelle'
  },
  {
    id: 'exh-02',
    title: 'L\'Esprit du Geste : Dialogue des Savoir-Faire',
    location: 'Pavillon des Métiers d\'Art Résonances, Strasbourg',
    startDate: '15 Novembre 2026',
    endDate: '22 Novembre 2026',
    description: 'Une réunion sélective d\'artisans d\'art français d\'exception. L\'Atelier y exposera de nouvelles pièces de sculpture sur roche calcaire calcinée et des parures de bijoux sculptées fusionnant métaux rares et pierres du terroir.',
    imageUrl: 'https://images.unsplash.com/photo-1601887389937-0b02c26b6c3c?q=80&w=1000',
    status: 'en_cours',
    type: 'Salon d\'Art'
  },
  {
    id: 'exh-03',
    title: 'Cabinet de Curiosités : Micro-Monolithes',
    location: 'L\'Espace Privé de l\'Atelier, Provence-Alpes-Côte d\'Azur',
    startDate: '05 Mai 2026',
    endDate: '25 Juin 2026',
    description: 'Présentation intime et confidentielle au sein de notre atelier de création historique. Un parcours dédié aux œuvres miniatures de mosaïque de marbre et à la collection exclusive de bijoux d\'art asymétriques.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000',
    status: 'archive',
    type: 'Exposition Personnelle'
  }
];
