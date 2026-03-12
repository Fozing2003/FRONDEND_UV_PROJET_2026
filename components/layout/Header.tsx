import Colors from "@/constants/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const goToSearch = () => {
    router.push("/(tabs)/search/search");
  };

  return (
    <View style={[styles.wrapper, {  }]}>
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={toggleDrawer}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Augmente la zone tactile
          activeOpacity={0.7}
        >
          <Feather name="menu" size={24} color={Colors.text} />
        </TouchableOpacity>

        <Text style={styles.logo}>
          Ziaant<Text style={styles.logoAccent}>Cart</Text>
        </Text>

        <TouchableOpacity 
          onPress={goToSearch}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          activeOpacity={0.7}
        >
          <Ionicons name="search-outline" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.backgroundWhite,
    
    // On enlève marginTop négatif car on utilise safe area
  },
  container: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  logo: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text,
  },
  logoAccent: {
    color: Colors.primary,
  },
});