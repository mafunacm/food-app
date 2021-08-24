import React from "react";
import { DividerProps } from "../types/component-types/divider-props";
import { StyleSheet, Text, View } from "react-native";

const Divider = (props: DividerProps) => {
  return <View style={styles(props).lineStyle}>
    </View>;
};

const styles = (props?: DividerProps) => StyleSheet.create({
    lineStyle:{
        borderWidth: props?.thickness || 0.5,
        width: props?.color || "100%",
        borderColor: props?.color || 'black',
        opacity: 0.5,
        margin:10,
   }
});

export default Divider;