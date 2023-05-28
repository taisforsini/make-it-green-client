import React, { FunctionComponent, ReactNode } from "react";
import { Span } from "./styled_text_style";

export interface StyledTextProps {
  children: ReactNode;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  color?: string;
  display?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  overflow?: string;
  textOverflow?: string;
  whiteSpace?: string;
  width?: string;
  maxWidth?: string;
  onClick?: (ev: React.MouseEvent<HTMLSpanElement>) => void;
  cursor?: string;
  textDecoration?: string;
  lineHeight?: string;
  opacity?: number;
}

const StyledText: FunctionComponent<StyledTextProps> = (props) => {
  return <Span {...props}>{props.children}</Span>;
};

export default StyledText;
