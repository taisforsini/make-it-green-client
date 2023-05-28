import styled from "styled-components";
import { colors } from "../../resources/colors";
import { getColor } from "../../resources/getColor";
import { ButtonProps } from "./Button";

const colorTable = {
  primary: colors.Primary,
};

const darkColors = [colors.Primary, colors.PrimaryDark, "dark", colors.Purple];

interface IsizeTable {
  [p: string]: ButtonProps & Additional;
}

interface Additional {
  "border-radius"?: string;
  justifyContent?: string;
  alignItems?: string;
}

const sizeTable: IsizeTable = {
  default: {
    height: `48px`,
    width: ``,
    fontSize: `14px`,
    margin: ``,
    "border-radius": `16px`,
  },
  tiny: {
    height: `32px`,
    width: ``,
    fontSize: `12px`,
    fontWeight: `600`,
    margin: ``,
    "border-radius": `1rem`,
  },
  medium: {
    height: `48px`,
    width: ``,
    fontSize: `14px`,
    margin: ``,
    "border-radius": `16px`,
  },
  icon: {
    height: `48px`,
    width: `48px;`,
    fontSize: `14px`,
    margin: `0`,
    justifyContent: `center`,
    alignItems: `center`,
    "border-radius": `50%`,
  },
};

const isIconButton = (sizeVariant?: string): boolean =>
  sizeVariant?.includes("icon") || false;

const getSize = (size: ButtonProps["size"]) => {
  return size ? sizeTable[size] : sizeTable["default"];
};

const getFontWeight = (
  fontWeight: ButtonProps["fontWeight"],
  size: ButtonProps["size"]
) => {
  const fw = getSize(size);
  return `font-weight: ${fontWeight || fw.fontWeight || "bold"};`;
};

const getFontSize = (
  size: ButtonProps["size"],
  fontSize: ButtonProps["fontSize"]
) => {
  const sizeParams = getSize(size);
  return `font-size: ${fontSize || sizeParams.fontSize};`;
};

const getMargin = (
  size: ButtonProps["size"],
  margin: ButtonProps["margin"]
) => {
  const sizeParams = getSize(size);
  return `margin: ${margin ?? sizeParams.margin};`;
};

const getBorderRadius = (
  size: ButtonProps["size"],
  borderRadius: ButtonProps["borderRadius"]
) => {
  const sizeParams = getSize(size);
  return `border-radius: ${borderRadius ?? sizeParams["border-radius"]};`;
};

const getDimensions = (
  size: ButtonProps["size"],
  width: ButtonProps["width"],
  height: ButtonProps["height"]
) => {
  if (isIconButton(size)) return "";
  const sizeParams = getSize(size);
  return `
    width: ${width ?? sizeParams.width};
    height: ${height ?? sizeParams.height};
  `;
};

const getButtonColor = (
  color: ButtonProps["color"],
  disabled: ButtonProps["disabled"]
) => {
  if (disabled) {
    return colors.Black;
  }
  if (!color) return colors.Primary;

  switch (color) {
    case "primary":
      return colorTable[color];
    default:
      return getColor(color);
  }
};

const getContentColor = (
  color: ButtonProps["color"],
  disabled: ButtonProps["disabled"],
  variant: ButtonProps["variant"]
) => {
  if (disabled) {
    return colors.Black;
  }
  if (variant === "contained") {
    return color && darkColors.includes(color) ? colors.White : colors.Black;
  } else {
    return getButtonColor(color, disabled);
  }
};

const getJustifyContent = (
  variant: ButtonProps["variant"],
  size: ButtonProps["size"]
) => {
  const centerCondition =
    !variant || variant === "text" || size?.includes("icon");
  return `justify-content: ${centerCondition ? "center" : "space-between"};`;
};

const getButtonVariant = (
  variant: ButtonProps["variant"],
  disabled: ButtonProps["disabled"],
  color: ButtonProps["color"]
) => {
  const buttonColor = getButtonColor(color, disabled);
  const disabledColor = "transparent";
  if (!variant || variant === "text") {
    return `
      border: none;
      background-color: transparent; 
      font-weight: bold;
      &:disabled {
        color: ${disabledColor};
      }
    `;
  } else if (variant === "contained") {
    return `
      background-color: ${buttonColor};
      border: none;
      &:disabled {
        background-color: ${disabledColor};
      }
      &:hover {
        box-shadow: 1px 5px 14px rgba(0, 0, 0, 0.1);
        filter: brightness(0.98);
      }
    `;
  } else if (variant === "outlined") {
    return `
      background-color: transparent; 
      border: 1px solid;
      font-weight: bold;
      &:disabled {
        background-color: transparent;
        border: 2px solid ${disabledColor};
        color: ${disabledColor};
      }
      &:hover {
        background-color: ${buttonColor}26;
        border: 1px solid ${buttonColor};
        box-shadow: 1px 5px 14px rgba(0, 0, 0, 0.1);
      }
    `;
  }
};

const Button = styled("button")<ButtonProps>`
  ${(props) => getButtonVariant(props.variant, props.disabled, props.color)}
  ${(props) => getFontSize(props.size, props.fontSize)}
  ${(props) => getFontWeight(props.fontWeight, props.size)}
  ${(props) => getMargin(props.size, props.margin)}
  ${(props) => getBorderRadius(props.size, props.borderRadius)}
  ${(props) => getDimensions(props.size, props.width, props.height)}
  color: ${(props) =>
    getContentColor(props.color, props.disabled, props.variant)};
  padding: 0;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: row;
  ${(props) => getJustifyContent(props.variant, props.size)}
  cursor: pointer;
  &:disabled {
    pointer-events: none;
  }
  -webkit-tap-highlight-color: transparent;
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${(props) =>
    isIconButton(props.size) &&
    `
    max-width: ${props.width || sizeTable[props.size!].width};
    max-height: ${props.height || sizeTable[props.size!].height};
    &:before {
      content: "";
      display: inline-block;
      padding-top: 100%;
    }
  `};
`;

const buttonIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0px 8px 0px;
`;

const noIcon = styled.div`
  width: 25px;
`;

const marginX = (size?: string) => {
  if (isIconButton()) {
    return "8px";
  }
  return size === "tiny" ? "1rem" : "32px";
};

const buttonContent = styled.div<{ flex?: number; size?: string }>`
  flex: ${(props) => (props.flex ? props.flex : 1)};
  font-family: "Comfortaa", cursive;
  margin: 0px ${(props) => marginX(props.size)};
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export { Button, buttonIcon, buttonContent, noIcon, getContentColor };
