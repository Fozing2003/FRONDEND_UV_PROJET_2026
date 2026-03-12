// components/common/Header.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showSearch?: boolean;
  onBackPress?: () => void;
  onSearchPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  showSearch = true,
  onBackPress,
  onSearchPress,
}) => {
  const router = useRouter();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  const handleSearchPress = () => {
    if (onSearchPress) {
      onSearchPress();
    } else {
      router.push("/search/search");
    }
  };

  return (
    <View
      style={[
        styles.header,
        { borderBottomColor: COLORS.border, backgroundColor: COLORS.white },
      ]}
    >
      {showBack ? (
        <TouchableOpacity onPress={handleBackPress} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
      ) : (
        <View style={styles.headerButton} />
      )}

      <Text style={[styles.title, { color: COLORS.text }]}>{title}</Text>

      {showSearch ? (
        <TouchableOpacity
          onPress={handleSearchPress}
          style={styles.headerButton}
        >
          <Ionicons name="search" size={24} color={COLORS.text} />
        </TouchableOpacity>
      ) : (
        <View style={styles.headerButton} />
      )}
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
    fontSize: 19,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
});
