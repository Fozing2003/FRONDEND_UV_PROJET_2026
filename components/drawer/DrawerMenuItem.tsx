// components/drawer/DrawerMenuItem.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { DrawerMenuItemProps } from '@/types/drawer.types';
import Colors from '@/constants/colors';
import { BORDER_RADIUS, SHADOWS, SPACING, ICON_SIZE } from '@/constants/theme';
import { DrawerLabel } from './DrawerLabel';

export const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({ 
  item, 
  isActive, 
  onPress 
}) => {
  const IconComponent = item.iconSet;
  const iconColor = isActive ? Colors.primary : Colors.textSecondary;

  // Composant label personnalisé avec icône
  const CustomLabel = () => (
    <View style={styles.labelContainer}>
      <IconComponent name={item.icon as any} size={ICON_SIZE.md} color={iconColor} />
      <View style={styles.labelTextContainer}>
        <DrawerLabel 
          label={item.label} 
          focused={isActive}
        />
      </View>
    </View>
  );

  return (
    <DrawerItem
      label={CustomLabel}
      icon={() => null}
      onPress={onPress}
      focused={isActive}
      activeTintColor={Colors.primary}
      inactiveTintColor={Colors.textSecondary}
      style={[
        styles.drawerItem,
        isActive && styles.activeDrawerItem
      ]}
    />
  );
};

// ✅ SÉPAREZ LES STYLES PAR TYPE
const styles = StyleSheet.create({
  // Styles pour le DrawerItem (ViewStyle)
  drawerItem: {
    borderRadius: BORDER_RADIUS.md,
    marginHorizontal: SPACING.sm,
    marginVertical: 3,
  } as const,  // ← Force le type ViewStyle
  
  // Styles pour le DrawerItem actif (ViewStyle)
  activeDrawerItem: {
    backgroundColor: Colors.backgroundActive,
    ...SHADOWS.small,
  } as const,
  
  // Styles pour le conteneur du label (ViewStyle)
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  } as const,
  
  // Styles pour le conteneur du texte (ViewStyle)
  labelTextContainer: {
    flex: 1,
    marginLeft: SPACING.iconTextGap,
  } as const,

  chevron: {
    marginRight: -5,  // ← NÉGATIF pour coller au bord
    // marginRight: -15, // ← encore plus collé
    // marginRight: 0,   // ← position normale
  },

});