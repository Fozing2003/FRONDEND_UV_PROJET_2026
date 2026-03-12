// components/drawer/ThemeToggle.tsx
import Colors from '@/constants/colors';
import { SPACING } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: (value: boolean) => void;
}
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => (
  <View style={styles.themeContainer}>
    <Text style={styles.themeLabel}>Color theme</Text>
    
  </View>
);

const styles = StyleSheet.create({
  themeContainer: {
    marginBottom: SPACING.md,
  },
  themeLabel: {
    fontSize: 16,
    color: Colors.text,  // Utilise textLight pour le label de la section
    marginBottom: SPACING.sm,
    fontWeight: '500',
  },
  darkModeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: SPACING.sm,
  },
  darkModeText: {
    fontSize: 14,
    color: Colors.textSecondary,  // Utilise textSecondary pour le texte du switch
  },
});