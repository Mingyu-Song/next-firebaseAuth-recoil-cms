import { css } from "styled-components";

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];
const fontWeights = [100, 300, 400, 500, 700];
export const sizes = {
  mobile: 0,
  tablet: 600,
  desktop: 1024,
};

export const breakpoints = ["600px", "1024px"];

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
const theme = {
  colors: {
    // black: "#007ce0",

    grey: {
      _50: "#FAFAFA",
      _100: "#F5F5F5",
      _200: "#EEEEEE",
      _300: "#E0E0E0",
      _400: "#BDBDBD",
      _500: "#9E9E9E",
      _600: "#757575",
      _700: "#616161",
      _800: "#424242",
      _900: "#212121",
    },
    black: "#0e1111",
    white: "#ffffff",
    blue: "#007ce0",
    navy: "#004175",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints,
  fontSizes,
  fontWeights,
  sizes,
  radii: [2, 4, 8, 16, 32],
};

export default theme;
