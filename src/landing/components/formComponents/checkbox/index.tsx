import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from '@mui/material';
import CheckboxDefault from '../../../../assets/icons/checkbox-default.svg';
import CheckboxActive from '../../../../assets/icons/checkbox-active.svg';

import { muiStyles } from './styles';

interface iFormCheckbox {
  control?: any;
  setValue?: any;
  name: string;
  rules?: any;
  sx?: any;
}

const FormCheckbox: React.FC<iFormCheckbox> = ({ setValue, rules, name, sx = {} }) => {
  const { control } = useFormContext();

  const handleChange = async (e: any) => {
    setValue(name, e.target.checked);
  };

  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        return (
          <Checkbox
            disableRipple
            icon={<CheckboxDefault />}
            checkedIcon={<CheckboxActive />}
            sx={{ ...muiStyles.checkbox, ...sx }}
            onClick={(e) => {
              handleChange(e);
              onChange(e);
            }}
            value={value}
          />
        )
      }}
    />
  );
};

export default FormCheckbox;