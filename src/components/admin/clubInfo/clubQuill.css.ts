import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
});

export const buttonContainer = style({});

export const buttonIntro = style({
  width: '50%',
  textAlign: 'center',
  padding: '22px 0',
  backgroundColor: '#CAE0FF',
  borderRadius: '6px 6px 0px 0px',
  fontSize: '18px',
  fontWeight: '700',
});

export const buttonNotice = style({
  width: '50%',
  textAlign: 'center',
  padding: '22px 0',
  backgroundColor: '#EEEEF0',
  borderRadius: '6px 6px 0px 0px',
  color: '#55637D',
  fontSize: '18px',
});
