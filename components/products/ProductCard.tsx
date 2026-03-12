// components/products/ProductCardGrid.tsx
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { PriceTags } from "./PriceTags";

interface ProductCardProps {
  product: {
    id: number;
    brand: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    image?: any;
  };
  onPress: (product: any) => void;
}

export const ProductCardGrid: React.FC<ProductCardProps> = ({
  product,
  onPress,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = (e: any) => {
    e.stopPropagation(); // Empêche de déclencher onPress de la carte
    setIsLiked(!isLiked);
    console.log(`${product.name} ${!isLiked ? "liked" : "unliked"}`);
  };

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: COLORS.white }]}
      onPress={() => onPress(product)}
      activeOpacity={0.7}
    >
      {/* Conteneur image avec cœur superposé */}
      <View style={styles.imageContainer}>
        <Image
          source={
            product.image || {
              uri: "https://www.letempsdescerises.com/media/catalog/product/cache/9bfffb8da4e450ee2b3342bb89fd5fe3/2/6/261_fmelora000000sm_3001_imaged4.jpg",
            }
          }
          style={styles.image}
          resizeMode="cover"
        />

        {/* Bouton cœur en haut à droite de l'image */}
        <TouchableOpacity
          style={styles.likeButton}
          onPress={handleLikePress}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name={isLiked ? "heart" : "heart-outline"}
            size={24}
            color={isLiked ? COLORS.red : COLORS.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Description en bas */}
      <View style={styles.content}>
        <Text style={[styles.brand, { color: COLORS.textSecondary }]}>
          {product.brand}
        </Text>
        <Text style={[styles.name, { color: COLORS.text }]} numberOfLines={2}>
          {product.name}
        </Text>

        <PriceTags
          price={product.price}
          originalPrice={product.originalPrice}
          size="small"
        />

        <View style={styles.ratingContainer}>
          <Text style={[styles.rating, { color: COLORS.rating }]}>
            ★ {product.rating}
          </Text>
          <Text style={[styles.reviewCount, { color: COLORS.textSecondary }]}>
            ({product.reviewCount})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: SIZES.base / 2,
    padding: SIZES.base,
    borderRadius: SIZES.radius,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    position: "relative",
    marginBottom: SIZES.base,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: SIZES.radius,
  },
  likeButton: {
    position: "absolute",
    top: 8,
    right: 8,

    padding: 4,
  },
  content: {
    width: "100%",
  },
  brand: {
    fontSize: FONTS.caption.fontSize,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  name: {
    fontSize: FONTS.body2.fontSize,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  rating: {
    fontSize: FONTS.body3.fontSize,
    marginRight: 4,
  },
  reviewCount: {
    fontSize: FONTS.caption.fontSize,
  },
});
