import { FC, useEffect } from "react";
import { Product } from "../store/slices/productStore/type";
import { productStore } from "../store/slices/productStore";
import { StoreState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import FlexBox from "../components/FlexBox";
import product_api from "../services/product_api";
import Section from "../components/Section/Section";

const ProductSection: FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: StoreState) => state.productStore.products
  );

  const getProducts = async () => {
    const fetchedProducts = await product_api.getProducts();
    if (fetchedProducts) {
      dispatch(productStore.setAvailableProducts(fetchedProducts));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const cards = products?.map((product: Product) => {
    return {
      createdAt: new Date(product.createdAt),
      price: product.price,
      soldAmount: product.soldAmount,
      subtitle: product.desc,
      title: product.vendor.name,
    };
  });

  const bestSellers = [...cards].sort(
    (a, b) => (b.soldAmount || 0) - (a.soldAmount || 0)
  );

  const mostRecent = [...cards].sort(
    (a, b) => a.createdAt.getDate() - b.createdAt.getDate()
  );

  return (
    <>
      <FlexBox marginTop="64px" justifyContent="center">
        <Section title="Mais recentes" cards={mostRecent} />
      </FlexBox>
      <FlexBox marginTop="64px" justifyContent="center">
        <Section title="Mais vendidos" cards={bestSellers} />
      </FlexBox>
    </>
  );
};

export default ProductSection;
