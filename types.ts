export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: 'FAVORITO' | 'SPICY' | 'VEGAN';
  image?: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  shortName?: string;
  description?: string;
  items: MenuItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  highlightDish?: string;
}

export interface HighlightCard {
  id: string;
  title: string;
  japaneseTitle: string;
  description: string;
  image: string;
  tag: string;
  categoryId: string;
}
