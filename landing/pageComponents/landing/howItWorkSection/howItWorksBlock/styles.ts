const muiStyles = {
  container: {
    mt: 7,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
  },
  gridWrapper: {
    display: 'grid',
    gridTemplateColumns: '4fr 6fr',
  },
  cardsBlock: {
    display: { xs: 'block', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' },
    flexDirection: 'row',
    flex: 2,
    marginTop: { xs: 6, sm: 6, md: 6, lg: '0', xl: '0' },
    justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'flex-start', lg: 'end', xl: 'end' },
    '&>div': {
      '&:last-child': {
        mr: 0,
        mb: 0,
      },
    },
    ml: { xs: 0, sm: 0, md: 0, lg: 6, xl: 6 },
  },
  smallTitle: {
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 500,
    color: 'primary.textColor4',
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: '56px',
    lineHeight: '64px',
    fontWeight: 700,
    color: 'white',
  },
  registerBtn: {
    width: '65%',
    color: 'white',
    fontSize: '16px',
    mr: 1,
    mb: { xs: 2, sm: 0 },
  },
  tutorialBtn: {
    width: '30%',
    backgroundColor: 'transparent',
    fontSize: '16px',
    padding: '12px 26px',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#005997',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#00385e',
    },
    '&:disabled': {
      boxShadow: 'none',
      opacity: '0.6',
    },
  },
  one: {
    gridColumn: { xs: '1 / span 3', sm: '1 / span 3', md: '1 / span 3', lg: 1, xl: 1 },
    gridRow: 1,
    maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '472px', xl: '472px' },
  },
  two: {
    gridColumn: { xs: '1 / span 3', sm: '1 / span 3', md: '1 / span 3', lg: 1, xl: 1 },
    gridRow: { xs: 4, sm: 4, md: 4, lg: 3, xl: 3 },
    width: { xs: '100%', sm: '66%', md: '66%', lg: '100%', xl: '100%' },
    mt: { xs: '56px', sm: '56px', md: '56px', lg: '90px', xl: '90px' },
    display: 'flex',
    justifyContent: 'space-between',
  },
  three: {
    gridColumn: {
      xs: '1 / span 2',
      sm: '1 / span 2',
      md: '1 / span 2',
      lg: '2 / span 2',
      xl: '2 / span 2',
    },
    gridRow: { xs: 3, sm: 3, md: 3, lg: '1 / span 3', xl: '1 / span 3' },
  },
  tutorialModal: {
    '& .MuiPaper-root': {
      width: {xs: '100%', sm: '100%', md: '100%', lg: '672px'},
      maxWidth: {xs: '100%', sm: '100%', md: '100%', lg: '672px'},
      borderRadius: 0,
      '& .MuiDialogContent-root': {
        padding: 0,
        border: 'none'
      }
    }
  }
};
export { muiStyles };
