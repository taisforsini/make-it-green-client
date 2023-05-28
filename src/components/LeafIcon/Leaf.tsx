import leaf from "../../assets/leaf.svg";
import FlexBox from "../FlexBox/FlexBox";

const Leaf = () => {
  return (
    <FlexBox width="50px">
      <img src={leaf} />
    </FlexBox>
  );
};

export default Leaf;
