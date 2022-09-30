import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

// eslint-disable-next-line no-unused-vars
export default (theme: Theme) =>
  createStyles({

  })

const muiStyles = {
  select: {
    '& .MuiSelect-select': {
      whiteSpace: 'break-spaces!important',
      wordBreak: 'break-word',
    }
  },
  withStartIconStyle: {
    pl: 2,
    '& .MuiSelect-select': {
      pl: '4px'
    }
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    whiteSpace: 'break-spaces',
    wordBreak: 'break-word',
  }
}

export  {muiStyles};