import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from "../../constants/colors";

const CustomTabButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={styles.customButtonContainer}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={styles.customButton}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      flex: 1,
      backgroundColor: Colors.primary,     // ← Couleur de fond du tab bar de dessus
      paddingTop: insets.top,
    }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: "#8E8E93",
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="categories/Categories"
          options={{
            title: "Categories",
            tabBarIcon: ({ color, size }) => (
              <Feather name="grid" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="cart/Cart"
          options={{
            title: "Cart",
            tabBarButton: (props) => (
              <CustomTabButton {...props}>
                <Feather name="shopping-bag" size={24} color="white" />
              </CustomTabButton>
            ),
          }}
        />

        <Tabs.Screen
          name="wishlist/Wishlist"
          options={{
            title: "Wishlist",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile/Profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      <View
        style={{
          height: 1,
          backgroundColor: '#E0E0E0',
          width: '100%',
        }}
      />

      <View
        style={{
          height: insets.bottom || 0,
          backgroundColor: '#FFFFFF',
          width: '100%',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 75,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 },
  },
  customButtonContainer: {
    top: -22,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
  customButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});