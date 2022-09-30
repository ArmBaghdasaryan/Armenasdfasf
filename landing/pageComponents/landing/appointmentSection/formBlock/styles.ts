const muiStyles = {
  root: {
    background: 'white',
    minHeight: 'fit-content',
    borderRadius: '8px',
    padding: { xs: '24px', sm: '40px' },
    typography: 'body1',
    fontFamily: 'Poppins'
  },
  stepper: {
    minWidth: '275px',
    mt: 4,
  },
  step: {
    mr: 1,
    padding: 0,
  },
  stepButtonActive: {
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'primary.main',
  },
  title: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 500,
    fontFamily: 'Poppins',
  },
  submitBtn: {
    width: '100%',
    color: 'white',
    fontSize: '16px',
    mr: 1,
    mb: { xs: 2, sm: 0 },
    mt: 4
  },
  stepButton: {
    display: 'flex',
    position: 'relative',
    cursor: 'pointer',
    minHeight: '24px',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'primary.textMainDefault',
    alignItems: 'start'
  },
  stepNumber: {
    fontSize: '10px',
    fontWeight: 600,
    lineHeight: '16px',
    position: 'absolute',
    left: '5.1px',
    color: 'primary.textMainDefault',
    top: '2px'
  },
  activeStepNumber: {
    color: 'primary.main'
  },
  stepLabel: {
    ml: 1,
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '16px',
    color: 'primary.textMainDefault',
    textAlign: 'center'
  },
  stepLabelActive: {
    color: 'primary.main'
  }
};
export { muiStyles };
