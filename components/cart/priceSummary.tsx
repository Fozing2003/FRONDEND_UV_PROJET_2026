import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface PriceSummaryProps {
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
}

export const PriceSummary: React.FC<PriceSummaryProps> = ({
  subtotal,
  tax,
  deliveryFee,
  total,
}) => {
  return (
    <View style={[styles.box, { backgroundColor: COLORS.white }]}>
      <View style={styles.row}>
        <Text style={[styles.label, { color: COLORS.textSecondary }]}>
          Price :
        </Text>
        <Text style={[styles.value, { color: COLORS.text }]}>
          ${subtotal.toFixed(2)}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.label, { color: COLORS.textSecondary }]}>
          Tax :
        </Text>
        <Text style={[styles.value, { color: COLORS.text }]}>
          {((tax * 100) / subtotal).toFixed(1)}%
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.label, { color: COLORS.textSecondary }]}>
          Delivery Fee :
        </Text>
        <Text style={[styles.value, { color: COLORS.text }]}>
          {((deliveryFee * 100) / subtotal).toFixed(1)}%
        </Text>
      </View>

      <View style={[styles.divider, { backgroundColor: COLORS.border }]} />

      <View style={styles.row}>
        <Text style={[styles.totalLabel, { color: COLORS.text }]}>Total :</Text>
        <Text style={[styles.totalValue, { color: COLORS.text }]}>
          ${total.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.base,
  },
  label: {
    fontSize: FONTS.body2.fontSize,
  },
  value: {
    fontSize: FONTS.body2.fontSize,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    marginVertical: SIZES.base,
  },
  totalLabel: {
    fontSize: FONTS.body1.fontSize,
    fontWeight: "700",
  },
  totalValue: {
    fontSize: FONTS.h4.fontSize,
    fontWeight: "800",
  },
});
