import styled from "styled-components";

interface Props {
  alignSelf?: string;
  color?: string;
  cursor?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  margin?: string;
  maxWidth?: string;
  opacity?: number;
  overflow?: string;
  padding?: string;
  textAlign?: string;
  textDecoration?: string;
  textOverflow?: string;
  whiteSpace?: string;
  width?: string;
}

const Span = styled("span")<Props>`
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf}`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) =>
    props.fontSize && `font-size: clamp(.75rem, ${props.fontSize}, 2.5rem)`};
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.overflow && `overflow: ${props.overflow}`};
  ${(props) => props.textOverflow && `text-overflow: ${props.textOverflow}`};
  ${(props) => props.whiteSpace && `white-space: ${props.whiteSpace}`};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  font-family: "Comfortaa", cursive;
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration}`};
  ${(props) => props.cursor && `cursor: ${props.cursor}`};
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight}`};
  ${(props) => props.opacity && `opacity: ${props.opacity}`};
`;

export { Span };
