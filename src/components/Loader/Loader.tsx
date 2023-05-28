import { Fragment } from "react";
import * as S from "./loader_style";

export interface LoaderProps {
  color?: string | undefined;
  size?: string | undefined;
}

const Loader = (props: LoaderProps) => {
  return (
    <Fragment>
      {" "}
      <S.MiniSpinnerWrapper size={props.size}>
        <S.MiniSpinner
          loaderColor={props.color}
          size={props.size}
          viewBox="0 0 50 50"
        >
          <S.Path cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
        </S.MiniSpinner>
      </S.MiniSpinnerWrapper>
    </Fragment>
  );
};

export default Loader;
