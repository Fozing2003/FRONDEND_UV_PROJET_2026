// app/(tabs)/cart/Cart.tsx
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { CartActions } from "../../../components/cart/cartAction";
import { CartHeader } from "../../../components/cart/cartHeader";
import { CartItem } from "../../../components/cart/cartItem";
import { CouponBox } from "../../../components/cart/couponBox";
import { DeliveryBar } from "../../../components/cart/deliveryBar";
import { PriceSummary } from "../../../components/cart/priceSummary";
import { COLORS, SIZES } from "../../../constants/theme";

// TYPES
interface CartItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  zianterId: string;
  zianterName: string;
}

interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  zianterId: string;
  zianterName: string;
}

// DONNÉES INITIALES
const INITIAL_CART: CartItemType[] = [
  {
    id: "1",
    name: "Peter England Casual",
    description: "Peter Longline Pure Cotton Tshirt",
    price: 158.15,
    originalPrice: 200.1,
    quantity: 1,
    image: "https://via.placeholder.com/100",
    zianterId: "zianter_01",
    zianterName: "Peter England Store",
  },
  {
    id: "2",
    name: "Peter England Casual",
    description: "Peter Longline Pure Cotton Tshirt",
    price: 158.15,
    originalPrice: 200.1,
    quantity: 1,
    image: "https://via.placeholder.com/100",
    zianterId: "zianter_01",
    zianterName: "Peter England Store",
  },
  {
    id: "3",
    name: "Peter England Casual",
    description: "Peter Longline Pure Cotton Tshirt",
    price: 158.15,
    originalPrice: 200.1,
    quantity: 1,
    image: "https://via.placeholder.com/100",
    zianterId: "zianter_01",
    zianterName: "Peter England Store",
  },
];

const TAX_RATE = 0.005;
const DELIVERY_RATE = 0.008;

export default function CartScreen() {
  const params = useLocalSearchParams();
  const [cartItems, setCartItems] = useState<CartItemType[]>(INITIAL_CART);

  // Ajouter un nouveau produit depuis Product-details
  useEffect(() => {
    if (params.newProduct) {
      try {
        const newProduct = JSON.parse(params.newProduct as string);
        setCartItems((prev) => {
          const exists = prev.find((i) => i.id === newProduct.id);
          if (exists) {
            return prev.map((i) =>
              i.id === newProduct.id ? { ...i, quantity: i.quantity + 1 } : i,
            );
          }
          return [...prev, newProduct];
        });
      } catch (error) {
        console.error("Erreur parsing produit:", error);
      }
    }
  }, [params.newProduct]);

  // Mise à jour quantité
  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Vider le panier
  const clearCart = () => {
    Alert.alert("Clear Cart", "Are you sure you want to empty your cart?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Clear",
        style: "destructive",
        onPress: () => setCartItems([]),
      },
    ]);
  };

  // Menu à 3 points
  const handleMenuPress = () => {
    Alert.alert("Cart Options", "Choose an option", [
      { text: "Cancel", style: "cancel" },
      { text: "Clear Cart", style: "destructive", onPress: clearCart },
    ]);
  };

  // Calculs
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const deliveryFee = subtotal * DELIVERY_RATE;
  const total = subtotal + tax + deliveryFee;

  return (
    <View style={[styles.container, { backgroundColor: COLORS.background }]}>
      <CartHeader onMenuPress={handleMenuPress} />
      <DeliveryBar userName="You" address="My Address" />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onDecrease={() => updateQuantity(item.id, -1)}
            onIncrease={() => updateQuantity(item.id, 1)}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={styles.footer}>
            <CouponBox onApply={(code) => Alert.alert("Code appliqué", code)} />
            <PriceSummary
              subtotal={subtotal}
              tax={tax}
              deliveryFee={deliveryFee}
              total={total}
            />
            <CartActions
              onClear={clearCart}
              onCheckout={() => router.push("./checkout")}
              total={total}
            />
            <View style={{ height: 20 }} />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.base,
  },
  footer: {
    marginTop: SIZES.base,
    paddingBottom: SIZES.padding,
  },
});
