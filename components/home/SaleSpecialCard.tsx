import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProductCard } from './ProductCard';

interface Props {
  onPress?: () => void;
}

export const SaleSpecialCard: React.FC<Props> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <ProductCard
        title="Jacket Men Black Grey Allover Printed Round Neck"
        category="Jacket"
        description="Men Black Grey Allover Printed Round Neck..."
        oldPrice={25.13}
        newPrice={18.50}
        discount="32% off"
        
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});