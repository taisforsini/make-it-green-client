import styled, { keyframes } from "styled-components";
import { colors } from "../../resources/colors";

export type LoaderProps = {
  loaderColor?: string | undefined;
  size?: string;
};

const loaderKeyFrame = keyframes`
0%,
80%,
100% {
  box-shadow: 0 1em 0 -1em;
}
40% {
  box-shadow: 0 1em 0 -.2em;
},
`;

const LoaderWrapper = styled("div")<LoaderProps>`
  display: inline-block;
  width: 3em;
  background: transparent;
  font-size: ${(props) => props.size || "30px"};
  text-align: center;
  position: relative;
  transition: 0.3s color, 0.3s border, 0.3s transform, 0.3s opacity;
`;

const Loader = styled("div")<LoaderProps>`
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  pointer-events: none;
  border-radius: 50%;
  animation-fill-mode: both;
  animation: ${loaderKeyFrame} 0.9s infinite ease-in-out;
  &:before,
  &:after {
    border-radius: 50%;
    animation-fill-mode: both;
    animation: ${loaderKeyFrame} 0.9s infinite ease-in-out;
  }
  color: ${(props) => props.color || colors.Primary};
  position: relative;
  transform: translateZ(0);
  animation-delay: -0.16s;
  top: -1em;
  &:before {
    right: 100%;
    animation-delay: -0.32s;
  }
  &:after {
    left: 100%;
  }
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: inherit;
    height: inherit;
  }
`;

const SpinnerWrapper = styled.div<{ size?: string }>`
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const MiniSpinnerWrapper = styled.div<{ size?: string }>`
  width: ${(props) => props.size || "36px"};
  height: ${(props) => props.size || "36px"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Path = styled.circle``;

const Spinner = styled("svg")<LoaderProps>`
  position: relative;
  top: 12.5px;
  left: 12.5px;
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};

  & ${Path} {
    stroke: ${(props) =>
      props.loaderColor ? props.loaderColor : colors.Primary};
    strokelinecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
const MiniSpinner = styled("svg")<LoaderProps>`
  position: relative;
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;

  & ${Path} {
    stroke: ${(props) =>
      props.loaderColor ? props.loaderColor : colors.Primary};
    strokelinecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export {
  LoaderWrapper,
  Loader,
  Spinner,
  MiniSpinner,
  Path,
  SpinnerWrapper,
  MiniSpinnerWrapper,
};
