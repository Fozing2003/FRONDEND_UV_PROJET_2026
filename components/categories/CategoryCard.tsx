// components/categories/CategoryCard.tsx
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native"; // ← Ajoute Image
import { COLORS, SIZES } from "../../constants/theme";
import { Button } from "../layout/Button";

interface CategoryCardProps {
  category: {
    id: number;
    title: string;
    itemCount: number;
    key: string;
    image?: any;
  };
  onShopNow: (category: any) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onShopNow,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: COLORS.white }]}>
      <View style={styles.cardContent}>
        <View>
          <Text style={[styles.categoryTitle, { color: COLORS.text }]}>
            {category.title}
          </Text>
          <Text style={[styles.itemCount, { color: COLORS.textSecondary }]}>
            {category.itemCount} items
          </Text>
        </View>
        <Button
          title="Shop Now"
          variant="primary"
          onPress={() => onShopNow(category)}
          style={styles.shopNowButton}
        />
      </View>

      {/* ✅ Image à droite */}
      {category.image ? (
        <Image
          source={category.image}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View
          style={[styles.imagePlaceholder, { backgroundColor: COLORS.surface }]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.base,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  itemCount: {
    fontSize: 14,
    marginBottom: 12,
  },
  shopNowButton: {
    alignSelf: "flex-start",
  },
  imagePlaceholder: {
    width: 80,
    height: 170,

    marginLeft: SIZES.padding,
  },
  image: {
    width: 90,
    height: 110,

    marginLeft: SIZES.padding,
  },
});
