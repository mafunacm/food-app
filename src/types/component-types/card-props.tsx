import { ViewStyle } from "react-native";
import { ComponentProps } from "./component-props";

export interface CardProps extends ComponentProps{
    children?:any,
    style?: ViewStyle,
    roundness?: any,
    elevation?: number,
    onCardPress?: any,
    backgroundImageUrl?: string
  }