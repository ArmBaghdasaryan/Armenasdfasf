import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { Typography } from '@mui/material';
import { useForm, FormProvider } from "react-hook-form";
import CustomButton from '../../../../../src/landing/components/button';
import StepCompleted from '../../../../../src/assets/icons/step-completed.svg';
import StepActive_1 from '../../../../../src/assets/icons/Steps1_active.svg';
import StepActive_2 from '../../../../../src/assets/icons/Steps2_active.svg';
import StepInactive_1 from '../../../../../src/assets/icons/Steps1_inactive.svg';
import StepInactive_2 from '../../../../../src/assets/icons/Steps2_inactive.svg';
import Step1 from './Step1';
import Step2 from './Step2';

import M from './../../../../../src/messages';
import { muiStyles } from './styles';


const steps = ['Main information', 'Calendar'];

interface iFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  problemType: string;
  meetingDay: string;
  meetingTime: string;
  meetingFormat: string;
  meetingPurpose: string;
};

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  problemType: '',
  meetingDay: '',
  meetingTime: '',
  meetingFormat: '',
  meetingPurpose: ''
};

const SetupMeeting: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [stepIndex: number]: boolean }>({});

  const methods = useForm<iFormProps>({ defaultValues, mode: 'onChange' });
  const { trigger, handleSubmit, control, setValue, reset, formState: { errors } } = methods;

  const onSubmit = (data: any) => {
    console.log("Setup Meeting Data = ", data)
    handleReset();
    return true;
  };

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      handleIsStepCompleted(activeStep)
      const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
      setActiveStep(newActiveStep);
    } else {
      handleIsStepCompleted(activeStep, false);
    }
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleIsStepCompleted = (currStep: number, isComplete: boolean = true) => {
    const newCompleted = { ...completed };
    if (isComplete) {
      newCompleted[currStep] = isComplete;
    } else {
      delete newCompleted[currStep];
    }
    setCompleted(newCompleted);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    reset();
  };

  const hasError = Object.keys(errors).length > 0;

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Step1 control={control} setValue={setValue} />;
      case 1:
        return <Step2 control={control} setValue={setValue} />;
      default:
        return null;
    }
  };

  const isActive = (index: number) => index === activeStep;
  const isCompleted = (index: number) => completed[index];

  return (
    <Box sx={muiStyles.root}>
      <Typography sx={muiStyles.title} component='h5' variant='h5'>{M.get('pages.landing.appointment.title')} </Typography>
      <Stepper nonLinear activeStep={activeStep} connector={null} sx={muiStyles.stepper}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]} sx={{ ...muiStyles.step, width: `${100 / steps.length}%` }}>
            <Box component="div" sx={{ ...muiStyles.stepButton, ...((isActive(index) || isCompleted(index)) && muiStyles.stepButtonActive) }} onClick={handleStep(index)}>
              <Box component="div" sx={{ minWidth: '16px', minHeight: '16px' }}>
              {isCompleted(index) ? < StepCompleted/> : isActive(index) ? index === 0 ? <StepActive_1/> : <StepActive_2/> : index === 1 ? <StepInactive_2/> : <StepInactive_1/>}
              </Box>
              <Typography sx={{ ...muiStyles.stepLabel, ...((isActive(index) || isCompleted(index)) && muiStyles.stepLabelActive) }}>{label}</Typography>
            </Box>
          </Step>
        ))}
      </Stepper>
      <Box component="div">
        <FormProvider {...methods}>
          <form noValidate>
            {getStepContent()}
            {activeStep === 0 ?
              (<CustomButton
                sx={muiStyles.submitBtn}
                label={M.get('actions.next')}
                variant='contained'
                btnType='primary'
                onClick={handleNext}
              />) : (
                <CustomButton
                  sx={muiStyles.submitBtn}
                  label={M.get('actions.register')}
                  variant='contained'
                  btnType='primary'
                  disabled={hasError || (completedSteps() !== totalSteps() - 1)}
                  onClick={handleSubmit(onSubmit)}
                />
              )
            }
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
}

export default SetupMeeting;