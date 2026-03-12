// components/drawer/DrawerHeader.tsx
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Avatar } from '@/components/ui/Avatar';
import { DrawerHeaderProps } from '@/types/drawer.types';
import { SPACING } from '@/constants/theme';
import Colors from '@/constants/colors';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends DrawerHeaderProps {
  avatarSize?: 'small' | 'medium' | 'large';
  showBorder?: boolean;
}

export const DrawerHeader: React.FC<Props> = ({
  name,
  email,
  initials,
  avatarSize = 'medium',
  showBorder = true,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.header,
      !showBorder && styles.noBorder,
    ]}>
      <Avatar
        initials={initials}
        size={avatarSize}
        backgroundColor={Colors.primary}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail} numberOfLines={1}>
          {email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
header: {
    
    // paddingTop: SPACING.xl, ← SUPPRIMÉ
    
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
    marginBottom: SPACING.md,
    marginLeft: -4,
    marginRight: 5,
},
noBorder: {
    borderBottomWidth: 0,
},
profileInfo: {
    marginLeft: Platform.OS === 'ios' ? SPACING.md : SPACING.sm,
    flex: 1,
},
userName: {
    fontSize: FONT_SIZE.userName,
    fontWeight: FONT_WEIGHT.semibold,
    color: Colors.text,
},
userEmail: {
    fontSize: FONT_SIZE.userEmail,
    color: Colors.textSecondary,
    marginTop: 2,
},
});