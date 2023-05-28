import { FunctionComponent, ReactNode } from "react";
import * as S from "./button_style";
import FlexBox from "../FlexBox";

export type PreDefinedSizes =
  | "icon"
  | "small-icon"
  | "medium-icon"
  | "med-icon"
  | "large-icon"
  | "default"
  | "full-width"
  | "full-width-with-borders"
  | "slim"
  | "tiny"
  | "small"
  | "medium"
  | "large";

export interface ButtonProps {
  children?: ReactNode;
  borderRadius?: string;
  className?: string;
  color?: string;
  disabled?: boolean | false;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  iconSize?: string;
  margin?: string;
  maxWidth?: string;
  minWidth?: string;
  name?: string;
  onClick?: (e?: any) => void;
  size?: PreDefinedSizes;
  type?: "submit" | "reset" | "button";
  variant?: "outlined" | "contained" | "text";
  whiteSpace?: string;
  width?: string;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <S.Button {...props} onClick={props.onClick} className={props.className}>
      <S.buttonContent size={props.size}>
        <FlexBox
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
        >
          {props.children}
        </FlexBox>
      </S.buttonContent>
    </S.Button>
  );
};

export default Button;
