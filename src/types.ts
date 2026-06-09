/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Artwork {
  id: string;
  title: string;
  category: 'mosaic' | 'sculpture' | 'jewelry';
  image: string;
  materials: string;
  dimensions: string;
  year: string;
  description: string;
  aestheticNote: string;
  status: 'disponible' | 'acquis' | 'exposition';
  priceCategory: string; // "Sur demande" or price range approximation for luxury feel
}

export interface Exhibition {
  id: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
  status: 'prochain' | 'en_cours' | 'archive';
  type: 'Exposition Personnelle' | 'Exposition Collective' | 'Salon d\'Art';
}

export interface GesteStep {
  number: string;
  title: string;
  description: string;
  materialFocus: string;
  quote: string;
  detailImage: string;
}

export interface AuditTopic {
  id: string;
  title: string;
  weakness: string;
  consequence: string;
  solutionAfter: string;
  impactValue: string;
}

export interface WireframeBlock {
  id: string;
  sectionName: string;
  structure: {
    label: string;
    details: string;
  }[];
}
