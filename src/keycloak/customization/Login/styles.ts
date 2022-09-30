import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

// eslint-disable-next-line no-unused-vars
export default (theme: Theme) =>
  createStyles({
    form: {
      margin: 0,
    },
    root: {
      // backgroundColor: theme.palette.primary.error
    },
  });

const muiStyles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: { xs: 0, sm: '0' },
    maxWidth: { xs: '400px', sm: '400px', md: '400px', lg: '400px', xl: '400px' },
    // locally
    // marginTop: '120px',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: { xs: 'none', sm: '1px 1px 8px 1px #ededed' },
    borderRadius: '4px',
    padding: '24px',
    width: '100%',
  },
  errorBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: { xs: 'none', sm: '1px 1px 8px 1px #ededed' },
    borderRadius: '4px',
    padding: { xs: '12px', sm: '24px' },
    textAlign: 'center',
    width: '100%',
  },
};
export { muiStyles };
