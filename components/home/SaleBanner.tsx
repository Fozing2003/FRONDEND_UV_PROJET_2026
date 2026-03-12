import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native';
import Colors from '@/constants/colors';

const { width } = Dimensions.get('window');

// ============================================================================
// TYPES
// ============================================================================
export interface Banner {
  id: string | number;
  title: string;
  percent: string;
  subtitle: string;
  buttonText: string;
  backgroundColor: string;
  imageUrl?: string; // Pour plus tard avec la BDD
  link?: string;     // Pour la navigation
}

// ============================================================================
// PROPS
// ============================================================================
interface SaleBannerProps {
  banners?: Banner[];           // Pour les données de la BDD
  onBannerPress?: (banner: Banner) => void;
  autoScrollInterval?: number;  // Temps entre chaque défilement
}

// ============================================================================
// COMPOSANT
// ============================================================================
export const SaleBanner: React.FC<SaleBannerProps> = ({ 
  banners: propBanners,
  onBannerPress,
  autoScrollInterval = 3000
}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Données par défaut (pour le test)
  const defaultBanners: Banner[] = [
    {
      id: 1,
      title: '#WINTER SALE',
      percent: '35% Off',
      subtitle: 'Discover our latest Products',
      buttonText: 'Shop Now',
      backgroundColor: Colors.primary,
    },
    {
      id: 2,
      title: '#SUMMER COLLECTION',
      percent: '50% Off',
      subtitle: 'Limited time offer',
      buttonText: 'Shop Now',
      backgroundColor: '#FF6B6B',
    },
    {
      id: 3,
      title: '#NEW ARRIVALS',
      percent: 'Up to 40% Off',
      subtitle: 'Check out the latest styles',
      buttonText: 'Explore',
      backgroundColor: '#4ECDC4',
    },
  ];

  // Utilise les props si fournies, sinon les données par défaut
  const banners = propBanners || defaultBanners;

  // Auto-défilement
  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % banners.length;
      scrollViewRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [activeIndex, banners.length, autoScrollInterval]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const handleBannerPress = (banner: Banner) => {
    if (onBannerPress) {
      onBannerPress(banner);
    } else {
      console.log('Banner pressed:', banner.id);
    }
  };

  if (!banners.length) return null;

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
      >
        {banners.map((banner) => (
          <TouchableOpacity
            key={banner.id}
            activeOpacity={0.9}
            onPress={() => handleBannerPress(banner)}
            style={[
              styles.banner,
              { backgroundColor: banner.backgroundColor, width }
            ]}
          >
            <Text style={styles.title}>{banner.title}</Text>
            <Text style={styles.percent}>{banner.percent}</Text>
            <Text style={styles.subtitle}>{banner.subtitle}</Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{banner.buttonText}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Indicateurs de page */}
      {banners.length > 1 && (
        <View style={styles.pagination}>
          {banners.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeIndex ? styles.activeDot : styles.inactiveDot
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

// ============================================================================
// STYLES
// ============================================================================
const styles = StyleSheet.create({
  container: {
    // PLUS DE MARGIN !!!
    width: '100%',
  },
  banner: {
    padding: 20,
    // PLUS DE BORDER RADIUS !!!
    // borderRadius: 12, ← SUPPRIMÉ
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 4,
  },
  percent: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800',
    marginVertical: 8,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    // PLUS DE BORDER RADIUS !!!
    // borderRadius: 25, ← SUPPRIMÉ
  },
  buttonText: {
    color: Colors.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 20,
  },
  inactiveDot: {
    backgroundColor: '#D3D3D3',
  },
});