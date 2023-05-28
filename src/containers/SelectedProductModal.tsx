import { FC } from "react";
import { colors } from "../resources/colors";
import { StoreState } from "../store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../components/Button/Button";
import Counter from "../components/Counter/Counter";
import FlexBox from "../components/FlexBox";
import Modal from "../components/Modal/Modal";
import StyledText from "../components/StyledText";

interface SelectedProductModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
}

const SelectedProductModal: FC<SelectedProductModalProps> = (props) => {
  const productData = useSelector((state: StoreState) => state.productStore);
  const userData = useSelector((state: StoreState) => state.userStore);
  const navigate = useNavigate();

  const { selectedProduct, totalPrice } = productData;

  const handleClick = () => {
    if (!userData.email) {
      navigate("/cadastro");
    } else navigate("/resumo");
  };

  return (
    <Modal
      onOutsideClick={() => props.setModalOpen(false)}
      open={props.modalOpen}
      width="500px"
    >
      <FlexBox
        alignItems="center"
        flexDirection="column"
        gap="16px"
        justifyContent="center"
      >
        <StyledText
          color={colors.Purple}
          fontSize="21px"
          fontWeight="700"
          lineHeight="150%"
        >
          {selectedProduct?.title}
        </StyledText>
        <FlexBox alignItems="baseline" gap="8px">
          <StyledText
            color={colors.PrimaryDark}
            fontSize="14px"
            fontWeight="500"
            lineHeight="150%"
          >
            R$
          </StyledText>
          <StyledText
            color={colors.PrimaryDark}
            fontSize="36px"
            fontWeight="700"
            lineHeight="150%"
            margin="24px 0 0 0"
          >
            {totalPrice},00
          </StyledText>
        </FlexBox>
        <StyledText
          color={colors.Black}
          fontSize="16px"
          fontWeight="300"
          lineHeight="150%"
          textAlign="center"
          margin="0 0 8px 0"
        >
          {selectedProduct?.subtitle}
        </StyledText>
        <Counter initialQuantity={1} />
        <Button
          color={colors.Primary}
          margin="8px 0 0 0"
          onClick={handleClick}
          variant="contained"
          width="100%"
        >
          Comprar
        </Button>
      </FlexBox>
    </Modal>
  );
};

export default SelectedProductModal;
