import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const EmptyCart: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🛒</Text>
      <Text style={[styles.title, { color: COLORS.text }]}>
        Your cart is empty
      </Text>
      <Text style={[styles.subtitle, { color: COLORS.textSecondary }]}>
        Add products to get started
      </Text>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: COLORS.primary }]}
        onPress={() => router.back()}
      >
        <Text style={styles.btnText}>Start Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.padding * 2,
  },
  emoji: {
    fontSize: 64,
    marginBottom: SIZES.padding,
  },
  title: {
    fontSize: FONTS.h2.fontSize,
    fontWeight: "800",
    marginBottom: SIZES.base,
  },
  subtitle: {
    fontSize: FONTS.body2.fontSize,
    textAlign: "center",
    marginBottom: SIZES.padding * 2,
  },
  btn: {
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: SIZES.padding,
  },
  btnText: {
    color: COLORS.white,
    fontSize: FONTS.body1.fontSize,
    fontWeight: "700",
  },
});
