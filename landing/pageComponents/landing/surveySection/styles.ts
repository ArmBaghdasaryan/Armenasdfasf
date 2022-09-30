const muiStyles = {
  container: {
    padding: { xs: '100px 32px', sm: '100px 32px', md: '100px 32px', lg: '120px', xl: '120px' },
  },
  main: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
    mt: '56px',
  },
  left: {
    maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '472px', xl: '472px' },
    width: { xs: '100%', sm: '100%', md: '100%', lg: '45%', xl: '45%' },
    display: 'flex',
    flexDirection: 'column',
    mr: 6
  },
  bigTitle: {
    fontFamily: 'Poppins',
    fontSize: {xs: '44px', sm: '56px', md: '56px', lg: '56px', xl: '56px'},
    lineHeight: {xs: '56px', sm: '64px', md: '64px', lg: '64px', xl: '64px'},
    fontWeight: 700,
    color: 'primary.textColor1',
    alignSelf: 'start',
  },
  title: {
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
    color: 'primary.main',
  },
  right: {
    width: { xs: '100%', sm: '100%', md: '100%', lg: '55%', xl: '55%' },
    display: 'flex',
    flexDirection: 'column',
    mt: { xs: '40px', sm: '40px', md: '48px', lg: 0, xl: 0 },
    '& .link1': {
      borderBottom: 'none'
    },
    '& .link1:hover + .link2': {
      borderTop: 'none',
    },
  },
  linkStyle: {
    '&:hover': {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'primary.main',
      '& > h1': {
        color: 'primary.main',
      }
    },
  },
  borderRadiusBottom: {
    borderRadius: '4px 4px 0px 0px',
  },
  borderRadiusTop: {
    borderRadius: '0px 0px 4px 4px',
  },
};
export { muiStyles };
