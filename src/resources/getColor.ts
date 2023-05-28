import { colors } from "./colors";

const getColor = (color: string | undefined): string => {
  switch (color) {
    case "primary":
      return colors.Primary;
    case "white":
      return colors.White;

    default:
      return color || colors.Black;
  }
};

export { getColor };
