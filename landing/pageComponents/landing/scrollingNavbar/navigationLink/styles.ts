import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

// eslint-disable-next-line import/no-anonymous-default-export
export default (theme: Theme) =>
  createStyles({
    active: {
      fontFamily: 'Poppins',
      cursor: 'pointer',
      color: theme.palette.primary.textMain,
      fontWeight: 500,
      padding: '0px',
      width: '100%',
      height: '100%',
    },
    inactive: {
      fontFamily: 'Poppins',
      cursor: 'pointer',
      color: theme.palette.primary.textMainDefault,
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
  active: {
    fontFamily: 'Poppins',
    cursor: 'pointer',
    color: 'primary.textMain',
    fontWeight: 500,
    padding: '0px',
    width: '100%',
    height: '100%',
  },
  inactive: {
    color: 'primary.textMainDefault',
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 400,
    padding: '0 1.8px',
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins'
  },
};
export { muiStyles };
