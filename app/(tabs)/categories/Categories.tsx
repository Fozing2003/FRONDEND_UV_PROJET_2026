// app/(tabs)/categories/categories.tsx
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { CategoryCard } from "../../../components/categories/CategoryCard";
import { Header } from "../../../components/common/header";
import { COLORS, SIZES } from "../../../constants/theme";

// Ou avec des URLs distantes
const tshirtImage = {
  uri: "https://www.honest-basics.com/cdn/shop/files/IMG-3986.jpg?v=1760761185&width=800",
};
const jacketImage = {
  uri: "https://www.letempsdescerises.com/media/catalog/product/cache/9bfffb8da4e450ee2b3342bb89fd5fe3/2/6/261_fmelora000000sm_3001_imaged4.jpg",
};
const shoesImage = {
  uri: "https://minuitsurterre.com/cdn/shop/files/MinuitSTCorse_CF2428.jpg?v=1739110841&width=1600",
};
const sunglassesImage = {
  uri: "https://ayo-o.com/wp-content/uploads/2023/08/lunettes-amore-rose-zoom-510x510.jpg",
};
const winterImage = {
  uri: "https://i.pinimg.com/736x/31/d9/e7/31d9e75abb02640d6f3e7e6b2f21aac8.jpg",
};

const categories = [
  {
    id: 1,
    title: "Men T-shirt",
    itemCount: 240,
    key: "t-shirts",
    image: tshirtImage, // ← Ajout de l'image
  },
  {
    id: 2,
    title: "Jackets",
    itemCount: 140,
    key: "jackets",
    image: jacketImage, // ← Ajout de l'image
  },
  {
    id: 3,
    title: "Shoes",
    itemCount: 104,
    key: "shoes",
    image: shoesImage, // ← Ajout de l'image
  },

  {
    id: 4,
    title: "Sunglasses",
    itemCount: 100,
    key: "sunglasses",
    image: sunglassesImage, // ← Ajout de l'image
  },

  {
    id: 5,
    title: "Winter",
    itemCount: 260,
    key: "winter",
    image: winterImage, // ← Ajout de l'image
  },
];

export default function CategoriesScreen() {
  const router = useRouter();

  const handleShopNow = (category: any) => {
    router.push({
      pathname: "/products/products",
      params: { category: category.key },
    });
  };

  const handleGoBack = () => {
    router.push("/(tabs)/home");
  };

  const handleSearchPress = () => {
    router.push("/search/search");
  };

  return (
    <View style={[styles.container, { backgroundColor: COLORS.background }]}>
      <Header
        title="All Categories"
        showBack={true}
        showSearch={true}
        onBackPress={handleGoBack}
        onSearchPress={handleSearchPress}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category} // ← L'image est dans category
            onShopNow={handleShopNow}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingVertical: SIZES.base,
  },
});
