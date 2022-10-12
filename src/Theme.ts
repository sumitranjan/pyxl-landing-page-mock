import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    colorConstants: {
      bgColor: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colorConstants?: {
      bgColor?: string;
    };
  }
}

const blackBackgroundColor = "#171717";
const seafoamColor = "#31BBAF";
const whiteColor = "#FFF";

const theme = createTheme({
  typography: {
    
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 900,
    },
    h6: {
      fontWeight: 600,
    },
    allVariants: {
      color: whiteColor,
    },
  },
  palette: {
    primary: {
      main: seafoamColor,
      contrastText: whiteColor,
    },
  },
  colorConstants: {
    bgColor: blackBackgroundColor,
  },
});

export default theme;
