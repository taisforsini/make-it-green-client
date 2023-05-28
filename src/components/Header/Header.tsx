import { colors } from "../../resources/colors";
import { useNavigate } from "react-router-dom";
import * as S from "./header_style";
import Button from "../Button/";
import FlexBox from "../FlexBox/FlexBox";
import Leaf from "../LeafIcon/Leaf";
import StyledText from "../StyledText/StyledText";

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <FlexBox width="1128px" justifyContent="space-between">
        <FlexBox width="276px" alignItems="center" cursor="pointer">
          <Leaf />
          <StyledText color={colors.Primary} onClick={() => navigate("/home")}>
            make it green
          </StyledText>
        </FlexBox>
        <FlexBox gap="16px">
          <Button variant="text" color={colors.Primary}>
            Blog
          </Button>
          <Button
            variant="contained"
            color={colors.Primary}
            onClick={() => navigate("/cadastro")}
          >
            Cadastro
          </Button>
        </FlexBox>
      </FlexBox>
    </S.Header>
  );
};

export default Header;
