import { createTheme } from "@mui/material"
import { blue } from "@mui/material/colors"
import SFProDisplayMedium from "../../public/assets/fonts/SF-Pro-Display-Medium.woff"

export const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[900],
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
