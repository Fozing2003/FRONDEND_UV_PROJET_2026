// components/drawer/CustomDrawerItem.tsx
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import Colors from '@/constants/colors';
import { BORDER_RADIUS, SHADOWS, SPACING } from '@/constants/theme';

// Types pour les icônes supportées
type IconLibrary = typeof Ionicons | typeof Feather;
type IconName = string; // On accepte toutes les chaînes pour les icônes

interface CustomDrawerItemProps {
  label: string;
  icon: {
    name: IconName;
    library: IconLibrary;
  };
  isActive?: boolean;
  onPress: () => void;
  showChevron?: boolean;
}

export const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({
  label,
  icon,
  isActive = false,
  onPress,
  showChevron = true,
}) => {
  const IconComponent = icon.library;
  const iconColor = isActive ? Colors.primary : Colors.textSecondary;
  const textColor = isActive ? Colors.primary : Colors.text;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isActive && styles.activeContainer,
      ]}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <IconComponent name={icon.name as any} size={22} color={iconColor} />
          <Text style={[styles.label, { color: textColor }]}>
            {label}
          </Text>
        </View>
        {showChevron && (
          <Ionicons name="chevron-forward" size={16} color={Colors.textLight} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    marginHorizontal: SPACING.sm,
    marginVertical: 2,
    borderRadius: BORDER_RADIUS.md,
  },
  activeContainer: {
    backgroundColor: Colors.backgroundActive,
    ...SHADOWS.small,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: SPACING.lg,
  },
});