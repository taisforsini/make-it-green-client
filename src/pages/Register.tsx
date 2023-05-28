import { colors } from "../resources/colors";
import FlexBox from "../components/FlexBox/FlexBox";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";

const Register = () => {
  return (
    <>
      <Header />
      <FlexBox
        alignItems="center"
        backgroundColor={colors.Secondary}
        height="100vh"
        justifyContent="center"
        width="100vw"
      >
        <FlexBox justifyContent="center" alignItems="center">
          <Form />
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Register;
