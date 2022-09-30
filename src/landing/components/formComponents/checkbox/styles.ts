const muiStyles = {
  checkbox: {
    height: '20px',
    width: '20px',
    padding: 0,
    '&.Mui-checked': {
      '&:hover': {
        '& > svg': {
          '& > rect': {
            stroke: '#004B7F'
          }
        }
      },
    },
    '&:hover': {
      '& > svg': {
        '& > rect': {
          stroke: '#004B7F'
        }
      }
    },
  },
};
export { muiStyles };
