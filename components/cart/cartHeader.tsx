import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface CartHeaderProps {
  onMenuPress: () => void;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ onMenuPress }) => {
  const router = useRouter();

  return (
    <View
      style={[
        styles.header,
        { borderBottomColor: COLORS.border, backgroundColor: COLORS.white },
      ]}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.headerButton}
      >
        <Ionicons name="chevron-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={[styles.title, { color: COLORS.text }]}>Cart</Text>

      <TouchableOpacity onPress={onMenuPress} style={styles.headerButton}>
        <Ionicons name="ellipsis-vertical" size={22} color={COLORS.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    borderBottomWidth: 1,
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: FONTS.h2.fontSize,
    fontWeight: "bold",
  },
});
