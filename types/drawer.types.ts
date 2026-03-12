// types/drawer.types.ts
import { ComponentType } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';

// Types pour les icônes
export type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];
export type FeatherName = React.ComponentProps<typeof Feather>['name'];
export type IconSet = typeof Ionicons | typeof Feather;

// Types pour les routes de l'application
export type AppRoutes = 
  | '/(tabs)/home'
  | '/(tabs)/categories/Categories'
  | '/(tabs)/components'
  | '/(tabs)/pages'
  | '/(tabs)/featured'
  | '/(tabs)/wishlist/Wishlist'
  | '/(tabs)/orders'
  | '/(tabs)/cart'
  | '/(tabs)/profile/Profile'
  | '/(tabs)/women';

// Interface UNIQUE pour les items du menu
export interface MenuItem {
  label: string;
  icon: IoniconsName | FeatherName;
  iconSet: IconSet;
  route: AppRoutes;  // Maintenant obligatoire et typé
  action?: 'logout' | 'navigation';
}

// Props pour l'en-tête
export interface DrawerHeaderProps {
  name: string;
  email: string;
  initials: string;
}

// Props pour un item de menu
export interface DrawerMenuItemProps {
  item: MenuItem;
  isActive: boolean;
  onPress: () => void;
}

// Props pour une section
export interface DrawerSectionProps {
  title: string;
  children: React.ReactNode;
}

// Props pour le label
export interface DrawerLabelProps {
  label: string;
  focused?: boolean;
  color?: string;
  showChevron?: boolean;
}