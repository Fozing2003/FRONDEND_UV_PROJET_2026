import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    quantity: number;
    image: string;
  };
  onDecrease: () => void;
  onIncrease: () => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onDecrease,
  onIncrease,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: COLORS.white }]}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={[styles.name, { color: COLORS.text }]}>{item.name}</Text>
        <Text style={[styles.desc, { color: COLORS.textSecondary }]}>
          {item.description}
        </Text>

        <View style={styles.priceRow}>
          <Text style={[styles.price, { color: COLORS.primary }]}>
            ${item.price.toFixed(2)}
          </Text>
          <Text style={[styles.originalPrice, { color: COLORS.textLight }]}>
            ${item.originalPrice.toFixed(2)}
          </Text>
        </View>
      </View>

      <View style={styles.qtyControl}>
        <TouchableOpacity
          style={[styles.qtyBtn, { borderColor: COLORS.border }]}
          onPress={onDecrease}
        >
          <Text style={[styles.qtyBtnText, { color: COLORS.text }]}>−</Text>
        </TouchableOpacity>

        <Text style={[styles.qtyText, { color: COLORS.text }]}>
          {item.quantity}
        </Text>

        <TouchableOpacity
          style={[styles.qtyBtn, { borderColor: COLORS.border }]}
          onPress={onIncrease}
        >
          <Text style={[styles.qtyBtnText, { color: COLORS.text }]}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.base,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: 70,
    height: 80,
    borderRadius: SIZES.radius / 2,
    backgroundColor: COLORS.surface,
    marginRight: SIZES.padding,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: FONTS.body1.fontSize,
    fontWeight: "700",
    marginBottom: 2,
  },
  desc: {
    fontSize: FONTS.body3.fontSize,
    marginBottom: SIZES.base / 2,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: FONTS.body1.fontSize,
    fontWeight: "700",
    marginRight: SIZES.base,
  },
  originalPrice: {
    fontSize: FONTS.body3.fontSize,
    textDecorationLine: "line-through",
  },
  qtyControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: SIZES.radius / 2,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: {
    fontSize: 16,
    fontWeight: "600",
  },
  qtyText: {
    fontSize: FONTS.body1.fontSize,
    fontWeight: "700",
    marginHorizontal: SIZES.base,
  },
});
