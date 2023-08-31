import { createTheme } from "@mui/material"
import SFProDisplayMedium from "/fonts/SF-Pro-Display-Medium.woff"

export const theme = createTheme({
  palette: {
    primary: {
      light: "#9fdc8a",
      main: "#7E9C8C",
    },
    secondary: {
      light: "#f9eda1",
      main: "#efd94a",
    },
  },
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
        li {
          list-style-type: none;
          cursor: pointer;
        }
      `,
    },
  },
})
