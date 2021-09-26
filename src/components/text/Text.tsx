import { fontSizes, fontWeights } from 'lib/styles/theme';
import styled from 'styled-components';
import {
  color,
  space,
  layout,
  typography,
  position,
  textShadow,
  style,
} from 'styled-system';

export const whiteSpace = style({
  prop: 'whiteSpace',
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

export const H1 = (props) => {
  const H1Text = () => <Text as="h1" fontSize={8} {...props} />;

  return <H1Text />;
};
export const H2 = (props) => {
  const H2Text = () => <Text as="h2" fontSize={7} {...props} />;

  return <H2Text />;
};
export const H3 = (props) => {
  const H3Text = () => <Text as="h1" fontSize={6} {...props} />;

  return <H3Text />;
};
export const H4 = (props) => {
  const H4Text = () => <Text as="h1" fontSize={5} {...props} />;

  return <H4Text />;
};
export const H5 = (props) => {
  const H5Text = () => <Text as="h1" fontSize={4} {...props} />;

  return <H5Text />;
};
export const H6 = (props) => {
  const H6Text = () => <Text as="h1" fontSize={3} {...props} />;

  return <H6Text />;
};
