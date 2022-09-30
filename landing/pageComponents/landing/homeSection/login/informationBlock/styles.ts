import { createStyles } from '@mui/styles';

export default () => createStyles({});

const muiStyles = {
  title: {
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: { xs: '60px', sm: '88px' },
    lineHeight: { xs: '60px', sm: '80px' },
    fontWeight: 700,
    color: 'white',
  },
  description: {
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: { xs: '32px', sm: '44px' },
    lineHeight: { xs: '40px', sm: '56px' },
    fontWeight: 700,
    mt: 2,
    color: 'white',
  }
};
export { muiStyles };
