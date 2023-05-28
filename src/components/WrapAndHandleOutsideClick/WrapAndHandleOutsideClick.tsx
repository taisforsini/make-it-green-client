import { FunctionComponent, ReactNode, useRef } from "react";
import useOutsideClick from "./useOutsideClick";

export interface WrapAndHandleOutsideClickProps {
  onOutsideClick: () => void;
  children: ReactNode;
}

const WrapAndHandleOutsideClick: FunctionComponent<
  WrapAndHandleOutsideClickProps
> = (props) => {
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, props.onOutsideClick);

  return <div ref={wrapperRef}>{props.children}</div>;
};

export default WrapAndHandleOutsideClick;
