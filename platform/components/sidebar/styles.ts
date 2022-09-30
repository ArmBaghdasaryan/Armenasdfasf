
const muiStyles = {
  welcomeUser: {
    fontFamily: 'Noto Sans',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#CFE3F2'
  },
  userName: {
    fontFamily: 'Noto Sans',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: 'white'
  },
  helpBlock: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    p: '8px 16px',
    position:'absolute',
    bottom: '8px',
    height: '48px',
    widht: '100%',
    '&:hover': {
      background: '#226395',
      borderRightWidth: '4px',
      borderRightStyle: 'solid',
      borderRightColor: '#8EB8D7',
      '& .MuiTypography-root': {
        fontFamily: 'Noto Sans',
        fontWeight: 500
      }
    }
  },
  help: {
    fontFamily: 'Noto sans',
    fontWeight: 400,
    fontSize: '14px',
    linerHeight: '20px',
    color: 'white',
  },
  listItem: {
    '&:hover': {
      borderRightWidth: '4px',
      borderRightStyle: 'solid',
      borderRightColor: '#8EB8D7',
      '& .MuiListItemIcon-root': {
        '& > svg': {
          '& path': {
            color: 'white'

          }
        }
      },
      '& .MuiListItemText-root': {
        '& .MuiTypography-root': {
          fontFamily: 'Noto Sans',
          fontWeight: 500
        }
      }
    }
  },
  listItemActive: {
    borderRightWidth: '4px',
    borderRightStyle: 'solid',
    borderRightColor: '#8EB8D7',
  },
  listItemBtn: {
    height: '48px',
    "&::before": {
      borderBottomWidth: "3px",
      borderLeft: '3px',
      transformOrigin: '50% 50%',
    },
    "&::after": {
      borderTop: 0,
      borderRight: 0,
      transformOrigin: '50% 50%',
    },
  },
  listItemBtnActive: {
    background: '#226395',
  },
  activeLinkIcon: {
    '& > svg': {
      '& path': {
        stroke: 'white'
      }
    }
  },
  activeLinkTitle: {
    '& .MuiTypography-root': {
      fontFamily: 'Noto Sans',
      fontWeight:500,
    }
  },
  activeDivider: {
    width: '4px',
    background: '#8EB8D7'
  },
  divider: {
    borderColor: '#226395',
    "&::before": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: '#226395',
    },
    "&::after": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: '#226395',
    },
  },
};
export { muiStyles };
