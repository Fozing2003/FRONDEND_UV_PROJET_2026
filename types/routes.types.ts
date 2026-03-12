// src/types/routes.types.ts
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

export type DrawerRoute = {
  label: string;
  route: AppRoutes;
  icon: string;
  iconSet: any;
  action?: 'logout' | 'navigation';
};