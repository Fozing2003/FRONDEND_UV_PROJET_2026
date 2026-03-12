// src/constants/theme.ts
import Colors from "./colors";
import { FONT_SIZE, FONT_WEIGHT, ICON_SIZE } from "./typography"; // ← Import

// expose color constants under the name COLORS for consistency with older code
export const COLORS: typeof Colors = Colors;

export const SPACING = {
  xs: 15, // Espacement INTERNE (padding) des petits éléments comme les badges
  sm: 5, // Espacement INTERNE (padding) des éléments standards (boutons, items)
  md: 20, // Espacement INTERNE (padding) des conteneurs (cartes, sections)
  lg: 24, // Espacement EXTERNE (margin) entre les grandes sections
  xl: 15, // Espacement EXTERNE (margin) par rapport aux bords de l'écran
  iconTextGap: 25, // Espace ENTRE l'icône et le texte (marginLeft du texte)
};

export const BORDER_RADIUS = {
  sm: 4, // Coins arrondis des petits éléments (badges)
  md: 8, // Coins arrondis des éléments standards (DrawerItem, boutons)
  lg: 12, // Coins arrondis des grandes cartes
  xl: 16, // Coins arrondis des champs de texte
  round: 999, // Coins parfaitement ronds (avatars, points)
};

export const SHADOWS = {
  small: {
    // Ombre des éléments normaux (DrawerItem inactif)
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  medium: {
    // Ombre des éléments actifs (DrawerItem actif)
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 8,
  padding: 16,
  paddingLarge: 24,
};

export const FONTS = {
  h1: { fontSize: 28, fontWeight: "bold" } as const,
  h2: { fontSize: 24, fontWeight: "bold" } as const,
  h3: { fontSize: 20, fontWeight: "600" } as const,
  h4: { fontSize: 18, fontWeight: "600" } as const,
  body1: { fontSize: 16, fontWeight: "normal" } as const,
  body2: { fontSize: 14, fontWeight: "normal" } as const,
  body3: { fontSize: 12, fontWeight: "normal" } as const,
  caption: { fontSize: 10, fontWeight: "300" } as const,
} as const;

export { FONT_SIZE, FONT_WEIGHT, ICON_SIZE };
