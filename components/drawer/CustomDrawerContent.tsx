// components/drawer/CustomDrawerContent.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useRouter, Href } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerHeader } from './DrawerHeader';
import { DrawerMenuItem } from './DrawerMenuItem';
import { DrawerSection } from './DrawerSection';
import { ThemeToggle } from './ThemeToggle';
import { DRAWER_MENU_ITEMS, USER_INFO } from '@/constants/navigation';
import { SPACING } from '@/constants/theme';
import Colors from '@/constants/colors';
import { MenuItem } from '@/types/drawer.types';

export const CustomDrawerContent: React.FC<any> = (props) => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeRoute, setActiveRoute] = useState('Home');
  const insets = useSafeAreaInsets();

  const handleNavigation = (item: MenuItem) => {
    if (item.action === 'logout') {
      console.log('Logout');
      return;
    }
    
    setActiveRoute(item.label);
    router.push(item.route as Href);
    props.navigation.closeDrawer();
  };

  // ✅ VERSION FINALE AVEC SAFE AREAS POUR HAUT ET BAS
  return (
    <View 
      style={[
        styles.container,
        { 
          paddingTop: insets.top,      // ← PROTÈGE LE HAUT (heure, batterie)
          paddingBottom: insets.bottom, // ← PROTÈGE LE BAS (barre de navigation)
          
        }
      ]}
    >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <DrawerHeader
          name={USER_INFO.name}
          email={USER_INFO.email}
          initials={USER_INFO.initials}
        />

        {DRAWER_MENU_ITEMS.map((item) => (
          <DrawerMenuItem
            key={item.label}
            item={item}
            isActive={activeRoute === item.label}
            onPress={() => handleNavigation(item)}
          />
        ))}

        <DrawerSection title="">
          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggle={setIsDarkMode}
          />
        </DrawerSection>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  scrollContent: {
    paddingBottom: SPACING.lg,
    paddingRight: 0,          // ← FLÈCHES COLLÉES AU BORD
    paddingLeft: SPACING.sm,   // ← ESPACE À GAUCHE
    flexGrow: 1,
  },
});