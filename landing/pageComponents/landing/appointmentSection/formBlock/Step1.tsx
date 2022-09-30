import React, { FC } from 'react';
import { isEmail } from '../../../../../src/landing/helpers/formHelper';
import FormTextField from '../../../../../src/landing/components/formComponents/textField';
import FormSelectField from '../../../../../src/landing/components/formComponents/select';
import { muiStyles } from './styles';
import M from './../../../../../src/messages'

interface iProps {
  control?: any;
  setValue?: any;
}

const Step1: FC<iProps> = ({ control, setValue }) => {

  const validateFName = (value: string) => value.length < 3 ? 'First name min length should be 3' : true;
  const validateLName = (value: string) => value.length < 3 ? 'Last name min length should be 3' : true;
  const validateEmail = (value: string) => isEmail(value) ? true : 'Incorrect email format';

  return (
    <>
      <FormTextField
        control={control}
        setValue={setValue}
        rules={{ required: `${M.get('errors.required')}`, validate: validateFName }}
        name="firstName"
        placeholder={M.get('pages.landing.register.form.firstName')}
        label={M.get('pages.landing.register.form.firstName')}
        sx={{ ...muiStyles.textField, mt: 4, mb: 0 }}
      />
      <FormTextField
        control={control}
        setValue={setValue}
        rules={{ required: `Last name field is required`, validate: validateLName }}
        name="lastName"
        placeholder={M.get('pages.landing.register.form.lastName')}
        label={M.get('pages.landing.register.form.lastName')}
        sx={{ ...muiStyles.textField, mt: 2, mb: 0 }}
      />
      <FormTextField
        control={control}
        setValue={setValue}
        rules={{ required: `Email field is required`, validate: validateEmail }}
        name="email"
        placeholder={M.get('pages.landing.register.form.email')}
        label={M.get('pages.landing.register.form.email')}
        sx={{ ...muiStyles.textField, mt: 2, mb: 0 }}
      />
      <FormTextField
        control={control}
        setValue={setValue}
        rules={{ required: `Phone field is required` }}
        name="phone"
        placeholder={M.get('pages.landing.register.form.phone')}
        label={M.get('pages.landing.register.form.phone')}
        sx={{ ...muiStyles.textField, mt: 2, mb: 0 }}
      />
      <FormSelectField
        control={control}
        setValue={setValue}
        rules={{ required: `Problem type field is required` }}
        name="problemType"
        placeholder={M.get('pages.landing.appointment.form.problemType')}
        sx={{ ...muiStyles.textField, mt: 2, mb: 0 }}
        options={[{ label: `${M.get('pages.landing.appointment.form.problemTypesOpt.opt_1')}`, value: `${M.get('pages.landing.appointment.form.problemTypesOpt.opt_1')}` }, { label: `${M.get('pages.landing.appointment.form.problemTypesOpt.opt_2')}`, value: `${M.get('pages.landing.appointment.form.problemTypesOpt.opt_2')}` }]}
      />
    </>
  );
}

export default Step1;