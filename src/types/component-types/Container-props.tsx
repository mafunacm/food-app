import { ViewStyle } from "react-native";
import { ComponentProps } from "./component-props";


export interface PageContainerProps extends ComponentProps {
    children?:any,
    style?: ViewStyle
  }