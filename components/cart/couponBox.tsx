import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface CouponBoxProps {
  onApply?: (code: string) => void;
}

export const CouponBox: React.FC<CouponBoxProps> = ({ onApply }) => {
  const [code, setCode] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: COLORS.textSecondary }]}>
        Have a coupon code ? enter here
      </Text>

      <View
        style={[
          styles.inputContainer,
          { borderColor: COLORS.border, backgroundColor: COLORS.white },
        ]}
      >
        <Ionicons name="pricetag-outline" size={18} color={COLORS.primary} />
        <TextInput
          style={[styles.input, { color: COLORS.text }]}
          placeholder="Enter Your Offer Code"
          placeholderTextColor={COLORS.textLight}
          value={code}
          onChangeText={setCode}
        />
        <TouchableOpacity onPress={() => onApply?.(code)}>
          <Ionicons name="chevron-forward" size={18} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.padding,
  },
  label: {
    fontSize: FONTS.body3.fontSize,
    marginBottom: SIZES.base / 2,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
  },
  input: {
    flex: 1,
    fontSize: FONTS.body2.fontSize,
    marginLeft: SIZES.base,
  },
});
