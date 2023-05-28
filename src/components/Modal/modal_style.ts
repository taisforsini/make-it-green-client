import { colors } from "../../resources/colors";
import { ModalWrapperProps, ModalOverlayProps } from "./Modal";
import styled from "styled-components";

const ModalWrapper = styled("div")<ModalWrapperProps>`
  ${(props) => props.height && `height: ${props.height};`}
  background-color: ${colors.White};
  border-radius: 16px;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 120px);
  padding: 48px;
  width: ${(props) => props.width || "200px"};
`;

const ModalOverlay = styled("div")<ModalOverlayProps>`
  backdrop-filter: ${(props) => `blur(${props.blurIntensity})`};
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
`;

const BodyWrapper = styled("div")<ModalWrapperProps>`
  bottom: 0px;
  overflow-x: auto;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: block;
    width: 5px;
  }
`;

export { BodyWrapper, ModalOverlay, ModalWrapper };
