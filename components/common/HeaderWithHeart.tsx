// components/common/HeaderWithHeart.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

interface HeaderWithHeartProps {
  title: string;
  isLiked: boolean;
  onBackPress: () => void;
  onHeartPress: () => void;
}

export const HeaderWithHeart: React.FC<HeaderWithHeartProps> = ({
  title,
  isLiked,
  onBackPress,
  onHeartPress,
}) => {
  return (
    <View
      style={[
        styles.header,
        { borderBottomColor: COLORS.border, backgroundColor: COLORS.white },
      ]}
    >
      <TouchableOpacity onPress={onBackPress} style={styles.headerButton}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={[styles.headerTitle, { color: COLORS.text }]}>{title}</Text>

      <TouchableOpacity onPress={onHeartPress} style={styles.headerButton}>
        <Ionicons
          name={isLiked ? "heart" : "heart-outline"}
          size={24}
          color={isLiked ? COLORS.red : COLORS.text} // ← gris si pas liké, rouge si liké
        />
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
    marginTop: 32,
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
