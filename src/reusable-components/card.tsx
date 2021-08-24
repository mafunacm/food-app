import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../constants/colors";
import { CardProps } from "../types/component-types/card-props";
import Divider from "./divider";

const Card = (props: CardProps) => {
  return (
    <Pressable onPress={props.onCardPress} style={[styles(props).container, props.style]}>
      {props.backgroundImageUrl ? (
        <ImageBackground
          source={{ uri: props.backgroundImageUrl }}
          resizeMode="cover"
          style={styles(props).image}>
          {props.children}
        </ImageBackground>) : (
        <View style={styles().centerContent}>{props.children}</View>
      )}
    </Pressable>
  );
};

const styles = (props?: CardProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: props?.backGroundColor || colors.mainBackground,
      borderRadius: props?.roundness || 5,
      elevation: props?.elevation || 5,
      width: props?.width || "97%",
      height: props?.height || "20%",
      shadowOpacity: 0.2,
      shadowRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      color: colors.mainFontColor,
    },
    centerContent:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: '100%',
      width: '100%'
    },
  });

export default Card;
