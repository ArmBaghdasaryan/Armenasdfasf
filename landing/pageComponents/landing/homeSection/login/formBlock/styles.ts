const muiStyles = {
  tabBox: {
    background: 'white',
    borderRadius: '8px',
    padding: { xs: '24px', sm: '40px' },
    fontFamily: 'Poppins'
  },
  title: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 500,
    fontFamily: 'Poppins'
  },
  submitBtn: {
    width: '100%',
    color: 'white',
    fontSize: '16px',
    mr: 1,
    mb: { xs: 2, sm: 0 },
    mt: 4
  },
  oauthBtn: {
    padding: 0,
    width: '100%',
    fontSize: '16px',
    mr: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.dividerBG',
    borderRadius: '4px',
    color: 'primary.textColor1',
    '&:hover': {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.dividerBG',
      background: 'inherit'
    },
    '&:active': {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.dividerBG',
      background: 'inherit'
    },
  },
  divider: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
    fontFamily: 'Poppins',
    color: '#878787',
    margin: '16px 0',
    "&::before": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.dividerBG',
    },
    "&::after": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.dividerBG',
    },
    '& > span': {
      padding: '0 16px'
    }
  },
  redirectingText: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    color: 'primary.textMainDefault',
    fontFamily: 'Poppins',
    mr: '4px'
  },
  redirectingLink: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    color: 'primary.main',
    fontFamily: 'Poppins',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    alignSelf: 'center'
  },
  rememberBlock: {
    display: 'flex',
    alignItems: 'center'
  },
  forgotPassBlock: {
    display: 'flex',
    justifyContent: {xs: 'start', sm: 'end'},
    alignItems: 'center',
    paddingTop: {xs: '8px', sm: '0px'}
  },
  checkbox: {
    mr: '12px',
  },
  rememberText: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    color: 'primary.textColor1'
  },
  forgotPassText: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    color: 'primary.main',
    cursor: 'pointer'
  },
};
export { muiStyles };
