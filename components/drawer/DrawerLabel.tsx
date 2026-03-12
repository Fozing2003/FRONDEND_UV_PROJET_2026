// components/drawer/DrawerLabel.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerLabelProps } from '@/types/drawer.types';
import Colors from '@/constants/colors';  // Import mis à jour
import { FONT_SIZE, FONT_WEIGHT, ICON_SIZE } from '@/constants/theme'; // Import des constantes de thème

export const DrawerLabel: React.FC<DrawerLabelProps> = ({ 
  label, 
  focused, 
  color,
  showChevron = true 
}) => (
  <View style={styles.labelContainer}>
    <Text style={[
      styles.labelText, 

      { color: color || (focused ? Colors.primary : Colors.text) }  // Utilise vos couleurs
    ]}>
      {label}
    </Text>
    {showChevron && (
      <Ionicons name="chevron-forward" size={ICON_SIZE.xs} color={Colors.textLight} />  // Utilise textLight
    )}
  </View>
);

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginLeft: -10,
  },
  labelText: {
    fontSize: FONT_SIZE.menuItem,  // Utilise la constante de taille de police
    fontWeight: FONT_WEIGHT.medium,
  },

   chevron: {
    marginLeft: 0,      // ← RÉDUIT L'ESPACE À GAUCHE
    marginRight:0,     // ← RÉDUIT L'ESPACE À DROITE
    // Ou utilisez des valeurs négatives pour rapprocher
    // marginRight: -5,  // ← rapproche du bord
    // marginLeft: -5,   // ← rapproche du texte
  },
});