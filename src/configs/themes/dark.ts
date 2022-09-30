import { createTheme, PaletteOptions, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
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
    lightTextColor?: string;
    textColor1?: string;
    textColor2?: string;
    textColor3?: string;
    textColor4?: string;
    btnMain?: string;
    btnMainHover?: string;
    btnMainPressed?: string;
    btnMainDisabled?: string;
    disabledTxt?: string;
    textMainDefault?: string;
    textMain?: string;
    textMainHover?: string;
    textMainPressed?: string;
    dividerBG?: string;
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
    lightTextColor?: string;
    textColor1?: string;
    textColor2?: string;
    textColor3?: string;
    textColor4?: string;
    btnMain?: string;
    btnMainHover?: string;
    btnMainPressed?: string;
    btnMainDisabled?: string;
    disabledTxt?: string;
    textMainDefault?: string;
    textMain?: string;
    textMainHover?: string;
    textMainPressed?: string;
    dividerBG?: string;
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
      textColor1: '#3D3D3D',
      textColor2: '#6D6D6D',
      textColor3: '#B4B4B4',
      textColor4: '#B0CFE6',
      btnMain: '#E5AF6C;',
      btnMainHover: '#ECC18B',
      btnMainPressed: '#DE9841',
      btnMainDisabled: '#F3D4AD',
      disabledTxt: '#FAE7D0',
      textMainDefault: '#696969',
      textMain: '#004B7F',
      textMainHover: '#2176B1',
      textMainPressed: '#002E4E',
      dividerBG: '#CACACA',
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
      textColor1: '#3D3D3D',
      textColor2: '#6D6D6D',
      textColor3: '#B4B4B4',
      textColor4: '#B0CFE6',
      btnMain: '#E5AF6C',
      btnMainHover: '#FFF6EA',
      btnMainPressed: '#F8E1C5',
      btnMainDisabled: '#F3D4AD',
      disabledTxt: '#FAE7D0',
      textMainDefault: '#696969',
      textMain: '#004B7F',
      textMainHover: '#2176B1',
      textMainPressed: '#002E4E',
      dividerBG: '#CACACA',
    },
  };
};

const defaultColors = Default();
const palette: PaletteOptions = {
  mode: 'dark',
  ...defaultColors,
};

// Note: example how to customize default theme values
// Default theme
const theme = createTheme({
  palette,
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '1px solid #32302F',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          fontWeight: 600,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 24,
          fontWeight: 700,
          color: '#646681',
        },
      },
    },
  },
});

export default theme;
