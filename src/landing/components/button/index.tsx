import React, { FC } from 'react';
import Button from '@mui/material/Button';

import { muiStyles } from './styles';

interface iProps {
  label: string;
  variant?: 'outlined' | 'contained' | 'text';
  onClick?: () => void;
  sx?: any;
  color?: 'secondary' | 'primary';
  startIcon?: any;
  btnType?: 'secondary' | 'primary' | 'default';
  type?: 'submit' | 'button' | 'reset' | undefined;
  size?: 'small' | 'medium' | 'big';
  disabled?: boolean;
}

const CustomButton: FC<iProps> = ({
  label,
  variant = 'contained',
  onClick,
  sx = {},
  color = 'secondary',
  startIcon = null,
  btnType = 'default',
  type = 'button',
  size = 'medium',
  disabled = false
}) => {

  const btnStyle =
  btnType === 'primary'
      ? muiStyles.primaryBtn
      : btnType === 'secondary'
      ? muiStyles.secondaryBtn
      : muiStyles.defaultBtn;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      startIcon={startIcon}
      disableRipple
      color={color}
      variant={variant}
      onClick={handleClick}
      sx={{ ...muiStyles.button, ...btnStyle, ...muiStyles[size], ...sx }}
      type={type}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
