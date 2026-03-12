// components/cart/CartActions.tsx
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface CartActionsProps {
  onClear: () => void;
  onCheckout: () => void; // ← Renommé de onPay à onCheckout
  total: number;
}

export const CartActions: React.FC<CartActionsProps> = ({
  onClear,
  onCheckout,
  total,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.clearBtn, { borderColor: "#e05252" }]}
        onPress={onClear}
      >
        <Text style={styles.clearBtnText}>Clear Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.checkoutBtn, { backgroundColor: COLORS.primary }]}
        onPress={onCheckout}
      >
        <Text style={styles.checkoutBtnText}>Checkout</Text>{" "}
        {/* ← Texte changé */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  clearBtn: {
    flex: 1,
    height: 50,
    borderRadius: SIZES.radius,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff5f5",
  },
  clearBtnText: {
    fontSize: FONTS.body2.fontSize,
    fontWeight: "700",
    color: "#e05252",
  },
  checkoutBtn: {
    flex: 2,
    height: 50,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  checkoutBtnText: {
    fontSize: FONTS.body2.fontSize,
    fontWeight: "700",
    color: COLORS.white,
  },
});
