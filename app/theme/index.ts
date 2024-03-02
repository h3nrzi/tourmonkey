'use client';
import localFont from 'next/font/local';
import { createTheme } from '@mui/material/styles';

const iransans = localFont({ src: '../../public/iranSans.ttf', display: 'swap' });

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: iransans.style.fontFamily
  }
});

export default theme;
