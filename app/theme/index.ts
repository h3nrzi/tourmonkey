'use client';
import localFont from 'next/font/local';
import { createTheme } from '@mui/material/styles';

const iransans = localFont({ src: '../../public/iranSans.ttf', display: 'swap' });

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: iransans.style.fontFamily
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'body2' },
          style: { fontSize: 11 }
        },
        {
          props: { variant: 'body3' },
          style: { fontSize: 9 }
        }
      ]
    }
  }
});

export default theme;
