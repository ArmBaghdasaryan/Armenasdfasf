const muiStyles = {
  tabBox: {
    background: 'white',
    height: '440px',
    borderRadius: '8px',
    width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
    typography: 'body1',
  },
  modalHeader: {
    padding: '0 0 0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '52px',
    alignItems: 'center',
    backgroundColor: '#1358a4',
    color: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(50px)',
    '& .MuiTabs-root': {
      height: '100%',
      '& .MuiButtonBase-root': {
        color: 'white'
      },
      '& .Mui-selected': {
        color: 'white',
        fontWeight: 500
      },
    }
  },
  indicator: {
    background: 'white',
    backgroundColor: 'white',
    height: '2px',
  },
  tabList: {
    '& .MuiButtonBase-root': {
      color: 'white'
    },
    '& .Mui-selected': {
      color: 'white',
      fontWeight: 500
    }
  },
  tab: {
    color: 'white',
  },
  tabPanel: {
    padding: 0,
    height: 'calc(100% - 52px)',
    overflowY: 'hidden'
  },
};
export { muiStyles };
