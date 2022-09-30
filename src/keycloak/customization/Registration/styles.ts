import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

// eslint-disable-next-line no-unused-vars
export default (theme: Theme) =>
  createStyles({
		root: {
         // backgroundColor: theme.palette.primary.error
		},
  });

  const muiStyles = {
    container: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: { xs: 0, sm: '0' },
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: { xs: 'none', sm: '1px 1px 8px 1px #ededed' },
      borderRadius: '4px',
      padding: '24px',
    },
  }
export {muiStyles};