const { default: styled } = require("styled-components");
import {
  color,
  space,
  layout,
  typography,
  position,
  textShadow,
  style,
} from "styled-system";

export const whiteSpace = style({
  prop: "whiteSpace",
});

const Text = styled.div`
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${position}
  ${textShadow}
  ${whiteSpace}
`;

export default Text;
// const Text = (props) => {
//   const { tag, children } = props;

//   const StyledText = styled(tag)`
//     ${color}
//     ${space}
//     ${layout}
//     ${typography}
//     ${position}
//   `;

//   return <StyledText {...props}>{children}</StyledText>;
// };
// export default Text;
