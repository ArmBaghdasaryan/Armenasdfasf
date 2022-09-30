const muiStyles = {
  blockTitle: {
    fontFamily: 'Noto Sans',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 700,
    color: 'primary.textColor1',
  },
  slider: {
    '& > button': {
      display: 'none!important'
    },
    '& .slick-list': {
      '& .slick-track': {
        m: 0,
        maxWidth: '1258px',
        width: '1258px!important',
        display: '-webkit-box',
        '& .slick-slide': {
          '& > div': {
            margin: '0 8px'
          }
        }
      }
    },
    '& .slick-dots': {
      position: 'relative',
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      height: '16px',
      '& > li': {
        width: '24px',
        height: '16px',
        '& > button': {
          '&:before': {
            content: '"1"'
          }
        }
      },
      '& .slick-active': {
        '& > div': {
          '& > div': {
            background: '#004B7F'
          }
        }
      },
    }
  },
  arrowIconLeft: {
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
  arrowIconRight: {
    '&:hover': {
      '& > svg': {
        '& path': {
          fill: '#457BAC'
        }
      }
    },
    '&:active': {
      '& > svg': {
        '& path': {
          fill: '#004B7F'
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
          fill: '#CFE3F2'
        }
      },
    }
  },
  card: {
    borderRadius: '24px',
    border: '1px solid #DFE8F3',
    padding: '20px',
    height: '176px',
    maxWidth: '248px'
  },
  cardTitle: {
    fontFamily: 'Noto Sans',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 600,
    color: 'primary.textColor1',
  },
  statusBtn: {
    width: '100%',
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
};
export { muiStyles };
