import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface DeliveryBarProps {
  userName?: string;
  address?: string;
  onAddressPress?: () => void;
}

export const DeliveryBar: React.FC<DeliveryBarProps> = ({
  userName = "You",
  address = "My Address",
  onAddressPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: COLORS.white, borderBottomColor: COLORS.border },
      ]}
    >
      <View style={styles.row}>
        <Text style={[styles.label, { color: COLORS.textSecondary }]}>
          Delivery to
        </Text>
        <Text style={[styles.name, { color: COLORS.text }]}> {userName}</Text>
      </View>

      <TouchableOpacity style={styles.addressRow} onPress={onAddressPress}>
        <Text style={[styles.address, { color: COLORS.primary }]}>
          {address}
        </Text>
        <Ionicons name="chevron-down" size={16} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    borderBottomWidth: 1,
    marginBottom: SIZES.base,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  label: {
    fontSize: FONTS.body2.fontSize,
  },
  name: {
    fontSize: FONTS.body2.fontSize,
    fontWeight: "600",
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  address: {
    fontSize: FONTS.body1.fontSize,
    fontWeight: "600",
    marginRight: 4,
  },
});
