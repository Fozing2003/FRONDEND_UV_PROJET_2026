// components/products/FilterBar.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface FilterBarProps {
  onSortPress?: () => void;
  onFilterPress?: () => void;
  onBrandPress?: () => void;
  onDiscountPress?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  onSortPress,
  onFilterPress,
  onBrandPress,
  onDiscountPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: COLORS.white, borderBottomColor: COLORS.border },
      ]}
    >
      {/* Bouton Sort By avec flèche */}
      <TouchableOpacity
        style={[styles.filterButton, { borderColor: COLORS.border }]}
        onPress={onSortPress}
      >
        <Text style={[styles.filterText, { color: COLORS.text }]}>Sort By</Text>
        <Ionicons name="chevron-down" size={16} color={COLORS.textSecondary} />
      </TouchableOpacity>

      {/* Bouton Filter */}
      <TouchableOpacity
        style={[styles.filterButton, { borderColor: COLORS.border }]}
        onPress={onFilterPress}
      >
        <Text style={[styles.filterText, { color: COLORS.text }]}>Filter</Text>
      </TouchableOpacity>

      {/* Bouton Brand  */}
      <TouchableOpacity
        style={[styles.filterButton, { borderColor: COLORS.border }]}
        onPress={onBrandPress}
      >
        <Text style={[styles.filterText, { color: COLORS.text }]}>Brand</Text>
        <Ionicons name="chevron-down" size={16} color={COLORS.textSecondary} />
      </TouchableOpacity>

      {/* Bouton Discount  */}
      <TouchableOpacity
        style={[styles.filterButton, { borderColor: COLORS.border }]}
        onPress={onDiscountPress}
      >
        <Text style={[styles.filterText, { color: COLORS.text }]}>
          Discount
        </Text>
        <Ionicons name="chevron-down" size={16} color={COLORS.textSecondary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: SIZES.base,
    borderBottomWidth: 1,
    paddingHorizontal: SIZES.padding,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.border,

    borderWidth: 2,
  },
  filterText: {
    fontSize: FONTS.body2.fontSize,
    marginRight: 2,
    justifyContent: "center",
  },
});
