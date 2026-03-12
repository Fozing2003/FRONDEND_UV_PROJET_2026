import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  discount: string;
}

interface Props {
  products: Product[];
  onProductPress?: (id: number) => void;
}

export const ProductsGrid: React.FC<Props> = ({ products, onProductPress }) => {
  return (
    <View style={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          category={product.category}
          description={product.description}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
          discount={product.discount}
          onPress={() => onProductPress?.(product.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});