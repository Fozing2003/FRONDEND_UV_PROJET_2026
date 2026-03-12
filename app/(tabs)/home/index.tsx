import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '@/components/layout/Header';
import { SaleBanner } from '@/components/home/SaleBanner';
import { CategoryBar } from '@/components/home/CategoryBar';
import { SaleSpecialCard } from '@/components/home/SaleSpecialCard';
import { SectionHeader } from '@/components/home/SectionHeader';
import { ProductsGrid } from '@/components/home/ProductsGrid';
import { TrendingHorizontal } from '@/components/home/TrendingHorizontal';
import Colors from '@/constants/colors';

export default function HomeScreen() {
  const products = [
    {
      id: 1,
      title: 'T-Shirt Men Black Grey Allover Printed Round Neck',
      category: 'T-Shirt',
      description: 'Men Black Grey Allover Printed Round Neck...',
      oldPrice: 30.15,
      newPrice: 25.15,
      discount: '32%',
    },
    {
      id: 2,
      title: 'Jacket Men Black Grey Allover Printed Round Neck',
      category: 'Jacket',
      description: 'Men Black Grey Allover Printed Round Neck...',
      oldPrice: 25.13,
      newPrice: 18.50,
      discount: '32%',
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    console.log('Selected category:', categoryId);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SaleBanner />
        <CategoryBar onSelectCategory={handleCategorySelect} />
        <SaleSpecialCard />
        <SectionHeader title="Most Popular" onSeeMore={() => console.log('See more')} />
        <ProductsGrid 
          products={products} 
          onProductPress={(id) => console.log('Product pressed', id)} 
        />
        <TrendingHorizontal 
          onSeeMore={() => console.log('See more trending')}
          onProductPress={(index) => console.log('Trending product', index)}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
});