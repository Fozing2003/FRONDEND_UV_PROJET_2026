// components/products/ProductImageCarousel.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const { width } = Dimensions.get("window");

interface ProductImageCarouselProps {
  images: { uri: string }[];
  autoPlayInterval?: number;
}

export const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  images,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Auto-défilement cyclique
  useEffect(() => {
    const interval = setInterval(() => {
      // Calcul de l'index suivant avec modulo pour le cycle
      const nextIndex = (currentIndex + 1) % images.length;

      // Mise à jour de l'état
      setCurrentIndex(nextIndex);

      // Défilement vers l'image suivante
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, images.length, autoPlayInterval]);

  // Quand on clique sur une miniature
  const handleThumbnailPress = (index: number) => {
    setCurrentIndex(index);
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  // Détection de l'image visible
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      {/* Image principale avec FlatList */}
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={[
              styles.mainImage,
              { width, backgroundColor: COLORS.surface },
            ]}
            resizeMode="cover"
          />
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* Miniatures superposées */}
      <View style={styles.thumbnailsOverlay}>
        <View style={styles.thumbnailsContainer}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleThumbnailPress(index)}
              style={[
                styles.thumbnailWrapper,
                index === currentIndex && styles.thumbnailActive,
              ]}
            >
              <Image
                source={image}
                style={styles.thumbnail}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    height: 400,
  },
  thumbnailsOverlay: {
    position: "absolute",
    bottom: SIZES.padding,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  thumbnailsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: SIZES.base,
    borderRadius: SIZES.radius,
  },
  thumbnailWrapper: {
    width: 50,
    height: 50,
    marginHorizontal: SIZES.base / 2,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: SIZES.radius / 2,
    overflow: "hidden",
  },
  thumbnailActive: {
    borderColor: COLORS.primary,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
});
