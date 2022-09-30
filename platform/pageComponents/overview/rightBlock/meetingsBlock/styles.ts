const muiStyles = {
  title: {
    fontFamily: 'Noto Sans',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 700,
    color: 'secondary.textColor1',
    mr: 1,
    whiteSpace: 'nowrap'
  },
  badge: {
    fontFamily: 'Noto Sans',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 700,
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'primary.btnMain',
    borderRadius: '50%',
    color: 'white'
  },
  viewAll: {
    fontFamily: 'Noto Sans',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500,
    height: '32px',
    padding: '8px 16px',
    borderRadius: '100px',
    background: 'inherit',
    boxShadow: 'none',
    color: 'primary.main',
    whiteSpace: 'nowrap',
    '&:hover': {
      background: 'inherit',
      boxShadow: 'none',
      color: '#457BAC',
    },
    '&:active': {
      background: 'inherit',
      boxShadow: 'none',
      color: '#226395',
    }
  },
  appName: {
    fontFamily: 'Noto Sans',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  payBtn: {
    fontFamily: 'Noto Sans',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500,
    height: '32px',
    width: '80px',
    borderRadius: '16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.main',
    color: 'white',
    backgroundColor: 'primary.main',
    padding: '8px 16px',
  },
  tableHeader: {
    fontFamily: 'Noto Sans',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 500,
    color: '#728191',
  },
  tableValue: {
    fontFamily: 'Noto Sans',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
    color: 'secondary.textColor1',
    mr: '4px'
  },
  tableValueThin: {
    fontFamily: 'Noto Sans',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 300,
    color: 'secondary.textColor1',
  },
  divider: {
    borderColor: '#DFE8F3',
    "&::before": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: '#DFE8F3',
    },
    "&::after": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: '#DFE8F3',
    },
  },
  book: {
    fontFamily: 'Noto Sans',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500,
    height: '32px',
    padding: '8px 16px',
    borderRadius: '100px',
    background: 'inherit',
    boxShadow: 'none',
    color: 'primary.main',
    whiteSpace: 'nowrap',
    '&:hover': {
      background: 'inherit',
      boxShadow: 'none',
      color: '#457BAC',
      border: '1px solid #457BAC'
    },
    '&:active': {
      background: 'inherit',
      boxShadow: 'none',
      color: '#226395',
      border: '1px solid #226395'
    }
  },

  rightArrow: {
    '&:hover': {
      '& > svg': {
        '& path': {
          stroke: '#457BAC'
        }
      }
    },
    '&:active': {
      '& > svg': {
        '& path': {
          stroke: '#004B7F'
        }
      },
      '& svg': {
        '& > rect': {
          '&:first-of-type': {
            fill: '#F1F4FA'
          }
        },
      }
    },
  },
};
export { muiStyles };
