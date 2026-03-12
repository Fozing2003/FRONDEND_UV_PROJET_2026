// components/drawer/DrawerSection.tsx
import Colors from '@/constants/colors';
import { SPACING } from '@/constants/theme';
import { DrawerSectionProps } from '@/types/drawer.types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const DrawerSection: React.FC<DrawerSectionProps> = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  section: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.border,
    marginTop: SPACING.sm,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textLight,  // Utilise textLight pour les titres de section
    marginBottom: SPACING.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});