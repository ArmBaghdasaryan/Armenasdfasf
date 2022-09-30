import React, { FC } from 'react';

import { Checkbox } from '@mui/material';
import CheckboxDefault from '../../../assets/icons/checkbox-default.svg';
import CheckboxActive from '../../../assets/icons/checkbox-active.svg';
import { muiStyles } from './styles';

interface iProps {
  onClick?: () => void;
  sx?: any;
  disabled?: boolean;
  value?: boolean;
}

const CustomCheckbox: FC<iProps> = ({onClick, sx, disabled = false, value}) => {


  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <Checkbox
      disableRipple
      icon={<CheckboxDefault />}
      checkedIcon={<CheckboxActive/>}
      sx={{...muiStyles.checkbox, ...sx}}
      onClick={handleClick}
      value={value}
      disabled={disabled}
    />

  );
};

export default CustomCheckbox;
