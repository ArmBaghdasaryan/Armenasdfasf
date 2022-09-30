import { createStyles } from '@mui/styles';

export default () => createStyles({});

const muiStyles = {
  button: {
    fontSize: '16px',
    fontWeight: 500,
    padding: '10px 32px',
    minWidth: 'fit-content',
    height: '44px',
    boxShadow: 'none',
    borderRadius: '4px',
  },
  primaryBtn: {
    color: 'white',
    backgroundColor: 'primary.btnMain',
    fontSize: '16px',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'primary.btnMainHover',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'primary.btnMainPressed',
    },
    '&:disabled': {
      boxShadow: 'none',
      backgroundColor: 'primary.btnMainDisabled',
      color: 'primary.disabledTxt',
    },
  },
  secondaryBtn: {
    color: 'secondary.btnMain',
    backgroundColor: 'white',
    fontSize: '16px',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'secondary.btnMainHover',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'secondary.btnMainPressed',
    },
    '&:disabled': {
      boxShadow: 'none',
      backgroundColor: 'secondary.btnMainDisabled',
      color: 'secondary.disabledTxt',
    },
  },
  defaultBtn: {
    color: 'white',
    backgroundColor: 'primary.main',
    fontSize: '16px',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#005997',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#00385e',
    },
    '&:disabled': {
      boxShadow: 'none',
      opacity: '0.6',
    },
  },
  small: {
    height: '40px'
  },
  medium: {
    height: '48px'
  },
  big: {
    height: '56px'
  }
};
export { muiStyles };
