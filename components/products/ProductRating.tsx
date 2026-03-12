import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

export const ProductRating: React.FC<ProductRatingProps> = ({
  rating,
  reviewCount,
}) => {
  const formatReviewCount = (count: number) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    }
    return count.toString();
  };

  return (
    <View style={styles.container}>
      <Ionicons name="star" size={16} color={COLORS.rating} />
      <Text style={[styles.rating, { color: COLORS.rating }]}>{rating}</Text>
      <Text style={[styles.reviewCount, { color: COLORS.textSecondary }]}>
        ({formatReviewCount(reviewCount)} review)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: FONTS.body1.fontSize,
    marginLeft: 4,
    marginRight: 4,
  },
  reviewCount: {
    fontSize: FONTS.caption.fontSize,
  },
});
