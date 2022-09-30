import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

// eslint-disable-next-line import/no-anonymous-default-export
export default (theme: Theme) =>
  createStyles({
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
  drawerRoot: {
    width: { xs: '100%', sm: '50%', md: '50%' },
  },
  drawerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '40px 32px',
    height: '100%',
  },
  drawerFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mobileLI: {
    lineHeight: '28px',
    fontSize: '18px',
    padding: '14px 8px',
    borderBottom: '1px solid #CACACA'
  },
  supportBtn: {
    marginRight: '16px',
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
    width: { xs: '45%', sm: '45%', md: '45%', lg: 'auto' },
    padding: { xs: '8px', sm: '8px', md: '8px', lg: '12px 24px' },
  },
  show: {
    display: 'flex',
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
