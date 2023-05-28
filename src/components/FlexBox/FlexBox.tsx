import React, { FunctionComponent, ReactNode } from "react";
import { Container } from "./flex_box_style";

export type FlexBoxDirections =
  | "row"
  | "column"
  | "column-reverse"
  | "row-reverse";
export interface FlexBoxProps {
  children: ReactNode;
  container?: boolean;
  display?: "flex" | "inline-flex" | "block" | "grid" | "none";
  flexDirection?: FlexBoxDirections;
  id?: string;
  cursor?: string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  alignSelf?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  background?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  flex?: string;
  flexBasis?: number;
  flexGrow?: number;
  flexShrink?: number;
  height?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  padding?: string;
  width?: string;
  backgroundSize?:
    | "auto"
    | "contain"
    | "cover"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  backgroundPosition?: string;
  borderRadius?: string;
  position?:
    | "absolute"
    | "fixed"
    | "inherit"
    | "initial"
    | "relative"
    | "static"
    | "sticky"
    | "unset";
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  bottom?: string;
  boxShadow?: string;
  boxSizing?: "border-box" | "content-box" | "inherit";
  className?: string;
  gap?: string;
  gridGap?: string;
  gridTemplateColumns?: string;
  justifyItems?: string;
  left?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  onClick?: (e?: any) => void;
  onMouseLeave?: (e?: any) => void;
  outline?: string;
  overflowX?: string;
  overflowY?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  pointerEvents?: "auto" | "none";
  ref?: React.RefObject<any>;
  right?: string;
  top?: string;
  transform?: string;
  transition?: string;
  zIndex?: string;
}

const FlexBox: FunctionComponent<FlexBoxProps> = (props) => {
  return (
    <Container id={props.id} ref={props.ref} {...props} onClick={props.onClick}>
      {props.children}
    </Container>
  );
};
export default FlexBox;
