import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

// eslint-disable-next-line import/no-anonymous-default-export
export default (theme: Theme) =>
  createStyles({
    active: {
      color: theme.palette.primary.textMain,
      cursor: 'pointer',
      fontWeight: 500,
      padding: '0px',
      width: '100%',
      height: '100%',
    },
    inactive: {
      color: theme.palette.primary.textMainDefault,
      cursor: 'pointer',
      fontWeight: 400,
      padding: '0 1.8px',
      width: '100%',
      height: '100%',
    },
    svg: {
      cursor: 'pointer',
      '&:hover': {
        '& > path': {
          // TODO for colorize SVG
          // color: theme.palette.primary.main,
          // fill: theme.palette.primary.main,
          // stroke: theme.palette.primary.main
        },
      },
    },
  });

const muiStyles = {
  header: {
    backgroundColor: 'white',
    color: 'primary.textColor1',
    padding: { xs: '12px 16px', sm: '20px 32px', md: '20px 32px', lg: '16px 32px', xl: '16px 32px' },
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
    height: { xs: '32px', sm: '40px', md: '40px', lg: '48px', xl: '48px' },
    minHeight: { xs: '32px', sm: '40px', md: '40px', lg: '48px', xl: '48px' },
  },
  barContent: {
    display: 'flex',
    alignItems: 'center',
  },
  ul: {
    listStyle: 'none',
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
    padding: '9px 0',
    margin: 0,
    width: '100%',
    justifyContent: 'space-between',
  },
  li: {
    lineHeight: '26px',
    fontSize: '18px',
    marginRight: '24px',
    '& > a': {
      '&:hover': {
        color: 'primary.textMain',
      },
      '&:active': {
        color: 'primary.textMainPressed',
      },
    },
  },
  supportBtn: {
    marginRight: '16px',
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
    width: { xs: '45%', sm: '45%', md: '45%', lg: 'auto' },
    padding: { xs: '8px', sm: '8px', md: '8px', lg: '12px 24px' },
  },
  loginBtn: {
    color: 'white',
    backgroundColor: 'primary.main',
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
    width: { xs: '45%', sm: '45%', md: '45%', lg: 'auto' },
    padding: { xs: '8px', sm: '8px', md: '8px', lg: '12px 24px' },
  },
};
export { muiStyles };
