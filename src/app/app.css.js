import { globalStyle } from "@vanilla-extract/css";
import { variable } from "./variables.css";

const globalStyles = [
    globalStyle(':root', {
        color: variable.white,
      }),
      globalStyle('*', {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        WebkitFontSmoothing: 'antialiased',
        outline: 'none',
      }),
      globalStyle('html', {
        fontSize: '62.5%',
      }),
      globalStyle('body', {
        fontSize: '1rem',
        backgroundColor: variable.grayScale[100],
        "&::-webkit-scrollbar": {
            backgroundColor: 'rgba(246,122,203,.1)',
            height: '.3rem',
            width: '.3rem'
        },
        '&::webkit-scrollbar-thumb': {
            backgroundColor: variable.pink,
            borderRadius: '.5rem'
        },
      }),
      globalStyle('img', {
        maxWidth: '100%',
        display: 'block',
      }),
      globalStyle('a', {
        display: 'block',
        textDecoration: 'none',
        fontSize: '1.8rem',
        color: variable.purple,
      }),
      globalStyle('p li', {
        color: variable.grayScale[300]
      }),
      globalStyle('button', {
        all: 'unset',
        border: 0,
        cursor: 'pointer',
      }),
      globalStyle('ul', {
        listStyle: 'none',
      }),
      globalStyle('ul li', {
        fontSize: '1.8rem',
      }),
      globalStyle('.none', {
        display: 'none',
      }),
      globalStyle('.container', {
        width: '100%',
        padding: '0 1.5rem',
        maxWidth: '124.6rem',
        margin: '0 auto',
      }),
      globalStyle('h1, h2, h3, h4, h5, h6', {
        fontWeight: 600,
        lineHeight: variable.lineHeight.short,
      }),
      globalStyle('p', {
        lineHeight: variable.lineHeight.base,
      }),
      globalStyle('.category', {
        fontWeight: 600,
        fontSize: '1.4rem',
        lineHeight: '105%',
        textTransform: 'uppercase',
        color: variable.pink,
      })
]

const headingStyles = [
    { tag: 'h1', fontSize: '4rem' },
    { tag: 'h2', fontSize: '3.2rem' },
    { tag: 'h3', fontSize: '2.8rem' },
    { tag: 'h4', fontSize: '2.4rem' },
    { tag: 'h5', fontSize: '2rem' },
    { tag: 'h6', fontSize: '1.8rem' },
];

headingStyles.forEach(style => {
    globalStyle[style.tag] = { fontSize: style.fontSize };
});

for (const selector in globalStyle) {
    globalStyle(selector, globalStyle[selector]);
}