import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

import { useTranslation } from "react-i18next";


type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
  Ellora: undefined;
    Bazaar: undefined;
    BazaarDetail: { id: string };
};

type BazaarNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Bazaar"
>;



import React from "react";
import {
    Dimensions,
    FlatList,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

/* Removed invalid top-level useTranslation hook call */


const bottomTabs = [
  { nameKey: "home", icon: "home" },
  { nameKey: "explore", icon: "compass" },
  { nameKey: "bazaar", icon: "shopping-bag" }, // add Bazaar tab
  { nameKey: "profile", icon: "user" }
];


const bazaars = [
  {
    id: "1",
    name: "Jaipur Handicraft Bazaar",
    location: "Jaipur, Rajasthan",
    image: require("../../assets/images/jaipur_bazar.jpeg"),
  },
  {
    id: "2",
    name: "Dilli Haat",
    location: "Delhi",
    image: require("../../assets/images/dilli_haat.jpg"),
  },
  {
    id: "3",
    name: "Shilparamam",
    location: "Hyderabad, Telangana",
    image: require("../../assets/images/shilparamam.jpg"),
  },
  {
    id: "4",
    name: "Laad Bazaar",
    location: "Hyderabad, Telangana",
    image: require("../../assets/images/Laad_Bazaar.jpg"),
  },
];


export default function BazaarScreen() {
  const navigation = useNavigation<BazaarNavigationProp>();
  const { t } = useTranslation();

  const renderBazaar = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("BazaarDetail", { id: item.id })}
    >
      <ImageBackground source={item.image} style={styles.image} imageStyle={{ borderRadius: 15 }}>
        <View style={styles.overlay}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>
            <FontAwesome name="map-marker" size={16} color="#fff" /> {item.location}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4B2E83" />
      
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#6B1A1A" />
        </TouchableOpacity>
        <Text style={styles.header}>Cultural Bazaars</Text>
      </View>

    <FlatList
      data={bazaars}
      renderItem={renderBazaar}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 30, paddingTop: 10 }}
    />

    {/* Bottom Navigation Bar */}
    <View style={styles.bottomNav}>
      {bottomTabs.map((tab, index) => {
        const isActive = tab.nameKey === "bazaar"; // ✅ change "explore" to current page key
        return (
          <TouchableOpacity
            key={index}
            style={styles.bottomNavItem}
            activeOpacity={0.7}
            onPress={() => {
              if (tab.nameKey === "home") {
                navigation.navigate("Home");
              } else if (tab.nameKey === "explore") {
                navigation.navigate("Explore");
              } else if (tab.nameKey === "bazaar") {
                navigation.navigate("Bazaar");
              } else if (tab.nameKey === "profile") {
                navigation.navigate("Profile");
              }
            }}
          >
            <FontAwesome
              name={tab.icon}
              size={24}
              color="#F0E6D2"
              style={{ opacity: isActive ? 1 : 0.5 }}
            />
            <Text
              style={[
                styles.bottomNavText,
                { fontWeight: isActive ? "700" : "400", opacity: isActive ? 1 : 0.5 },
              ]}
            >
              {t(tab.nameKey)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0", // deep purple theme
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6B1A1A",
    textAlign: "center",
    flex: 1,
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: width - 32,
    height: 200,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  location: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 5,
  },
  bottomNav: {
  position: "absolute",
  bottom: 16,
  left: 16,
  right: 16,
  height: 72,
  backgroundColor: "#6B0A0A",
  borderRadius: 36,
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 8,
  marginBottom: '2%'
},
bottomNavItem: {
  alignItems: "center",
  justifyContent: "center"
},
bottomNavText: {
  color: "#F0E6D2",
  fontSize: 14,
  marginTop: 4,
  fontFamily: "System"
}

});