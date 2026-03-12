// components/ui/Avatar.tsx
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { SPACING, BORDER_RADIUS } from '@/constants/theme';

// Définition des tailles possibles
const sizes = {
  small: 40,
  medium: 50,
  large: 65,
};

const fontSizes = {
  small: 16,
  medium: 18,
  large: 20,
};

interface AvatarProps {
  initials: string;           // Initiales à afficher (ex: "JD")
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  style?: ViewStyle;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  initials, 
  size = 'medium',
  backgroundColor = '#106b53',
  style 
}) => (
  <View style={[
    styles.avatar, 
    { 
      width: sizes[size] , 
      height: sizes[size] , 
      borderRadius: sizes[size] /4,  // rode les coins pour un cercle parfait
      backgroundColor 
    },
    style
  ]}>
    <Text style={[styles.avatarText, { fontSize: fontSizes[size] }]}>
      {initials}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});