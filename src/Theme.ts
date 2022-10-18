import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    colorConstants: {
      bgColor: string;
      bgBlueColor?: string;
      bgGrayColor?: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colorConstants?: {
      bgColor?: string;
      bgBlueColor?: string;
      bgGrayColor?: string;
    };
  }
}

const blackBackgroundColor = "#171717";
const seafoamColor = "#31BBAF";
const whiteColor = "#FFF";
const grayColor = "#202022";
const blueBackgroundColor = "linear-gradient(-45deg,#3088ee,black);";

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
    bgBlueColor: blueBackgroundColor,
    bgGrayColor: grayColor,
  },
});

export default theme;
