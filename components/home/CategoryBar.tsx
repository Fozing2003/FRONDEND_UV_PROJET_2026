import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '@/constants/colors';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'men', label: 'Men' },
  { id: 'tshirt', label: 'T-Shirt' },
  { id: 'women', label: 'Women' },
  { id: 'jacket', label: 'Jacket' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'accessories', label: 'Accessories' },
];

interface CategoryBarProps {
  onSelectCategory?: (categoryId: string) => void;
  selectedCategory?: string;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({ 
  onSelectCategory,
  selectedCategory: propSelectedCategory 
}) => {
  const [internalSelected, setInternalSelected] = useState('all');
  
  // Utilise la prop si fournie, sinon l'état interne
  const selected = propSelectedCategory ?? internalSelected;

  const handleSelect = (categoryId: string) => {
    setInternalSelected(categoryId);
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryItem,
              selected === category.id && styles.categoryItemActive
            ]}
            onPress={() => handleSelect(category.id)}
          >
            <Text style={[
              styles.categoryText,
              selected === category.id && styles.categoryTextActive
            ]}>
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  categoryItemActive: {
    backgroundColor: Colors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
  },
  categoryTextActive: {
    color: '#fff',
  },
});