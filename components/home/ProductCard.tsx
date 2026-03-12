import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '@/constants/colors';

interface Props {
  title: string;
  category: string;
  rating?: number;
  reviews?: number;
  description: string;
  
  oldPrice: number;
  newPrice: number;
  discount: string;
  onPress?: () => void;
}

export const ProductCard = ({
  title,
  category,
  description,
  oldPrice,
  newPrice,
  discount,
  onPress
}: Props) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.imagePlaceholder} />
    <View style={styles.badgeContainer}>
      <Text style={styles.discountBadge}>{discount} off</Text>
      <Text style={styles.saleBadge}>SALE</Text>
    </View>
    <Text style={styles.category}>{category}</Text>
    <Text style={styles.title} numberOfLines={2}>{title}</Text>
    <Text style={styles.description} numberOfLines={2}>{description}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.newPrice}>${newPrice.toFixed(2)}</Text>
      <Text style={styles.oldPrice}>${oldPrice.toFixed(2)}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  discountBadge: {
    backgroundColor: Colors.primary,
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
  },
  saleBadge: {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  category: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    fontSize: 11,
    color: '#999',
    marginBottom: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginRight: 6,
  },
  oldPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
});