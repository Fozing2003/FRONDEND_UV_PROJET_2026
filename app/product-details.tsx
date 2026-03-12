// app/Product-details.tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderWithHeart } from "../components/common/HeaderWithHeart";
import { Button } from "../components/layout/Button";
import { ColorSelector } from "../components/products/ColorSelector";
import { ProductDescription } from "../components/products/ProductDescription";
import { ProductImageCarousel } from "../components/products/ProductImageCarousel";
import { ProductRating } from "../components/products/ProductRating";
import { SizeSelector } from "../components/products/SizeSelector";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const PRODUCTS_DATA = [
  {
    id: 1,
    category: "jackets",
    brand: "Peter England Casual",
    name: "Men Black Grey Allover Printed Round Neck T-Shirt",
    price: 45.15,
    rating: 4.5,
    reviewCount: 2600,
    description:
      "Premium quality cotton t-shirt featuring a unique allover print. The round neck design offers comfort and style for everyday wear. Perfect for casual outings and combines well with jeans or chinos.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#FF0000", "#0000FF", "#00FF00"],
    images: [
      {
        uri: "https://www.letempsdescerises.com/media/catalog/product/cache/9bfffb8da4e450ee2b3342bb89fd5fe3/2/6/261_fmelora000000sm_3001_imaged4.jpg",
      },
      {
        uri: "https://www.letempsdescerises.com/media/catalog/product/cache/9bfffb8da4e450ee2b3342bb89fd5fe3/2/6/261_fmelora000000sm_3001_imaged4.jpg",
      },
      {
        uri: "https://www.letempsdescerises.com/media/catalog/product/cache/9bfffb8da4e450ee2b3342bb89fd5fe3/2/6/261_fmelora000000sm_3001_imaged4.jpg",
      },
      {
        uri: "https://www.letempsdescerises.com/media/catalog/product/cache/9bfffb8da4e450ee2b3342bb89fd5fe3/2/6/261_fmelora000000sm_3001_imaged4.jpg",
      },
    ],
  },

  {
    id: 7,
    category: "shoes",
    brand: "Adidas",
    name: "Adidas Ultraboost 22 Running Shoes",
    price: 180.0,
    rating: 4.8,
    reviewCount: 3500,
    description:
      "Experience ultimate comfort with Adidas Ultraboost 22. Features responsive Boost cushioning and a supportive Primeknit upper. Designed for runners who want energy return with every step. Ideal for both training and casual wear.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    images: [
      {
        uri: "https://minuitsurterre.com/cdn/shop/files/MinuitSTCorse_CF2428.jpg?v=1739110841&width=1600",
      },
      {
        uri: "https://minuitsurterre.com/cdn/shop/files/MinuitSTCorse_CF2428.jpg?v=1739110841&width=1600",
      },
      {
        uri: "https://minuitsurterre.com/cdn/shop/files/MinuitSTCorse_CF2428.jpg?v=1739110841&width=1600",
      },
      {
        uri: "https://minuitsurterre.com/cdn/shop/files/MinuitSTCorse_CF2428.jpg?v=1739110841&width=1600",
      },
    ],
  },
  {
    id: 13,
    category: "t-shirts",
    brand: "Ray-Ban",
    name: "Ray-Ban Aviator Classic Sunglasses",
    price: 153.99,
    rating: 4.9,
    reviewCount: 5200,

    description:
      "Timeless Ray-Ban Aviator sunglasses with classic gold frame and green lenses. Provides 100% UV protection and superior glare reduction. A iconic style that suits any face shape. Includes protective case and cleaning cloth.",
    sizes: ["One Size"],
    colors: ["#D4AF37", "#C0C0C0"],
    images: [
      {
        uri: "https://www.honest-basics.com/cdn/shop/files/IMG-3986.jpg?v=1760761185&width=800",
      },
      {
        uri: "https://www.honest-basics.com/cdn/shop/files/IMG-3986.jpg?v=1760761185&width=800",
      },
      {
        uri: "https://www.honest-basics.com/cdn/shop/files/IMG-3986.jpg?v=1760761185&width=800",
      },
      {
        uri: "https://www.honest-basics.com/cdn/shop/files/IMG-3986.jpg?v=1760761185&width=800",
      },
    ],
  },

  {
    id: 22,
    category: "sunglasses",
    brand: "Ray-Ban",
    name: "Ray-Ban Aviator Classic Sunglasses",
    price: 153.99,
    rating: 4.9,
    reviewCount: 5200,
    description:
      "Timeless Ray-Ban Aviator sunglasses with classic gold frame and green lenses. Provides 100% UV protection and superior glare reduction. A iconic style that suits any face shape. Includes protective case and cleaning cloth.",
    sizes: ["One Size"],
    colors: ["#D4AF37", "#C0C0C0"],
    images: [
      {
        uri: "https://ayo-o.com/wp-content/uploads/2023/08/lunettes-amore-rose-zoom-510x510.jpg",
      },
      {
        uri: "https://ayo-o.com/wp-content/uploads/2023/08/lunettes-amore-rose-zoom-510x510.jpg",
      },
      {
        uri: "https://ayo-o.com/wp-content/uploads/2023/08/lunettes-amore-rose-zoom-510x510.jpg",
      },
      {
        uri: "https://ayo-o.com/wp-content/uploads/2023/08/lunettes-amore-rose-zoom-510x510.jpg",
      },
    ],
  },
  {
    id: 22,
    category: "winter",
    brand: "The North Face",
    name: "North Face Resolve Insulated Jacket",
    price: 299.99,
    rating: 4.8,
    reviewCount: 890,
    description:
      "Waterproof and breathable jacket perfect for cold weather. Features HeatSeek insulation and adjustable hood. Multiple pockets for storage and pit-zip vents for temperature control. Ideal for hiking and winter activities.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#2E5A88", "#B22222"],
    images: [
      {
        uri: "https://i.pinimg.com/736x/31/d9/e7/31d9e75abb02640d6f3e7e6b2f21aac8.jpg",
      },
      {
        uri: "https://i.pinimg.com/736x/31/d9/e7/31d9e75abb02640d6f3e7e6b2f21aac8.jpg",
      },
      {
        uri: "https://i.pinimg.com/736x/31/d9/e7/31d9e75abb02640d6f3e7e6b2f21aac8.jpg",
      },
      {
        uri: "https://i.pinimg.com/736x/31/d9/e7/31d9e75abb02640d6f3e7e6b2f21aac8.jpg",
      },
    ],
  },
];

export default function ProductDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(0);

  // Récupérer l'ID du produit depuis les paramètres
  const productId = Number(params.productId);
  console.log("ID reçu dans Product-details:", productId);

  // Trouver le produit correspondant
  const product =
    PRODUCTS_DATA.find((p) => p.id === productId) || PRODUCTS_DATA[0];
  console.log("Produit trouvé:", product?.name);
  // Adapter la taille par défaut selon le produit
  React.useEffect(() => {
    if (product.sizes.length > 0) {
      setSelectedSize(product.sizes[1] || product.sizes[0]);
    }
  }, [productId]);

  const handleGoBack = () => {
    // Navigation plus robuste vers la page products
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/products/products");
    }
  };

  const handleHeartPress = () => {
    setIsLiked(!isLiked);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorChange = (colorIndex: number) => {
    setSelectedColor(colorIndex);
  };

  // app/Product-details.tsx - MODIFIEZ handleAddToCart
  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id.toString(),
      name: product.name,
      description: product.description.substring(0, 30) + "...",
      price: product.price,

      quantity: 1,
      image: product.images[0].uri,
      zianterId: "zianter_01",
      zianterName: product.brand,
    };

    // Naviguer vers le panier avec les données du produit
    router.push({
      pathname: "/(tabs)/cart/Cart",
      params: {
        newProduct: JSON.stringify(productToAdd), // On passe le produit en paramètre
      },
    });
  };
  return (
    <View style={[styles.container, { backgroundColor: COLORS.background }]}>
      <HeaderWithHeart
        title="Product Detail"
        isLiked={isLiked}
        onBackPress={handleGoBack}
        onHeartPress={handleHeartPress}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductImageCarousel images={product.images} />

        <View style={styles.content}>
          <Text style={[styles.category, { color: COLORS.textSecondary }]}>
            {product.category}
          </Text>
          <Text style={[styles.name, { color: COLORS.text }]}>
            {product.name}
          </Text>

          <View style={styles.priceRatingContainer}>
            <Text style={[styles.price, { color: COLORS.primary }]}>
              ${product.price.toFixed(2)}
            </Text>
            <ProductRating
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          </View>

          <SizeSelector sizes={product.sizes} onSizeChange={handleSizeChange} />

          <ColorSelector
            colors={product.colors}
            onColorChange={handleColorChange}
          />

          {/*  Description unique pour chaque produit */}
          <ProductDescription description={product.description} />

          <View
            style={[
              styles.priceActionContainer,
              { borderTopColor: COLORS.border },
            ]}
          >
            <View style={styles.priceContainer}>
              <Text
                style={[styles.priceLabel, { color: COLORS.textSecondary }]}
              >
                Price
              </Text>
              <Text style={[styles.finalPrice, { color: COLORS.primary }]}>
                ${product.price.toFixed(2)}
              </Text>
            </View>

            <Button
              title="Add Cart"
              onPress={handleAddToCart}
              style={styles.addButton}
              variant="primary"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
  },
  category: {
    fontSize: FONTS.caption.fontSize,
    textTransform: "uppercase",
    marginBottom: SIZES.base / 2,
  },
  name: {
    fontSize: FONTS.h3.fontSize,
    fontWeight: "600",
    marginBottom: SIZES.base,
  },
  priceRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.padding,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
  },
  priceActionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: SIZES.padding,
    marginTop: SIZES.base,
    borderTopWidth: 1,
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: FONTS.body2.fontSize,
    marginBottom: 4,
  },
  finalPrice: {
    fontSize: 24,
    fontWeight: "700",
  },
  addButton: {
    width: 120,
  },
});
