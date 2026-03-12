import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ProductCard } from './ProductCard';
import { SectionHeader } from './SectionHeader';

interface Props {
  onSeeMore?: () => void;
  onProductPress?: (index: number) => void;
}

export const TrendingHorizontal: React.FC<Props> = ({ onSeeMore, onProductPress }) => {
  const trendingProducts = [1, 2, 3]; // Plus tard : données dynamiques

  return (
    <View style={styles.container}>
      <SectionHeader title="Trending Now" onSeeMore={onSeeMore} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {trendingProducts.map((_, index) => (
          <View key={index} style={styles.cardWrapper}>
            <ProductCard
              title="T-Shirt Men Black Grey Allover Printed Round Neck"
              category="T-Shirt"
              description="Men Black Grey Allover Printed Round Neck..."
              oldPrice={25.13}
              newPrice={18.50}
              rating={4.5}
              discount='32% off'
              reviews={2547}
              onPress={() => onProductPress?.(index)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollContent: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  cardWrapper: {
    width: 280,
    marginRight: 12,
  },
});