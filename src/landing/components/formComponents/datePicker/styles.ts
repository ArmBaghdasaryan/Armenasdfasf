import { createStyles } from '@mui/styles';

export default () =>
  createStyles({
    reverse: {
      flexDirection: "row-reverse",
      '& .MuiOutlinedInput-input': {
        paddingLeft: '14px'
      }
    },
    reverseError: {
      paddingLeft: 0,

    }
  });