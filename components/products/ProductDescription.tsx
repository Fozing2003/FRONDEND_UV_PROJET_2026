import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface ProductDescriptionProps {
  description: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: COLORS.text }]}>Description:</Text>
      <Text style={[styles.description, { color: COLORS.textSecondary }]}>
        {description}
      </Text>
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
  description: {
    fontSize: FONTS.body2.fontSize,
    lineHeight: 20,
  },
});
