import { globalStyle } from '@vanilla-extract/css';
//import 'sanitize.css';
// reset
globalStyle('*', {
  margin: '0',
  padding: '0',
  fontFamily: 'var(--font-pretendard), sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontSize: '18px',
});

globalStyle('body', {
  fontFamily: 'var(--font-pretendard), sans-serif',
});

globalStyle('h1', {
  margin: '0',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('button, input, select, textarea', {
  backgroundColor: 'transparent',
  border: '0',
});

globalStyle('button:focus, input:focus, select:focus, textarea:focus', {
  boxShadow: 'none',
  outline: 'none',
});

globalStyle('a, button', {
  cursor: 'pointer',
});

globalStyle('ul, ol', {
  paddingLeft: '0',
  listStyle: 'none',
});
