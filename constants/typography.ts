// src/constants/typography.ts

// TAILLES DE POLICE CENTRALISÉES
export const FONT_SIZE = {
  // Tailles pour les textes
  xs: 12,      //  Email dans le drawer, date, métadonnées
  sm: 14,      // Items du menu (Home, Products...), labels
  md: 16,      // Descriptions, paragraphes
  lg: 18,      // Titres de sections (Menu, Sidebar)
  xl: 20,      // 	Nom de l'utilisateur dans l'en-tête
  xxl: 24,     // Titre de l'écran, page title
  
  // Tailles spécifiques par usage (plus explicite)
  menuItem: 14,      // Items du drawer (Home, Products...)
  userName: 17,      // Nom dans l'en-tête
  userEmail: 12,     // Email dans l'en-tête
  sectionTitle: 14,  // Titres de section (Menu, Sidebar)
};

// GRAISSES DE POLICE
export const FONT_WEIGHT = {
  regular: '400',
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700',
};

// TAILLES D'ICÔNES
export const ICON_SIZE = {
  xs: 14,      // Très petite (flèches)
  sm: 16,      // Petite (icônes secondaires)
  md: 22,      // Moyenne (icônes de menu)
  lg: 22,      // Grande (icônes principales)
  xl: 24,      // Très grande
};