import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface SizeSelectorProps {
  sizes: string[];
  onSizeChange?: (size: string) => void;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  onSizeChange,
}) => {
  const [selectedSize, setSelectedSize] = useState(sizes[1] || "M");

  const handleSizePress = (size: string) => {
    setSelectedSize(size);
    if (onSizeChange) {
      onSizeChange(size);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: COLORS.text }]}>Size:</Text>
      <View style={styles.sizesContainer}>
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              { borderColor: COLORS.border },
              selectedSize === size && {
                backgroundColor: COLORS.primary,
                borderColor: COLORS.primary,
              },
            ]}
            onPress={() => handleSizePress(size)}
          >
            <Text
              style={[
                styles.sizeText,
                { color: COLORS.text },
                selectedSize === size && { color: COLORS.white },
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.padding,
  },
  title: {
    fontSize: FONTS.body1.fontSize,
    fontWeight: "bold",
    marginBottom: SIZES.base,
  },
  sizesContainer: {
    flexDirection: "row",
  },
  sizeButton: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius / 2,
    borderWidth: 1,
    marginRight: SIZES.base,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: FONTS.body2.fontSize,
  },
});
