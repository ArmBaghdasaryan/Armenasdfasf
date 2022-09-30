import { createTheme, PaletteOptions, SimplePaletteColorOptions } from '@mui/material/styles';

declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface SimplePaletteColorOptions {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
    errorBG?: string;
    warningBG?: string;
    successBG?: string;
    infoBG?: string;
    btnBorderColor?: string;
    textColor?: string;
  }

  // eslint-disable-next-line no-unused-vars
  interface PaletteColor {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
    errorBG?: string;
    warningBG?: string;
    successBG?: string;
    infoBG?: string;
    btnBorderColor?: string;
    textColor?: string;
  }
}

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
}

const Default = (): DefaultPaletteOptions => {
  return {
    primary: {
      main: '#72A0C0',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
      errorBG: '#faeae8',
      warningBG: '#FFF9D0',
      successBG: '#d6ffdd',
      infoBG: '#e7f3ff',
      btnBorderColor: '#f2f6fa',
      textColor: '#3D3D3D'
    },
    secondary: {
      main: '#72A0C0',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
      errorBG: '#faeae8',
      warningBG: '#FFF9D0',
      successBG: '#d6ffdd',
      infoBG: '#e7f3ff',
      btnBorderColor: '#f2f6fa',
      textColor: '#3D3D3D'
    },
  };
};

const defaultColors = Default();
const palette: PaletteOptions = {
  mode: 'dark',
  ...defaultColors
};

// Note: example how to customize default theme values
// Default theme
const theme = createTheme({
  palette,
  typography: {
    button: {
      textTransform: "none"
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "1px solid #32302F",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontWeight: 600
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 24,
          fontWeight: 700,
          color: '#646681'
        },
      },
    }
},
});

export default theme;
