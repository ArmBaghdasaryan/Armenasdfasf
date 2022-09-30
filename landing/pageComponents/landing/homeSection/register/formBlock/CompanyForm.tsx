import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from "react-hook-form";
import Box from '@mui/material/Box';
import { Grid, Typography, Divider } from '@mui/material';

import CustomButton from '../../../../../../src/landing/components/button';
import CustomCheckbox from '../../../../../../src/landing/components/checkbox';
import FormTextField from '../../../../../../src/landing/components/formComponents/textField';
import { isEmail, requiredErrMsg, validateFieldForMinChar } from '../../../../../../src/landing/helpers/formHelper';
import GoogleSvg from '../../../../../public/icons/google.svg';
import LinkedInSvg from '../../../../../public/icons/linkedIn.svg';
import { routes } from '../../../../../../src/configs';

import M from '../../../../../../src/messages';

import { muiStyles } from './styles';

interface iFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
};

const CompanyForm: FC = () => {
  const router = useRouter();

  const [termsAgree, setTermsAgree] = useState(false);

  const methods = useForm<iFormProps>({ defaultValues, shouldFocusError: true });
  const { handleSubmit, control, setValue, formState: { errors } } = methods;

  const onSubmit = (data: any) => {
    console.log("Register investor data = ", data)
  };

  const handleTermsAgree = () => setTermsAgree(!termsAgree);

  const hasError = Object.keys(errors).length > 0;

  const validateFName = (value: string) => validateFieldForMinChar('First name', value, 3);
  const validateLName = (value: string) => validateFieldForMinChar('Last name', value, 3);
  const validateEmail = (value: string) => isEmail(value) ? true : M.get('errors.incorrectEmail');

  const goToLogin = () => {
    router.push({ pathname: routes.next.login.path }, undefined);
  }

  return (
    <Box component="div">
      <Box>
        <FormProvider {...methods}>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
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

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <FormTextField
                  control={control}
                  setValue={setValue}
                  rules={{ required: requiredErrMsg('First name'), validate: validateFName }}
                  name="firstName"
                  placeholder={M.get('pages.landing.register.form.firstName')}
                  label={M.get('pages.landing.register.form.firstName')}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <FormTextField
                  control={control}
                  setValue={setValue}
                  rules={{ required: requiredErrMsg('Last name'), validate: validateLName }}
                  name="lastName"
                  placeholder={M.get('pages.landing.register.form.lastName')}
                  label={M.get('pages.landing.register.form.lastName')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  control={control}
                  setValue={setValue}
                  rules={{ required: requiredErrMsg('Email'), validate: validateEmail }}
                  name="email"
                  placeholder={M.get('pages.landing.register.form.email')}
                  label={M.get('pages.landing.register.form.email')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  control={control}
                  setValue={setValue}
                  rules={{ required: requiredErrMsg('Phone number') }}
                  name="phone"
                  placeholder={M.get('pages.landing.register.form.phone')}
                  label={M.get('pages.landing.register.form.phone')}
                />
              </Grid>
            </Grid>

            <Box component="div" sx={muiStyles.termsBlock}>
              <CustomCheckbox sx={muiStyles.checkbox} onClick={handleTermsAgree} value={termsAgree} />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component="span" sx={{ ...muiStyles.termText, mr: '2px' }}>
                  {M.get('pages.landing.register.form.readAndAgree')}
                  <Box component="span" sx={{ ...muiStyles.termText, textDecoration: 'underline', cursor: 'pointer' }}>{M.get('pages.landing.register.form.terms')}</Box>
                </Box>
              </Box>
            </Box>
            <CustomButton
              sx={muiStyles.submitBtn}
              label={M.get('pages.landing.login.form.register')}
              variant='contained'
              btnType='primary'
              type='submit'
              disabled={(hasError || (!termsAgree))}
            />

            <Box component="div" sx={{ mt: 2, display: 'flex' }}>
              <Box component="span" sx={muiStyles.redirectingText}>
                {M.get('pages.landing.register.form.alreadyHaveAnAccount')}
                <Box component="span" sx={muiStyles.redirectingLink} onClick={goToLogin}> {M.get('pages.landing.register.form.login')} </Box>
              </Box>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default CompanyForm;