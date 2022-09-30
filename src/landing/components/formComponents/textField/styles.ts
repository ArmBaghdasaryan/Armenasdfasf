const muiStyles = {
  textField: {
    '& .MuiOutlinedInput-root': {
      p: 0,
    }
  },
  textFieldPadding: {
    '& .MuiOutlinedInput-root': {
      pr: 2,
    }
  },
  textArea: {
    '& .MuiOutlinedInput-root': {
      p: 0,
      paddingRight: 0,
      '& textarea': {
        pt: '12px',
        pb: '12px',
        pl: 2,
        pr: 2,
      }
    }
  },
  textAreaWithErrorIcon: {
    '& .MuiOutlinedInput-root': {
      pr: 2,
    }
  },
  eye: {
    '& > path': {
      color: '#878787',
      fill: '#878787'
    }
  }
}
export { muiStyles }