import { FC, useState } from "react";
import { Card } from "../../store/slices/productStore/type";
import { colors } from "../../resources/colors";
import { productStore } from "../../store/slices/productStore";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import FlexBox from "../FlexBox/FlexBox";
import SelectedProductModal from "../../containers/SelectedProductModal";
import StyledText from "../StyledText/StyledText";

interface SectionProps {
  title: string;
  cards?: Card[];
}

const Section: FC<SectionProps> = (props) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClick = (product: Card) => {
    dispatch(productStore.setSelectedProduct(product));
    setModalOpen(true);
  };
  return (
    <>
      <FlexBox flexDirection="column" gap="24px" width="1128px">
        <StyledText
          alignSelf="center"
          color={colors.Purple}
          fontSize="24px"
          fontWeight="700"
        >
          {props.title.toLocaleUpperCase()}
        </StyledText>
        <FlexBox gap="24px">
          {props.cards?.map((card) => (
            <FlexBox
              alignItems="flex-start"
              backgroundColor={colors.Secondary}
              borderRadius="8px"
              flexDirection="column"
              gap="16px"
              height="320px"
              justifyContent="center"
              padding="24px"
              width="360px"
            >
              <StyledText
                color={colors.PrimaryDark}
                fontSize="16px"
                fontWeight="600"
                lineHeight="150%"
              >
                {card.title}
              </StyledText>
              <StyledText fontSize="14px" fontWeight="300" lineHeight="150%">
                {card.subtitle}
              </StyledText>
              <StyledText fontSize="18px" fontWeight="700" lineHeight="150%">
                {card.price ? `R$ ${card.price}` : ""}
              </StyledText>
              <Button
                color={colors.PrimaryDark}
                onClick={() => handleClick(card)}
                variant="contained"
              >
                Comprar
              </Button>
            </FlexBox>
          ))}
        </FlexBox>
      </FlexBox>
      <SelectedProductModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default Section;
