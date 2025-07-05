import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
// import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  paddingLeft: '21.222rem',
  paddingRight: '400px',
});

export const wrapper = style({
  maxWidth: '1038px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  // alignItems: 'start',
});

export const title = style({
  fontSize: vars.fonts.title3,
  fontWeight: '700',
  marginTop: '86px',
  marginBottom: '20px',
});

export const flexRow = style({
  gap: '24px',
  display: 'flex',
});

export const card = style({
  padding: '18px 24px',
});
export const clubName = style({
  fontSize: vars.fonts.title3,
  fontWeight: '600',
});
