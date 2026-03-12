// components/products/PriceTags.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface PriceTagsProps {
  price: number;
  originalPrice?: number;
  size?: "small" | "medium" | "large";
}

export const PriceTags: React.FC<PriceTagsProps> = ({
  price,
  originalPrice,
  size = "medium",
}) => {
  const hasDiscount = originalPrice && originalPrice > price;

  const getPriceSize = () => {
    switch (size) {
      case "small":
        return FONTS.body1;
      case "large":
        return { fontSize: 24, fontWeight: "700" } as const;
      default:
        return FONTS.h4;
    }
  };

  const getOriginalSize = () => {
    switch (size) {
      case "small":
        return FONTS.body3;
      case "large":
        return FONTS.body1;
      default:
        return FONTS.body2;
    }
  };

  const formatPrice = (value: number) => {
    return value.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.price, getPriceSize(), { color: COLORS.primary }]}>
        ${formatPrice(price)}
      </Text>
      {hasDiscount && (
        <Text
          style={[
            styles.originalPrice,
            getOriginalSize(),
            { color: COLORS.textLight },
          ]}
        >
          ${formatPrice(originalPrice)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    marginRight: SIZES.base,
  },
  originalPrice: {
    textDecorationLine: "line-through",
  },
});
