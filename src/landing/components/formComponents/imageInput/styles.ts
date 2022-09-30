const muiStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Poppins'
  },
  inputArea: {
    padding: '12px 16px',
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    color: 'primary.main',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  inputAreaDisabled: {
    opacity: 0.5
  },
  inputAreaError: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.error',
    borderRadius: '4px',
    padding: '12px 16px',
  },
  boxContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.lightBorder',
    borderRadius: '4px',
  },
  previewBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  previewBoxItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& img': {
      margin: '10px 0 10px 0',
      height: '164px',
      objectFit: 'cover',
    },
  },
  supportBtn: {
    width: 'fit-content',
    padding: '8px 16px',
    mt: 2,
    height: '40px',
    fontWeight: 400,
    fontSize: '14px',
  },
  loadingProgress: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.lightBorder',
    borderRadius: '4px',
    padding: '51px 30px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'primary.main',
  },
  dropImageDescription: {
    fontFamily: 'Poppins',
    marginTop: '20px',
    color: 'primary.textMainDefault',
    fontSize: '14px',
    lineHeight: '21px',
  },
  dropImageBrowse: {
    color: 'primary.main',
    marginLeft: '4px'
  },
  label: {
    fontFamily: 'Poppins',
    mb: 2,
    color: 'primary.textMainDefault',
    fontSize: '16px',
    width: '100%'
  }
}

export  {muiStyles};