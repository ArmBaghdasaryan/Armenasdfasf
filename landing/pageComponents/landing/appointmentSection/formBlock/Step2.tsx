import React, { FC } from 'react';
import FormTextField from '../../../../../src/landing/components/formComponents/textField';
import FormSelectField from '../../../../../src/landing/components/formComponents/select';
import FormDatePicker from '../../../../../src/landing/components/formComponents/datePicker';
import FormTimePicker from '../../../../../src/landing/components/formComponents/timePicker';
import ChatSVG from '../../../../../src/assets/icons/chats.svg';
import ClockSVG from '../../../../../src/assets/icons/clock.svg';
import CalendarSVG from '../../../../../src/assets/icons/calendar.svg';
import M from './../../../../../src/messages'
import { muiStyles } from './styles';


interface iProps {
  control?: any;
  setValue?: any;
}

const Step2: FC<iProps> = ({ control, setValue }) => {

  return (
    <>
      <FormDatePicker
        control={control}
        setValue={setValue}
        rules={{ required: `Day field is required` }}
        name="meetingDay"
        placeholder={M.get('pages.landing.appointment.form.selectDay')}
        label={M.get('pages.landing.appointment.form.selectDay')}
        sx={{ ...muiStyles.textField, mt: 4, mb: 0 }}
        icon={CalendarSVG}
        iconPosition="start"
      />
      <FormTimePicker
        control={control}
        setValue={setValue}
        rules={{ required: `Time field is required` }}
        name="meetingTime"
        placeholder={M.get('pages.landing.appointment.form.selectTime')}
        label={M.get('pages.landing.appointment.form.selectTime')}
        sx={{ ...muiStyles.textField, mt: 2, mb: 0 }}
        icon={ClockSVG}
        iconPosition="start"
      />
      <FormSelectField
        control={control}
        setValue={setValue}
        rules={{ required: `Meeting format field is required` }}
        name="meetingFormat"
        placeholder={M.get('pages.landing.appointment.form.selectMitting')}
        sx={{ ...muiStyles.textField, mt: 2, mb: 0 }}
        options={[{ label: `${M.get('pages.landing.appointment.form.meetingFormatOpt.opt_1')}`, value: 'formatOne' }, { label: `${M.get('pages.landing.appointment.form.meetingFormatOpt.opt_2')}`, value: 'formatTwo' }]}
        startIcon={ChatSVG}
      />
      <FormTextField
        control={control}
        setValue={setValue}
        rules={{ required: `Meeting purpose field is required` }}
        name="meetingPurpose"
        placeholder={M.get('pages.landing.appointment.form.meetingType')}
        label="meetingPurpose"
        sx={{ ...muiStyles.textField, mt: 2, mb: 0 }}
        multiline
        rows={3}
      />
    </>
  );
}

export default Step2;