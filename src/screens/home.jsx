
import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Card from "../reusable-components/card";
import PageContainer from "../reusable-components/page-container";
import { colors } from "../constants/colors";
import { navigationLabels } from "../constants/constants";
import { imageUrls } from "../constants/assets";
import Carousel from "../reusable-components/carousel";

const Home = ({ navigation }) => {
  return (
    <PageContainer style={styles.home}>
      <Carousel/>
      <Card style={styles.homeCard} onCardPress={() =>
        navigation.navigate(`${navigationLabels.FOODMENUS}`, { name: 'Menu' })
      } backGround="#00FFFF"
      backgroundImageUrl={imageUrls.cardBackground}>
        <Text>View menu</Text>
      </Card>
      <Card style={styles.home} onCardPress={() =>
        navigation.navigate(`${navigationLabels.PLACESTOEAT}`, { name: 'Places to eat' })
      }>
        <Text>Places to eat</Text>
      </Card>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  home:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start"
 },
 homeCard:{
   margin: 20
 }
});

export default Home;
