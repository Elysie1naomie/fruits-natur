import { Injectable, signal, computed } from '@angular/core';

export interface Fruit {
  id: string;
  nom: string;
  emoji: string;
  couleur: string;
  description: string;
  bienfaits: string[];
  saison: string;
}

export interface Marque {
  id: string;
  nom: string;
  slogan: string;
  fruit: string;
  couleur: string;
  emoji: string;
  description: string;
  thumbnail: string;
}

export interface Realisation {
  id: number;
  titre: string;
  description: string;
  image: string;
  categorie: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {

  readonly fruits = signal<Fruit[]>([
    {
      id: 'ananas', nom: 'Ananas', emoji: '🍍', couleur: '#F59E0B',
      description: 'Le roi des fruits tropicaux, sucré et acidulé à la fois.',
      bienfaits: ['Riche en vitamine C', 'Anti-inflammatoire', 'Aide à la digestion'],
      saison: 'Toute l\'année',
    },
    {
      id: 'pasteque', nom: 'Pastèque', emoji: '🍉', couleur: '#EF4444',
      description: 'Fraîcheur absolue, hydratation maximale sous le soleil.',
      bienfaits: ['99% d\'eau', 'Riche en lycopène', 'Rafraîchissant naturel'],
      saison: 'Été',
    },
    {
      id: 'mangue', nom: 'Mangue', emoji: '🥭', couleur: '#F97316',
      description: 'La reine des fruits tropicaux, douce et parfumée.',
      bienfaits: ['Vitamine A', 'Antioxydants puissants', 'Boost d\'énergie'],
      saison: 'Printemps - Été',
    },
    {
      id: 'orange', nom: 'Orange', emoji: '🍊', couleur: '#FB923C',
      description: 'L\'agrume classique, vitaminé et tonifiant.',
      bienfaits: ['Vitamine C', 'Renforce l\'immunité', 'Énergie naturelle'],
      saison: 'Hiver - Printemps',
    },
    {
      id: 'citron', nom: 'Citron', emoji: '🍋', couleur: '#EAB308',
      description: 'Acidulé et détoxifiant, le citron purifie et revitalise.',
      bienfaits: ['Détoxifiant', 'Alcalinisant', 'Antibactérien'],
      saison: 'Toute l\'année',
    },
    {
      id: 'fraise', nom: 'Fraise', emoji: '🍓', couleur: '#EC4899',
      description: 'Douce et parfumée, la fraise est le symbole du printemps.',
      bienfaits: ['Antioxydants', 'Faible en calories', 'Riche en fibres'],
      saison: 'Printemps',
    },
  ]);

  readonly marques = signal<Marque[]>([
    {
      id: 'anaju', nom: 'AnaJu', slogan: 'Saveur Ananas Exotique', fruit: 'Ananas',
      couleur: '#F59E0B', emoji: '🍍',
      description: 'AnaJu capture l\'essence pure de l\'ananas tropical. Chaque gorgée vous transporte sous les palmiers avec une fraîcheur incomparable et un goût authentique.',
      thumbnail: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80',
    },
    {
      id: 'pastafresh', nom: 'PastaFresh', slogan: 'Fraîcheur Pastèque', fruit: 'Pastèque',
      couleur: '#EF4444', emoji: '🍉',
      description: 'PastaFresh est la boisson de l\'été par excellence. Pastèque fraîchement pressée pour une hydratation naturelle et délicieuse qui désaltère instantanément.',
      thumbnail: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&q=80',
    },
    {
      id: 'mangodelice', nom: 'Mangodélice', slogan: 'Délice Mangue Tropical', fruit: 'Mangue',
      couleur: '#F97316', emoji: '🥭',
      description: 'Mangodélice est une explosion de saveurs tropicales. La mangue à son meilleur, pressée avec amour pour un résultat exceptionnel qui éveille les sens.',
      thumbnail: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80',
    },
  ]);

  readonly realisations = signal<Realisation[]>([
    { id: 1, titre: 'Lancement AnaJu', description: '50 000 bouteilles distribuées lors de notre campagne nationale de lancement.', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80', categorie: 'Lancement' },
    { id: 2, titre: 'Festival des Jus 2024', description: 'Présence au plus grand festival de boissons naturelles d\'Afrique de l\'Ouest.', image: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600&q=80', categorie: 'Événement' },
    { id: 3, titre: 'Partenariat GreenMarket', description: '200 points de vente dans les supermarchés bio partenaires à travers le pays.', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80', categorie: 'Distribution' },
    { id: 4, titre: 'Certification Bio', description: 'Obtention de la certification 100% biologique pour toutes nos marques.', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80', categorie: 'Certification' },
    { id: 5, titre: 'Mangodélice Premium', description: 'Nouvelle gamme premium avec des mangues sélectionnées à la main par nos experts.', image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80', categorie: 'Produit' },
    { id: 6, titre: 'Impact Social 2024', description: '500 agriculteurs locaux soutenus dans notre chaîne d\'approvisionnement durable.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80', categorie: 'Social' },
  ]);

  readonly marquesCount = computed(() => this.marques().length);
  readonly fruitsCount = computed(() => this.fruits().length);
}
