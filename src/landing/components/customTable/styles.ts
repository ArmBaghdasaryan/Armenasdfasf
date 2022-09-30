const muiStyles = {
  paperRootNoBorder: {
    boxShadow: 'none',
    '& .MuiTableContainer-root': {
      '& .MuiTable-root': {
        '& .MuiTableHead-root': {
          '& .MuiTableRow-root': {
            '& > th': {
              borderBottom: 'none'
            }
          }
        },
        '& .MuiTableBody-root': {
          '& .MuiTableRow-root': {
            '& > td': {
              borderBottom: 'none'
            }
          }
        }
      }
    }
  },
  tableRow: {
  },
  table: {
    minWidth: 460,
  },
  tableBody: {
    display: 'flex',
    justifyContent: 'center'
  },
  tableCellAction: {
    padding: '6px 16px',
    textAlign: 'center',
    color: 'primary.main'
  },
  clickableRow: {
    cursor: 'pointer',
    '&:hover': {
      background: '#f1f7ff'
    }
  }
};
export { muiStyles };