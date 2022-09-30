import { createTheme, PaletteOptions, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // eslint-disable-next-line
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
    textColor1?: string;
    textColor2?: string;
    textColor3?: string;
    textColor4?: string;
    textColor5?: string;
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
    lightBorder?: string;
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
    lightBorder?: string;
  }
}

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
  testColor?: string;
}

const Default = (): DefaultPaletteOptions => {
  return {
    primary: {
      main: '#004B7F',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
      errorBG: '#faeae8',
      warningBG: '#FFF9D0',
      successBG: '#d6ffdd',
      infoBG: '#e7f3ff',
      btnBorderColor: '#f2f6fa',
      textColor1: '#1D1D1B',
      textColor2: '#6D6D6D',
      textColor3: '#B4B4B4',
      textColor4: '#B0CFE6',
      btnMain: '#E5AF6C',
      btnMainHover: '#ECC18B',
      btnMainPressed: '#DE9841',
      btnMainDisabled: '#F3D4AD',
      disabledTxt: '#FAE7D0',
      textMainDefault: '#696969',
      textMain: '#004B7F',
      textMainHover: '#2176B1',
      textMainPressed: '#002E4E',
      dividerBG: '#CACACA',
      lightBorder: '#E0E0E0'
    },
    secondary: {
      main: '#E5AF6C',
      error: '#f44336',
      warning: '##ffcf40',
      success: '#00ff2a',
      info: '#096C7C',
      errorBG: '#faeae8',
      warningBG: '#fffa00',
      successBG: '#00ff9f',
      infoBG: '#e7f3ff',
      btnBorderColor: '#f2f6fa',
      textColor1: '#3D3D3D',
      textColor2: '#6D6D6D',
      textColor3: '#B4B4B4',
      textColor4: '#B0CFE6',
      btnMain: '#E5AF6C;',
      btnMainHover: '#FFF6EA',
      btnMainPressed: '#F8E1C5',
      btnMainDisabled: '#F3D4AD',
      disabledTxt: '#FAE7D0',
      textMainDefault: '#696969',
      textMain: '#004B7F',
      textMainHover: '#2176B1',
      textMainPressed: '#002E4E',
      dividerBG: '#CACACA',
      lightBorder: '#E0E0E0'
    },
  };
};

const defaultColors = Default();
const palette: PaletteOptions = {
  mode: 'light',
  ...defaultColors,
};

// Note: example how to customize default theme values
// Default theme
const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.themeDatePickerForLabel': {
            '& label': {
              marginTop: '4px'
            }
          },
          '&.themeDatePickerForLabelReverse': {
            '& label': {
              marginLeft: '36px'
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '1px solid #E0E0E0;',
        },
        input: {
          '&::placeholder': {
            color: '#878787',
            opacity: 1,
            fontFamily: 'Poppins',
          },
        },

        root: {
          '& .MuiInputBase-inputSizeSmall': {
            padding: '12.5px 16px'
          },
          '& .MuiInputBase-sizeSmall': {
            padding: '12.5px 16px'
          },
          fontFamily: 'Poppins',
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #6EA3C9'
            },
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #004B7F',
              boxShadow: '0px 0px 0px 3px rgba(0, 75, 127, 0.1)'
            },
          },
          '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #C62840',
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                boxShadow: '0px 0px 0px 2px rgba(198, 40, 64, 0.1)'
              },
            },
          },

        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          // borderRadius: '4px 4px 0 0'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.themeDrawerMenuItem': {
            '&:hover': {
              '& a, p': {
                color: '#2176B1',
              },
              backgroundColor: 'inherit',
            },
            '&:active': {
              backgroundColor: 'inherit',
              '& a, p': {
                color: '#002E4E',
              },
            },
          },
          '&.themeDrawerActiveMenuItem': {
            '&:hover': {
              '& a, p': {
                color: '#004B7F',
              },
            },
          },
        }
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          borderRadius: '2px',
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: 400,
          fontFamily: 'Poppins',
          '& .MuiMenuItem-root': {
            '&:hover': {
              backgroundColor: '#F3FAFF',
            },
          },
          '& .MuiButtonBase-root.MuiMenuItem-root.Mui-selected': {
            '& .themeShowInSelected': {
              display: 'flex',
            },
            backgroundColor: '#F3FAFF',
          }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          fontWeight: 600,
          fontFamily: 'Poppins',
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          alignItems: 'end'
        },
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 24,
          fontWeight: 700,
          color: '#646681',
          fontFamily: 'Poppins',
        },
      },
    },
  },
});

export default theme;
