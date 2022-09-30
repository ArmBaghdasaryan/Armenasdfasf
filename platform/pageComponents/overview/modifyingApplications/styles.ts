const muiStyles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 2,
    background: '#FAFBFD',
    border: '1px solid #DFE8F3',
    borderRadius: '61px',
    height: '88px'
  },
  title: {
    fontFamily: 'Noto Sans',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 500,
    color: 'secondary.textColor1',
    mr: 3,
  },
  desc: {
    fontFamily: 'Noto Sans',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    color: '#728191',
    mt: '4px'
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
    '&:disabled': {
      '& > svg': {
        '& path': {
          stroke: '#CFE3F2'
        }
      },
    }
  },
};
export { muiStyles };
