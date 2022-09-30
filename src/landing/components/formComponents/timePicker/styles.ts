import { createStyles } from '@mui/styles';

// eslint-disable-next-line import/no-anonymous-default-export
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