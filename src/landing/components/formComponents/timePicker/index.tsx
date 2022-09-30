import * as React from 'react';
import classNames from 'classnames';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Controller, useFormContext } from "react-hook-form";
import { makeStyles } from '@mui/styles';
import { Box, Tooltip } from '@mui/material';
import InputError from '../../../../assets/icons/input-error.svg';

import styles from './styles';

interface iFormDatePicker {
  control?: any;
  setValue?: any;
  name: string;
  placeholder: string;
  label: string;
  rules?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  sx?: any;
  size?: 'small' | 'medium' | undefined;
  withoutLabel?: boolean;
  icon?: any;
  iconPosition: 'start' | 'end';
  withHelperText?: boolean;
}

const useStyles = makeStyles(styles);

const FormDatePicker: React.FC<iFormDatePicker> = ({ setValue, rules, name, placeholder, label, sx = {}, variant = 'outlined', size = 'small', withoutLabel = true, icon: Icon = null, iconPosition = 'end', withHelperText = false }) => {
  const classes = useStyles();

  const { control } = useFormContext();

  const handleChange = async (value: any) => {
    setValue(name, value);
  };

  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label=''
              value={value}
              onChange={(val) => {
                handleChange(val);
                onChange(val);
              }}
              components={{ OpenPickerIcon: Icon && Icon }}
              InputProps={{
                classes: { root: classNames(classes.reverse, error?.message && classes.reverseError) },
                ...(withHelperText ? null : Boolean(error?.message) && { startAdornment: <Tooltip title={error?.message as string}><Box sx={{display: 'flex', cursor: 'pointer'}}><InputError /></Box></Tooltip> }),
              }}
              inputRef={ref}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  fullWidth
                  sx={sx}
                  size={size}
                  error={Boolean(error?.message)}
                  helperText={withHelperText && error?.message}
                  className={`${size === 'small' && 'themeDatePickerForLabel'} ${iconPosition === 'start' && 'themeDatePickerForLabelReverse'}`}
                  label={withoutLabel ? (value ? '' : label) : label}
                  {...(withoutLabel && { InputLabelProps: { shrink: false } })}
                  variant={variant}
                  placeholder={placeholder}
                />
              )}
            />
          </LocalizationProvider>
        )
      }}
    />
  );
};

export default FormDatePicker;