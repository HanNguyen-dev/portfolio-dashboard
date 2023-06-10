import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

export const themeApp = createTheme({
  palette: {
    primary: {
      main: grey[900],
      light: grey[500],
      dark: grey[900],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export const typographText = {
  fontSize: "1.4rem",
  lineHeight: "1.8",
  fontFamily: "Garamond, Georgia, Times New Roman",
  pb: "1rem",
}