import Box from "components/box/Box";
import styled from "styled-components";

const Wrapper = styled(Box)`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  max-width: ${({ theme }) => theme.sizes.desktop}px;
  overflow: hidden;
`;

export default Wrapper;
