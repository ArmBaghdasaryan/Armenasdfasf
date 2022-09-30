import { createStyles } from '@mui/styles';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => createStyles({});

const muiStyles = {
  footer: {
    fontFamily: 'Poppins',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'primary.main',
    height: '64px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 400,
    color: 'white'
  }
};
export { muiStyles };
