const { default: styled } = require("styled-components");
import {
  color,
  space,
  layout,
  typography,
  position,
  flexbox,
  shadow,
  border,
} from "styled-system";

const Box = styled.div`
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${position}
  ${flexbox}
  ${shadow}
  ${border}
`;

export default Box;
