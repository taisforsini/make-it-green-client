import styled from "styled-components";
import { FlexBoxProps } from "./FlexBox";

const Container = styled("div")<FlexBoxProps>`
  display: ${(props) =>
    props.display ? props.display : props.container ? "block" : "flex"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-grow: ${(props) => props.flexGrow || 0};
  flex-basis: ${(props) => props.flexBasis || "auto"};
  flex-shrink: ${(props) => props.flexShrink || 0};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  ${(props) => props.flex && `flex: ${props.flex}`};
  align-items: ${(props) => props.alignItems || "stretch"};
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${(props) => props.margin && `margin: ${props.margin}`};
  padding: ${(props) => props.padding || "0"};
  padding-top: ${(props) => props.paddingTop};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.minHeight || "none"};
  min-width: ${(props) => props.minWidth || "none"};
  max-width: ${(props) => props.maxWidth || "none"};
  max-height: ${(props) => props.maxHeight || "none"};
  ${(props) => props.background && `background: ${props.background};`}
  background-color: ${(props) => props.backgroundColor || "transparent"};
  ${(props) =>
    props.backgroundImage && `background-image: url(${props.backgroundImage});`}
  ${(props) =>
    props.backgroundSize && `background-size: ${props.backgroundSize}`};
  border-radius: ${(props) => props.borderRadius || "0"};
  ${(props) =>
    props.backgroundPosition &&
    `background-position: ${props.backgroundPosition}`};
  border-radius: ${(props) => props.borderRadius || "0"};
  ${(props) => props.overflowY && `overflow-y: ${props.overflowY};`}
  ${(props) => props.overflowX && `overflow-x: ${props.overflowX};`}
  position: ${(props) => props.position || "unset"};
  outline: ${(props) => props.outline || ""};
  ${(props) => props.borderTop && `border-top: ${props.borderTop};`}
  ${(props) => props.borderBottom && `border-bottom: ${props.borderBottom};`}
  ${(props) => props.borderLeft && `border-left: ${props.borderLeft};`}
  ${(props) => props.borderRight && `border-right: ${props.borderRight};`}
  border: ${(props) => props.border || ""};
  z-index: ${(props) => props.zIndex || ""};
  gap: ${(props) => props.gap || ""};
  box-shadow: ${(props) => props.boxShadow || ""};
  ${(props) => props.top && `top: ${props.top}`};
  ${(props) => props.right && `right: ${props.right}`};
  ${(props) => props.bottom && `bottom: ${props.bottom}`};
  ${(props) => props.left && `left: ${props.left}`};
  ${(props) => props.transform && `transform: ${props.transform}`};
  ${(props) => props.cursor && `cursor: ${props.cursor}`};
  ${(props) => props.transition && `transition: ${props.transition}`};
  ${(props) => props.boxSizing && `box-sizing: ${props.boxSizing}`};
  ${(props) =>
    props.gridTemplateColumns &&
    `grid-template-columns: ${props.gridTemplateColumns};`}
  ${(props) => props.justifyItems && `justify-items: ${props.justifyItems};`}
  ${(props) => props.gridGap && `grid-gap: ${props.gridGap};`}
  ${(props) => props.pointerEvents && `pointer-events: ${props.pointerEvents};`}

    & > *:first-child {
      ${(props) =>
        (!props.flexDirection || props.flexDirection == `row`) &&
        `
        margin-left: 0;`}
      ${(props) =>
        props.gap &&
        props.flexDirection == `column` &&
        `
        margin-top: 0;`}
    }

    & > *:last-child {
      ${(props) =>
        (!props.flexDirection || props.flexDirection == `row`) &&
        `
        margin-right: 0;`}
      ${(props) =>
        props.gap &&
        props.flexDirection == `column` &&
        `
        margin-bottom: 0;`}
    }

    & > *:only-child {
      margin: 0px;
    }
  }
`;

export { Container };
