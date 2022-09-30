import React, { useState } from 'react';
import { InputAdornment, TextField, Box } from '@mui/material';
import { Controller, useFormContext } from "react-hook-form";
import Tooltip from '@mui/material/Tooltip';
import InputError from '../../../../assets/icons/input-error.svg';
import EyeCloseSvg from '../../../../assets/icons/eye-close.svg';
import EyeOpenSvg from '../../../../assets/icons/eye-open.svg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { muiStyles } from './styles';

interface iFormTextField {
  control?: any;
  setValue?: any;
  name: string;
  placeholder: string;
  label: string;
  rules?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  type?: string
  sx?: any;
  size?: 'small' | 'medium';
  withoutLabel?: boolean;
  rest?: any;
  multiline?: boolean;
  rows?: number;
  startIcon?: any;
  autoComplete?: string;
  withHelperText?: boolean;
  withEyeIcon?: boolean;
}

const FormTextField: React.FC<iFormTextField> = ({ setValue, rules, name, placeholder, label, autoComplete='', sx={}, variant='outlined', type='text', size='small', withoutLabel=true, multiline = false, rows = 3, startIcon: StartIcon = null, withHelperText = false, withEyeIcon = false }) => {
  const { control } = useFormContext();

  const handleChange = async (event: any) => {
    setValue(name, event.target.value);
  };

  const [showPass, setShowPass] = useState(false);

  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        return (
          <TextField
            onChange={(e) => {
              handleChange(e);
              onChange(e.target.value);
            }}
            value={value}
            fullWidth

            error={Boolean(error?.message)}
            helperText={withHelperText && error?.message}

            label={withoutLabel ? "" : label}
            {...(withoutLabel && { InputLabelProps: { shrink: false } })}
            variant={variant}
            placeholder={placeholder}

            {...(type === 'datetime-local' && { InputLabelProps: { shrink: true } })}
            sx={{ ...muiStyles.textField, ...((Boolean(error?.message) || withEyeIcon) && muiStyles.textFieldPadding), ...(multiline && muiStyles.textArea), ...((multiline && !withHelperText) && muiStyles.textAreaWithErrorIcon), ...sx}}
            size={size}
            type={withEyeIcon && showPass ? 'text' : type}
            autoComplete={autoComplete}
            inputRef={ref}
            multiline={multiline}
            rows={rows}
            InputProps={{
              ...(StartIcon && { startAdornment: (<InputAdornment position="start"> <StartIcon /> </InputAdornment>) }),
              ...(withHelperText ? null : (Boolean(error?.message) || type === 'password') && { endAdornment:
                <>
                  {withEyeIcon && (showPass ?
                    <VisibilityIcon sx={muiStyles.eye} onClick={() => setShowPass(false)} /> :
                    <VisibilityOffIcon sx={muiStyles.eye} onClick={() => setShowPass(true)}/>
                  )}
                  {Boolean(error?.message) && <Tooltip title={error?.message as string}>
                    <Box sx={{display: 'flex', cursor: 'pointer', ml: withEyeIcon ? 1 : 0}}>
                      <InputError />
                    </Box>
                  </Tooltip>}
                </>
              }),
            }}
          />
        )
      }}
    />
  );
};

export default FormTextField;