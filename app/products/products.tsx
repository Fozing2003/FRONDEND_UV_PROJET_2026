// app/products/products.tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Header } from "../../components/common/header";
import { FilterBar } from "../../components/products/FilterBar";
import { ProductCardGrid } from "../../components/products/ProductCard";
import { COLORS, SIZES } from "../../constants/theme";

// Données simulées des produits (plus de produits pour remplir la grille)
const PRODUCTS = [
  //  JACKETS
  {
    id: 1,
    category: "jackets",
    brand: "Peter England casual",
    name: "Peter Longline Pure Cotton ",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://minuitsurterre.com/cdn/shop/files/MinuitSTCorse_CF2428.jpg?v=1739110841&width=1",
    },
  },
  {
    id: 2,
    category: "jackets",
    brand: "Peter England casual",
    name: "Peter Longline Pure Cotton ",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://m.media-amazon.com/images/I/51Z31KZ03hL._AC_SL6001_.jpg",
    },
  },
  {
    id: 3,
    category: "jackets",
    brand: "Peter England casual",
    name: "Peter Longline Pure Cotton ",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://m.media-amazon.com/images/I/51GXRifeKyL._AC_SL1022_.jpg",
    },
  },
  {
    id: 4,
    category: "jackets",
    brand: "Peter England casual",
    name: "Peter Longline Pure Cotton ",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://m.media-amazon.com/images/I/51OkjHNknrL._AC_SL6000_.jpg",
    },
  },

  {
    id: 5,
    category: "jackets",
    brand: "Peter England casual",
    name: "Peter Longline Pure Cotton ",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://www.cesarenori.fr/blog/wp-content/uploads/2022/03/peau-lainee-homme.png",
    },
  },

  {
    id: 6,
    category: "jackets",
    brand: "Peter England casual",
    name: "Peter Longline Pure Cotton ",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://images.napali.app/global/element-products/all/default/large/eljjk00144_element,w_wbs0_frt1.jpg",
    },
  },

  //shoes
  {
    id: 7,
    category: "shoes",
    brand: "Adidas",
    name: "Adidas Ultraboost 22",
    price: 220.0,
    originalPrice: 280.0,
    rating: 4.8,
    reviewCount: 892,
    image: {
      uri: "https://minuitsurterre.com/cdn/shop/files/MinuitSTCorse_CF2428.jpg?v=1739110841&width=160",
    },
  },

  {
    id: 8,
    category: "shoes",
    brand: "Adidas",
    name: "Adidas Ultraboost 22",
    price: 220.0,
    originalPrice: 280.0,
    rating: 4.8,
    reviewCount: 892,
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b0gRII1c7_oKLVANXgIeppS45-xZIDZpgw&s",
    },
  },

  {
    id: 9,
    category: "shoes",
    brand: "Adidas",
    name: "Adidas Ultraboost 22",
    price: 220.0,
    originalPrice: 280.0,
    rating: 4.8,
    reviewCount: 892,
    image: {
      uri: "https://img.shoes.fr/images/header_menu_shoes---20260302.jpg",
    },
  },

  {
    id: 10,
    category: "shoes",
    brand: "Adidas",
    name: "Adidas Ultraboost 22",
    price: 220.0,
    originalPrice: 280.0,
    rating: 4.8,
    reviewCount: 892,
    image: {
      uri: "https://imagescdn.simons.ca/vb/f43ef55c892b67c73ff5eb3739dd9072/la-mule-boston-en-suede-beige-sable-singee-birkenstock.jpg",
    },
  },

  {
    id: 11,
    category: "shoes",
    brand: "birkenstock",
    name: "Birkenstock Arizona",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.7,
    reviewCount: 892,
    image: {
      uri: "https://img.shoes.fr/images/home/home_opBasketCouleur.jpg",
    },
  },

  {
    id: 12,
    category: "shoes",
    brand: "Nike",
    name: "Nike Air Max 270",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviewCount: 1234,
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPhOhoT2yRcrseLHaV7Jf_NPyZUaWlPbSBw&s",
    },
  },

  // ----- T-SHIRTS
  {
    id: 13,
    category: "t-shirts",
    brand: "Peter England Casual",
    name: "T-Shirt Blanc en Coton",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://www.honest-basics.com/cdn/shop/files/IMG-3986.jpg?v=1760761185&width=800",
    },
  },
  {
    id: 14,
    category: "t-shirts",
    brand: "Nike",
    name: "Nike Sportswear Club Noir",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.3,
    reviewCount: 189,
    image: {
      uri: "https://static.cilory.com/793385-thickbox_default/nologo-navy-pure-cotton-polo-t-shirt.jpg",
    },
  },

  {
    id: 15,
    category: "t-shirts",
    brand: "Peter England Casual",
    name: "T-Shirt Blanc en Coton",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://nobero.com/cdn/shop/files/WhatsApp_Image_2024-08-13_at_6.50.45_PM.jpg?v=1768974515",
    },
  },

  {
    id: 16,
    category: "t-shirts",
    brand: "Peter England Casual",
    name: "T-Shirt Blanc en Coton",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHl1SWfixcvi9yVBVrJ1mZyzKhO0MEXVawRg&s",
    },
  },

  {
    id: 17,
    category: "t-shirts",
    brand: "Peter England Casual",
    name: "T-Shirt Blanc en Coton",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://img.sonofatailor.com/images/customizer/product/White_O_Crew_Regular_NoPocket-bc4d0212-c148-4523-b49c-284e948e0e07.jpg",
    },
  },

  {
    id: 18,
    category: "t-shirts",
    brand: "Peter England Casual",
    name: "T-Shirt Blanc en Coton",
    price: 151.15,
    originalPrice: 255.11,
    rating: 4.5,
    reviewCount: 265,
    image: {
      uri: "https://iciw.centracdn.net/client/dynamic/images/12879_d926641764-13516-342-1-1350x0.jpg",
    },
  },

  //SUNGLASSES
  {
    id: 19,
    category: "sunglasses",
    brand: "Ray-Ban",
    name: "Ray-Ban Aviator Classic",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviewCount: 3456,
    image: {
      uri: "https://ayo-o.com/wp-content/uploads/2023/08/lunettes-amore-rose-zoom-510x510.jpg",
    },
  },
  {
    id: 20,
    category: "sunglasses",
    brand: "Oakley",
    name: "Oakley Holbrook Sport",
    price: 159.99,
    originalPrice: 219.99,
    rating: 4.7,
    reviewCount: 892,
    image: {
      uri: "https://www.lunettes-originales.fr/wp-content/uploads/2021/06/visuel-dossier-solaires-homme-urban-chic-plv-heo-anne-et-valentin.jpg",
    },
  },
  {
    id: 21,
    category: "sunglasses",
    brand: "Gucci",
    name: "Gucci GG0061S",
    price: 399.99,
    rating: 4.8,
    reviewCount: 567,
    image: {
      uri: "https://nyscollection.ma/cdn/shop/files/Untitleddesign-2025-08-19T180523.387.png?v=1755623619&width=1000",
    },
  },

  // WINTER
  {
    id: 22,
    category: "winter",
    brand: "Canada Goose",
    name: "Canada Goose Expedition Parka",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.9,
    reviewCount: 2345,
    image: {
      uri: "https://i.pinimg.com/736x/31/d9/e7/31d9e75abb02640d6f3e7e6b2f21aac8.jpg",
    },
  },
  {
    id: 23,
    category: "winter",
    brand: "The North Face",
    name: "The North Face McMurdo Parka",
    price: 499.99,
    originalPrice: 699.99,
    rating: 4.8,
    reviewCount: 1234,
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dZOA4tIzOks06jSioxq31DthW3tihNilRQ&s",
    },
  },
  {
    id: 24,
    category: "winter",
    brand: "Moncler",
    name: "Moncler Grenoble Down Jacket",
    price: 1299.99,
    rating: 4.9,
    reviewCount: 789,
    image: {
      uri: "https://i5.walmartimages.com/seo/Loose-Autumn-Winter-Striped-Sweater-Women-Pullover-Thick-Ladies-Sweaters-Oversized-Color-Block-Sweater-Jumper_a37aefd2-36b2-4afa-bea8-26d062c1b1ea.44f99fe974f5579298a913fa59a05b15.jpeg",
    },
  },

  {
    id: 25,
    category: "winter",
    brand: "Moncler",
    name: "Moncler Grenoble Down Jacket",
    price: 1299.99,
    rating: 4.9,
    reviewCount: 789,
    image: {
      uri: "https://img.freepik.com/photos-gratuite/jeune-fille-dans-pull-blanc-debout-dans-parc-hiver_1157-27458.jpg?semt=ais_hybrid&w=740&q=80",
    },
  },

  {
    id: 26,
    category: "winter",
    brand: "Moncler",
    name: "Moncler Grenoble Down Jacket",
    price: 1299.99,
    rating: 4.9,
    reviewCount: 789,
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT171yPQD1npyt7PN7QAPS_BBFvUIhvKDhSfQ&s",
    },
  },

  {
    id: 27,
    category: "winter",
    brand: "Moncler",
    name: "Moncler Grenoble Down Jacket",
    price: 1299.99,
    rating: 4.9,
    reviewCount: 789,
    image: {
      uri: "https://www.maisonizard.com/cdn/shop/files/pull-ethique-homme-col-roule-rouge-bordeaux-laine-pyrenees-coton-recycle-maison-izard-made-in-france.jpg?v=1735656849&width=2048",
    },
  },
];

export default function ProductsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [products, setProducts] = useState<any[]>([]);

  // Récupérer la catégorie envoyée par Categories
  const categoryKey = params.category as string; // "t-shirts", "jackets" ou "shoes

  //  Filtrer les produits selon la catégorie
  useEffect(() => {
    // Ne garder que les produits de la bonne catégorie
    const filtered = PRODUCTS.filter(
      (product: any) => product.category === categoryKey,
    );
    setProducts(filtered);

    console.log(`Catégorie: ${categoryKey} → ${filtered.length} produits`);
  }, [categoryKey]); // ← Se relance si la catégorie change

  //  Afficher le bon titre
  const getPageTitle = () => {
    switch (categoryKey) {
      case "t-shirts":
        return "T-Shirts";
      case "jackets":
        return "Jackets";
      case "shoes":
        return "Shoes";
      default:
        return "Products";
    }
  };

  const handleProductPress = (product: any) => {
    console.log(" Clic sur produit ID:", product.id);
    router.push({
      pathname: "/product-details",
      params: { productId: product.id },
    });
  };

  const handleGoBack = () => {
    router.push("/(tabs)/categories/Categories");
  };

  const handleSortPress = () => console.log("Sort");
  const handleFilterPress = () => console.log("Filter");
  const handleBrandPress = () => console.log("Brand");
  const handleDiscountPress = () => console.log("Discount");

  return (
    <View style={[styles.container, { backgroundColor: COLORS.background }]}>
      <Header
        title=" Products"
        showBack={true}
        showSearch={false}
        onBackPress={handleGoBack}
      />

      <FilterBar
        onSortPress={handleSortPress}
        onFilterPress={handleFilterPress}
        onBrandPress={handleBrandPress}
        onDiscountPress={handleDiscountPress}
      />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCardGrid product={item} onPress={handleProductPress} />
        )}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 22,
  },
  listContent: {
    padding: SIZES.base,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
