import { colors } from "../resources/colors";
import { StoreState } from "../store";
import { TextField, ThemeProvider } from "@mui/material";
import { theme } from "../components/Form/Form";
import { userStore } from "../store/slices/userStore";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button/Button";
import FlexBox from "../components/FlexBox/FlexBox";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";
import React, { FC, useEffect, useState } from "react";
import StyledText from "../components/StyledText/StyledText";
import user_api from "../services/user_api";

interface UpdateUserDataModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
}

const UpdateUserDataModal: FC<UpdateUserDataModalProps> = (props) => {
  const userData = useSelector((state: StoreState) => state.userStore);
  const [cpf, setCpf] = useState<string>(userData.cpf);
  const [email, setEmail] = useState<string>(userData.email);
  const [fullName, setFullName] = useState<string>(userData.name);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
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
      await user_api.updateUser({
        name: fullName,
        email,
        cpf,
      });
      dispatch(userStore.setCpf(cpf));
      dispatch(userStore.setEmail(email));
      dispatch(userStore.setName(fullName));
      setSuccess(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => setSuccess(false), 2000);
  }, [success]);

  return (
    <Modal
      onOutsideClick={() => props.setModalOpen(false)}
      open={props.modalOpen}
      width="500px"
    >
      <StyledText
        color={colors.Purple}
        fontSize="21px"
        fontWeight="700"
        lineHeight="150%"
      >
        Alterar dados
      </StyledText>
      <FlexBox flexDirection="column" gap="24px" marginTop="24px">
        <ThemeProvider theme={theme}>
          <TextField
            color="primary"
            defaultValue={fullName}
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
            color="primary"
            defaultValue={email}
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
            color="primary"
            defaultValue={cpf}
            id="outlined-basic"
            label="CPF"
            required
            type="text"
            variant="outlined"
            onChange={(event) => {
              event.target.value = cpfMask(event.target.value);
              setCpf(event.currentTarget.value);
            }}
            disabled
          />
        </ThemeProvider>
        <Button
          borderRadius="4px"
          color={colors.Secondary}
          disabled={disableButton}
          margin="0 0 0 38px"
          onClick={handleSubmit}
          variant="contained"
          width="328px"
        >
          {isLoading ? <Loader size="16px" /> : "Enviar"}
        </Button>

        {success && (
          <StyledText alignSelf="center">
            Dados atualizados com sucesso :)
          </StyledText>
        )}
      </FlexBox>
    </Modal>
  );
};

export default UpdateUserDataModal;
