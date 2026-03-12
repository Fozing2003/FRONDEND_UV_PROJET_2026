// constants/navigation.ts
import { Ionicons, Feather } from '@expo/vector-icons';
import { MenuItem } from '@/types/drawer.types';

export const USER_INFO = {
  name: 'John Doe',
  email: 'example@gmail.com',
  initials: 'JD',
};

// Tous les items ont maintenant une route obligatoire
export const DRAWER_MENU_ITEMS: MenuItem[] = [
  { 
    label: 'Home', 
    icon: 'home-outline',
    iconSet: Ionicons, 
    route: '/(tabs)/home' 
  },
  { 
    label: 'Products', 
    icon: 'layers',
    iconSet: Feather, 
    route: '/(tabs)/categories/Categories' 
  },
  { 
    label: 'Components', 
    icon: 'apps-outline',
    iconSet: Ionicons, 
    route: '/(tabs)/components' 
  },
  { 
    label: 'Pages', 
    icon: 'document-text-outline',
    iconSet: Ionicons, 
    route: '/(tabs)/pages' 
  },
  { 
    label: 'Featured', 
    icon: 'star-outline',
    iconSet: Ionicons, 
    route: '/(tabs)/featured' 
  },
  { 
    label: 'Wishlist', 
    icon: 'heart-outline',
    iconSet: Ionicons, 
    route: '/(tabs)/wishlist/Wishlist' 
  },
  { 
    label: 'Orders', 
    icon: 'cart-outline',
    iconSet: Ionicons, 
    route: '/(tabs)/orders' 
  },
  { 
    label: 'My Cart', 
    icon: 'basket-outline',
    iconSet: Ionicons, 
    route: '/(tabs)/cart' 
  },
  { 
    label: 'Profile', 
    icon: 'person-outline',
    iconSet: Ionicons, 
    route: '/(tabs)/profile/Profile' 
  },
  { 
    label: 'Logout', 
    icon: 'log-out-outline',
    iconSet: Ionicons, 
    route: '/(tabs)/home', // Route par défaut pour logout
    action: 'logout'
  },
];