import FlexBox from "../components/FlexBox/FlexBox";
import hero from "../assets/hero.svg";
import StyledText from "../components/StyledText/StyledText";

const Presentation = () => {
  return (
    <>
      <FlexBox
        width="100vw"
        height="700px"
        backgroundColor="#F0DCC5"
        justifyContent="center"
        flexDirection="column"
      >
        <FlexBox
          alignItems="center"
          alignSelf="center"
          justifyContent="space-between"
          width="1128px"
        >
          <FlexBox
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <StyledText
              color="#416B66"
              fontSize="48px"
              fontWeight="700"
              lineHeight="150%"
            >
              Make it green
            </StyledText>
            <StyledText
              lineHeight="150%"
              color="#416B66"
              width="465px"
              fontSize="16px"
              fontWeight="500"
            >
              A MakeItGreen veio para democratizar a compra e a venda de
              créditos de carbono no Brasil. Nosso objetivo é diminuir
              burocracias e tornar o mercado sustentável acessível para todos
            </StyledText>
          </FlexBox>
          <img src={hero} width={470} height={320} />
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Presentation;
