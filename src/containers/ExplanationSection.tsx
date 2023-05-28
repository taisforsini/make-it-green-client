import FlexBox from "../components/FlexBox/FlexBox";
import plant from "../assets/plant.svg";
import StyledText from "../components/StyledText/StyledText";

const ExplanationSection = () => {
  return (
    <>
      <FlexBox
        width="100vw"
        height="700px"
        justifyContent="center"
        flexDirection="column"
      >
        <FlexBox
          alignItems="center"
          alignSelf="center"
          justifyContent="space-between"
          width="1128px"
          marginTop="112px"
        >
          <FlexBox
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <StyledText
              color="#F0DCC5"
              fontSize="24px"
              width="520px"
              fontWeight="600"
              lineHeight="150%"
            >
              A MANEIRA MAIS SIMPLES DE COMPRAR
            </StyledText>
            <StyledText
              color="#416B66"
              fontSize="48px"
              fontWeight="700"
              lineHeight="150%"
            >
              CRÉDITO DE CARBONO
            </StyledText>
            <StyledText
              lineHeight="150%"
              color="#416B66"
              width="465px"
              fontSize="16px"
              fontWeight="500"
            >
              Contamos com fornecedores verificados e regularizados, garantindo
              confiança dos títulos de crédito de carbono além da transparência
              com os preços e processo de venda.
            </StyledText>
          </FlexBox>
          <img src={plant} />
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default ExplanationSection;
