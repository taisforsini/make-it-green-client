import { colors } from "../../resources/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StoreState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../store/slices/userStore";
import Button from "../Button/Button";
import FlexBox from "../FlexBox/FlexBox";
import Loader from "../Loader/Loader";
import user_api from "../../services/user_api";
import StyledText from "../StyledText/StyledText";
import TextField from "@mui/material/TextField";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.Primary,
    },
    secondary: {
      main: colors.Secondary,
    },
  },
});

const Form = () => {
  const [cpf, setCpf] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [fullName, setFullName] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const productData = useSelector((state: StoreState) => state.productStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const disableButton = !cpf || !fullName || !email;

  const cpfMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (fullName && email && cpf) {
      await user_api.createUser({
        name: fullName,
        email,
        cpf,
      });
      dispatch(userStore.setCpf(cpf));
      dispatch(userStore.setEmail(email));
      dispatch(userStore.setName(fullName));
      setSuccess(true);

      if (productData.selectedProduct) navigate("/contrato");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <FlexBox
      backgroundColor={colors.Primary}
      borderRadius="16px"
      flexDirection="column"
      height="506px"
      justifyContent="center"
      padding="59px 112px"
      width="654px"
    >
      <FlexBox flexDirection="column" gap="8px">
        <StyledText
          alignSelf="center"
          color={colors.Secondary}
          fontSize="24px"
          fontWeight="700"
          lineHeight="150%"
        >
          Crie sua conta
        </StyledText>
        <StyledText
          alignSelf="center"
          color={colors.Secondary}
          fontSize="16px"
          fontWeight="500"
          lineHeight="150%"
        >
          Preencha seus dados
        </StyledText>
      </FlexBox>
      <FlexBox flexDirection="column" gap="24px" marginTop="24px">
        <ThemeProvider theme={theme}>
          <TextField
            color="secondary"
            id="outlined-basic"
            label="Nome completo"
            required
            type="text"
            variant="outlined"
            onChange={(event) => {
              setFullName(event.currentTarget.value);
            }}
          />
          <TextField
            color="secondary"
            id="outlined-basic"
            label="Email"
            required
            type="text"
            variant="outlined"
            onChange={(event) => {
              setEmail(event.currentTarget.value);
            }}
          />
          <TextField
            color="secondary"
            id="outlined-basic"
            label="CPF"
            required
            type="text"
            variant="outlined"
            onChange={(event) => {
              event.target.value = cpfMask(event.target.value);
              setCpf(event.currentTarget.value);
            }}
          />
        </ThemeProvider>
        <Button
          borderRadius="4px"
          color={colors.Secondary}
          disabled={disableButton}
          margin="0 0 0 53px"
          onClick={handleSubmit}
          variant="contained"
          width="328px"
        >
          {isLoading ? <Loader size="16px" /> : "Enviar"}
        </Button>

        {success && (
          <StyledText alignSelf="center">
            Usuário criado com sucesso :)
          </StyledText>
        )}
      </FlexBox>
    </FlexBox>
  );
};

export default Form;
