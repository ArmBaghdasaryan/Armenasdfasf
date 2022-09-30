import React from 'react';
import { Box, FormControl, FormHelperText, InputAdornment, MenuItem, Select } from '@mui/material';
import { Controller, useFormContext } from "react-hook-form";
import CheckedSVG from '../../../../assets/icons/select-item-checked.svg';
import { muiStyles } from './styles';

interface iOptions {
  label: string;
  value: string;
}

interface iFormSelectField {
  control?: any;
  setValue?: any;
  name: string;
  placeholder: string;
  rules?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  sx?: any;
  size?: 'small' | 'medium' | undefined;
  options?: iOptions[];
  startIcon?: any;
  withHelperText?: boolean;
}

const FormSelectField: React.FC<iFormSelectField> = ({ setValue, rules, name, placeholder, options, sx={}, variant='outlined', size='small', startIcon: StartIcon=null, withHelperText=false }) => {
  const { control } = useFormContext();

  const handleChange = async (event: any) => {
    setValue(name, event.target.value);
  };

  return (

    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        return (
          <FormControl sx={{ m: 0, maxWidth: '100%', minWidth: '100%' }} error={Boolean(error?.message)}>
            <Select
              {...(StartIcon && { startAdornment: (<InputAdornment position="start"> <StartIcon /> </InputAdornment>) })}
              fullWidth
              value={value || ''}
              onChange={(e) => {
                handleChange(e);
                onChange(e.target.value);
              }}
              displayEmpty
              sx={{...muiStyles.select, ...(StartIcon && muiStyles.withStartIconStyle), ...sx}}
              size={size}
              inputRef={ref}
              variant={variant}
              // eslint-disable-next-line react/no-unstable-nested-components
              // IconComponent={() => ( <Box sx={{display: 'flex', position: 'absolute', right: '12px'}} component="div"><ArrowDown /></Box> )}
            >
              <MenuItem value="" sx={muiStyles.menuItem}>
                <em style={{color: '#878787', fontStyle: 'normal'}}>{placeholder}</em>
              </MenuItem>
              {options?.map(opt => (
                <MenuItem key={opt.value} value={opt.value} sx={muiStyles.menuItem}>
                  {opt.label}
                  <Box className="themeShowInSelected" sx={{display: 'none'}} component="div">
                    <CheckedSVG />
                  </Box>
                </MenuItem>
              ))}
            </Select>
            {withHelperText && Boolean(error?.message) && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        )
      }}
    />
  );
};

export default FormSelectField;