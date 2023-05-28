import { FunctionComponent, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as S from "./modal_style";
import WrapAndHandleOutsideClick from "../WrapAndHandleOutsideClick/WrapAndHandleOutsideClick";

export interface ModalProps {
  onOutsideClick: () => void;
  open?: boolean;
  children: ReactNode;
}

export interface ModalWrapperProps {
  padding?: string;
  width?: string;
  height?: string;
}

export interface ModalOverlayProps {
  blurIntensity?: string;
}

const Modal: FunctionComponent<
  ModalProps & ModalWrapperProps & ModalOverlayProps
> = (props) => {
  return (
    <>
      {props.open && (
        <>
          <S.ModalOverlay blurIntensity={props.blurIntensity} />
          <WrapAndHandleOutsideClick onOutsideClick={props.onOutsideClick}>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate3d(-50%,-50%,0)",
                  zIndex: 21,
                }}
              >
                <motion.div
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  exit={{ y: 30 }}
                >
                  <S.ModalWrapper
                    padding={props.padding}
                    height={props.height}
                    width={props.width || "calc(100vw - 2rem)"}
                  >
                    <S.BodyWrapper>{props.children}</S.BodyWrapper>
                  </S.ModalWrapper>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </WrapAndHandleOutsideClick>
        </>
      )}
    </>
  );
};

Modal.defaultProps = {
  blurIntensity: "4px",
};

export default Modal;
