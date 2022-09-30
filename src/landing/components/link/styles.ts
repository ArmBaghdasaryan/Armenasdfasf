import { createStyles } from '@mui/styles';

export default () => createStyles({});

const muiStyles = {
  linkContainer: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid #CACACA',
    padding: {xs: '32px 24px', sm: '40px 32px'},
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'primary.main',
      '& > h1': {
        color: 'primary.main',
      }
    },
    '&:active': {
      borderColor: 'primary.main',
      backgroundColor: '#F3FAFF',
      '& > h1': {
        color: 'primary.main',
      }
    },
  },
  smallTitle: {
    fontFamily: 'Poppins',
    fontSize: {xs: '18px', sm: '24px', md: '24px', lg: '24px', xl: '24px'},
    lineHeight: {xs: '28px', sm: '32px', md: '32px', lg: '32px', xl: '32px'},
    fontWeight: {xs: 500, sm: 400, md: 400, lg: 400, xl: 400},
    color: 'primary.textColor1',
    mr: 2,
    alignSelf: 'center'
  },
};
export { muiStyles };
