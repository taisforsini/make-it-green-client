import { StoreState } from "../store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExplanationSection from "../containers/ExplanationSection";
import FlexBox from "../components/FlexBox/FlexBox";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Presentation from "../containers/Presentation";
import ProductSection from "../containers/ProductSection";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const productData = useSelector((state: StoreState) => state.productStore);

  const getContent = () => {
    return isLoading ? (
      <FlexBox
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100vw"
      >
        <Loader />
      </FlexBox>
    ) : (
      <>
        <Header />
        <Presentation />
        <ExplanationSection />
        <ProductSection />
        <FlexBox height="200px">
          <></>
        </FlexBox>
      </>
    );
  };

  useEffect(() => {
    if (productData.products.length) setIsLoading(false);
  }, [productData.products]);

  return <>{getContent()}</>;
};

export default Home;
