// app/checkout.tsx
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function CheckoutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Checkout Page</Text>
      <Text onPress={() => router.back()}>← Back</Text>
    </View>
  );
}
