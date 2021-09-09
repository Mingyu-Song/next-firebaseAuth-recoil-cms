import { mediaSizes } from './theme';

const media = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${mediaSizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
