import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '@/constants/colors';

interface Props {
  title: string;
  onSeeMore?: () => void;
}

export const SectionHeader = ({ title, onSeeMore }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={onSeeMore}>
      <Text style={styles.seeMore}>See more</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    color: Colors.primary,
    fontWeight: '500',
  },
});