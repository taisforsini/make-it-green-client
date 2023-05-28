import React, { useEffect, useState } from "react";
import { colors } from "../../resources/colors";
import { productStore } from "../../store/slices/productStore";
import { StoreState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import FlexBox from "../FlexBox/FlexBox";
import StyledText from "../StyledText/StyledText";

interface CounterProps {
  initialQuantity: number;
}

const Counter: React.FC<CounterProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(props.initialQuantity);
  const maxQuantity = 10;
  const dispatch = useDispatch();

  const selectedProduct = useSelector(
    (state: StoreState) => state.productStore.selectedProduct
  );

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handlePrice = () => {
    if (selectedProduct?.price)
      dispatch(productStore.setTotalPrice(selectedProduct.price * quantity));
  };

  useEffect(() => {
    handlePrice();
  }, [quantity]);

  return (
    <FlexBox alignItems="center" gap="16px">
      <Button
        color={colors.Secondary}
        disabled={quantity === 1}
        height="24px"
        onClick={decrement}
        size="icon"
        variant="contained"
        width="24px"
      >
        -
      </Button>
      <StyledText fontSize="14x">{quantity}</StyledText>
      <Button
        color={colors.Secondary}
        disabled={quantity === maxQuantity}
        height="24px"
        onClick={increment}
        size="icon"
        variant="contained"
        width="24px"
      >
        +
      </Button>
    </FlexBox>
  );
};

export default Counter;
