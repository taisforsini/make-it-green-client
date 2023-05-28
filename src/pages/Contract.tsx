import { colors } from "../resources/colors";
import { Loader } from "../components/Loader/loader_style";
import { StoreState } from "../store";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../components/Button/Button";
import cart_api from "../services/cart_api";
import FlexBox from "../components/FlexBox/FlexBox";
import Header from "../components/Header/Header";
import StyledText from "../components/StyledText/StyledText";
import UpdateUserDataModal from "../containers/UpdateUserDataModal";

const Contract = () => {
  const productData = useSelector((state: StoreState) => state.productStore);
  const userData = useSelector((state: StoreState) => state.userStore);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const quantity =
    (productData.totalPrice || 0) / (productData.totalPrice || 0);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (userData.cpf && productData.selectedProduct?.title) {
      await cart_api.createCart({
        cpf: userData.cpf,
        quantity,
        productName: productData.selectedProduct?.title,
      });
      setSuccess(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <FlexBox width="100vw" height="720px" flexDirection="column">
        <FlexBox
          alignItems="center"
          alignSelf="center"
          justifyContent="space-between"
          width="1128px"
        >
          <StyledText
            color={colors.Primary}
            fontSize="32px"
            fontWeight="700"
            lineHeight="150%"
          >
            Resumo
          </StyledText>
          <Button variant="outlined" color={colors.Purple} size="tiny">
            Contrato de compra
          </Button>
        </FlexBox>

        <FlexBox
          alignSelf="center"
          flexDirection="column"
          gap="16px"
          marginTop="24px"
          width="564px"
        >
          <StyledText
            color={colors.Black}
            fontSize="21px"
            fontWeight="500"
            lineHeight="150%"
          >
            Você está comprando:
          </StyledText>
          <FlexBox
            backgroundColor={colors.Secondary}
            borderRadius="8px"
            justifyContent="space-between"
            padding="16px"
          >
            <FlexBox gap="4px">
              <StyledText
                color={colors.Black}
                fontSize="16px"
                fontWeight="600"
                lineHeight="150%"
              >
                {quantity} {quantity >= 1 ? "crédito " : "créditos "}
              </StyledText>
              <StyledText
                color={colors.Black}
                fontSize="16px"
                fontWeight="600"
                lineHeight="150%"
              >
                {" "}
                - {productData.selectedProduct?.title}{" "}
              </StyledText>
            </FlexBox>
            <StyledText
              color={colors.Black}
              fontSize="16px"
              fontWeight="600"
              lineHeight="150%"
            >
              R$ {productData.totalPrice},00{" "}
            </StyledText>
          </FlexBox>
        </FlexBox>

        <FlexBox
          alignSelf="center"
          flexDirection="column"
          gap="16px"
          marginTop="24px"
          width="564px"
        >
          <FlexBox alignItems="center" justifyContent="space-between">
            <StyledText
              color={colors.Black}
              fontSize="21px"
              fontWeight="500"
              lineHeight="150%"
            >
              Seus dados:
            </StyledText>
            <Button
              variant="outlined"
              size="tiny"
              onClick={() => setModalOpen(true)}
            >
              Alterar
            </Button>
          </FlexBox>
          <FlexBox
            backgroundColor={colors.Secondary}
            borderRadius="8px"
            flexDirection="column"
            gap="4px"
            padding="16px"
          >
            <StyledText
              color={colors.Black}
              fontSize="16px"
              fontWeight="600"
              lineHeight="150%"
            >
              Nome: {userData.name}
            </StyledText>
            <StyledText
              color={colors.Black}
              fontSize="16px"
              fontWeight="600"
              lineHeight="150%"
            >
              Email: {userData.email}
            </StyledText>
            <StyledText
              color={colors.Black}
              fontSize="16px"
              fontWeight="600"
              lineHeight="150%"
            >
              CPF: {userData.cpf}
            </StyledText>
          </FlexBox>
        </FlexBox>
        {success ? (
          <StyledText alignSelf="center" width="564px" margin="24px 0 0 0">
            Parabéns! Sua compra foi registrada com sucesso! :)
          </StyledText>
        ) : (
          <Button
            borderRadius="8px"
            margin="16px 0 0 0"
            onClick={handleSubmit}
            variant="contained"
            width="564px"
          >
            {isLoading ? (
              <Loader color={colors.Secondary} size="16px" />
            ) : (
              <StyledText color={colors.White}>Concluir compra</StyledText>
            )}
          </Button>
        )}
      </FlexBox>

      {modalOpen && (
        <UpdateUserDataModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default Contract;
