const muiStyles = {
  tableCellAction: {
    cursor: 'pointer',
    paddingRight: '18px!important',
    textAlign: 'center',
    '& > svg': {
      marginTop: '4px',
      fontSize: '1.4rem'
    },
    '& > svg:hover': {
      background: 'rgba(61, 61, 61, 0.2)',
      borderRadius: '50%'
    },
  },
  tableCellItem: {
    wordBreak: 'break-word',
    fontFamily: 'Noto Sans',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    color: 'primary.textColor1',
  }
};
export { muiStyles };