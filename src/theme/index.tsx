import { createTheme } from "@mui/material"
import SFProDisplayMedium from "../../public/assets/fonts/SF-Pro-Display-Medium.woff"

export const theme = createTheme({
  typography: {
    fontFamily: "SFProDisplay",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SFProDisplay';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('SFProDisplay'), local('SF-Pro-Display-Medium'), url(${SFProDisplayMedium}) format('woff');
        }
      `,
    },
  },
})
