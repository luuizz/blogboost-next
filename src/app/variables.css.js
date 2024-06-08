import { createGlobalTheme } from '@vanilla-extract/css';

export const variable = createGlobalTheme(':root', {
    pink: '#F67ACB',
    purple: '#5B1FA6',
    grayScale: {
        100: '#050110',
        200: '#0F0C1B',
        300: '#3F3D49',
        400: '#57555F',
        500: '#ACB4BF',
        alpha5: '153, 149, 166',
    },
    darkScale: '#1C162E',
    white: '#fff',
    black: '#000',
    headerHeight: '8rem',
    lineHeight: {
      short: '120%',
      base: '150%',
    },
  });