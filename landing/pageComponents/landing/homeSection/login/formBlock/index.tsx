import React, { FC, useState } from 'react';

import { useForm, FormProvider } from "react-hook-form";
import Box from '@mui/material/Box';
import { Divider, Grid, Typography } from '@mui/material';
import CustomButton from '../../../../../../src/landing/components/button';
import FormTextField from '../../../../../../src/landing/components/formComponents/textField';
import FormCheckbox from '../../../../../../src/landing/components/formComponents/checkbox/';
import SETTINGS from '../../../../../settings';
import GoogleSvg from '../../../../../public/icons/google.svg';
import LinkedInSvg from '../../../../../public/icons/linkedIn.svg';
import M from './../../../../../../src/messages'
import { muiStyles } from './styles';

interface iFormProps {
  username: string;
  password: string;
};

const defaultValues = {
  username: '',
  password: ''
};

const FormBlock: FC = () => {

  const methods = useForm<iFormProps>({ defaultValues, shouldFocusError: true });
  const { handleSubmit, control, setValue } = methods;

  const onSubmit = (data: any) => {
    console.log("Login Data = ", data)
    return true;
  };

  const goToRegister = () => {
    window.location.replace(`${SETTINGS.appUrl}/landing_page/registration?sectionPath=home`);
  }

  return (
    <Box component="div" sx={muiStyles.tabBox}>
      <Box>
        <FormProvider {...methods}>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Typography sx={muiStyles.title} component='h5' variant='h5'> {M.get('pages.landing.login.form.title')}</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <CustomButton
                  label={M.get('oauth.google')}
                  variant='outlined'
                  onClick={() => console.log("Google oauth")}
                  btnType='secondary'
                  sx={muiStyles.oauthBtn}
                  startIcon={<GoogleSvg />}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomButton
                  label={M.get('oauth.linkedin')}
                  variant='outlined'
                  onClick={() => console.log("Linkedin oauth")}
                  btnType='secondary'
                  sx={muiStyles.oauthBtn}
                  startIcon={<LinkedInSvg />}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider sx={muiStyles.divider}>OR</Divider>
              </Grid>

              <Grid item xs={12}>
                <FormTextField
                  control={control}
                  setValue={setValue}
                  rules={{ required: `Username field is required`, validate: ((value: string) => value.length < 3 ? 'Username min length should be 3' : true) }}
                  name="username"
                  placeholder={M.get('pages.landing.login.form.username')}
                  label={M.get('pages.landing.login.form.username')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  control={control}
                  setValue={setValue}
                  rules={{ required: `Password field is required`, validate: ((value: string) => value.length < 3 ? 'Password min length should be 3' : true) }}
                  name="password"
                  placeholder={M.get('pages.landing.login.form.password')}
                  label={M.get('pages.landing.login.form.password')}
                  type="password"
                  withEyeIcon
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ paddingTop: '8px' }}>
                <Box component="div" sx={muiStyles.rememberBlock}>
                  <FormCheckbox name="rememberMe" setValue={setValue} sx={{ mr: 1 }} />
                  <Box component="span" sx={{ ...muiStyles.rememberText, mr: '2px' }}> {M.get('pages.landing.login.form.rememberMe')} </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} style={{ paddingTop: '8px' }}>
                <Box component="div" sx={muiStyles.forgotPassBlock}>
                  <Box component="span" sx={{ ...muiStyles.forgotPassText, mr: '2px' }}> {M.get('pages.landing.login.form.forgotPassword')} </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CustomButton
                sx={muiStyles.submitBtn}
                label={M.get('actions.login')}
                variant='contained'
                btnType='primary'
                type="submit"
              />
            </Grid>
            <Box component="div" sx={{ mt: 2, display: 'flex' }}>
              <Box component="span" sx={muiStyles.redirectingText}>
                {M.get('pages.landing.login.form.dontHaveAccount')}
                <Box component="span" sx={muiStyles.redirectingLink} onClick={goToRegister}> {M.get('pages.landing.login.form.signUp')} </Box>
              </Box>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default FormBlock;
