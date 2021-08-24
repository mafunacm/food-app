import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { PageContainerProps } from "../types/component-types/Container-props";

const PageContainer = (props: PageContainerProps) => {
  return <View style={[styles.container, props.style]}>
    {props.children}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: colors.mainFontColor,
  },
});

export default PageContainer;
