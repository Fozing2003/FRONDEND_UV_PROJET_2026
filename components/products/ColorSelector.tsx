import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface ColorSelectorProps {
  colors: string[];
  onColorChange?: (colorIndex: number) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  onColorChange,
}) => {
  const [selectedColor, setSelectedColor] = useState(0);

  const handleColorPress = (index: number) => {
    setSelectedColor(index);
    if (onColorChange) {
      onColorChange(index);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: COLORS.text }]}>Color:</Text>
      <View style={styles.colorsContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorButton,
              { backgroundColor: color },
              selectedColor === index && {
                borderColor: COLORS.primary,
              },
            ]}
            onPress={() => handleColorPress(index)}
          />
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
  colorsContainer: {
    flexDirection: "row",
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: SIZES.base,
    borderWidth: 2,
    borderColor: "transparent",
  },
});
