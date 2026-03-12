import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import {CustomDrawerContent} from '../../../components/drawer/CustomDrawerContent';
import React from 'react';
import Header from '@/components/layout/Header';

export default function HomeDrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          // On injecte ton header perso ici
          header: () => <Header />, 
          drawerStyle: {
            backgroundColor: '#F4F4F4',
            width: '75%', 
          },
          // Désactive le header par défaut d'Expo
          headerTitle: "",
        }}
>


        <Drawer.Screen
          name="index" // Correspond à app/(tabs)/home/index.tsx
        options={{
            drawerItemStyle: { display: "none" }, // Cache cet item du drawer
            drawerLabel: "Home",
            title: "Accueil",
        }}
        />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}