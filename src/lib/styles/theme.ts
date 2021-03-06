export const colors = {
  grey: {
    _50: '#FAFAFA',
    _100: '#F5F5F5',
    _200: '#EEEEEE',
    _300: '#E0E0E0',
    _400: '#BDBDBD',
    _500: '#9E9E9E',
    _600: '#757575',
    _700: '#616161',
    _800: '#424242',
    _900: '#212121',
  },
  black: '#0e1111',
  white: '#ffffff',
  blue: '#007ce0',
  navy: '#004175',
};

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];
export const fontWeights = [100, 300, 400, 500, 700];

export const mediaSizes = {
  xsmall: 375,
  small: 768,
  medium: 1024,
  large: 1200,
  xlarge: 1440,
  xxlarge: 1920,
  xxxlarge: 2200,
};

export const breakpoints = Object.values(mediaSizes).map((size) => {
  return size + 'px';
});

export const radii = [2, 4, 8, 16, 32];

const theme = {
  colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints,
  fontSizes,
  fontWeights,
  sizes: breakpoints,
  radii,
};

export default theme;
