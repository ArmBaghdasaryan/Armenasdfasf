import React, { FC } from 'react';
import { Box } from '@mui/material';
import CustomButton from '../../../../../src/landing/components/button';
import CustomModal from '../../../../../src/landing/components/modal';
import { useModal } from '../../../../../src/landing/hooks/useModal';
import M from './../../../../../src/messages'
import InformationBlock from './informationBlock';
import FormBlock from './formBlock';
import { muiStyles } from './styles';



const RegistrationComponent: FC = () => {
  const [isOpen, openModal, closeModal] = useModal(false);

  const onSubmit = () => { };
  const onClose = () => {
    closeModal();
  };

  return (
    <Box component='div' sx={muiStyles.container}>
      <Box component='div' sx={muiStyles.mainBlock}>
        <Box component='div' sx={muiStyles.infoBlock}>
          <InformationBlock />
        </Box>
        <Box component='div' sx={muiStyles.formBlock}>
          <FormBlock />
        </Box>
        <CustomButton
          sx={muiStyles.registerBtn}
          label={M.get('actions.register')}
          variant='contained'
          onClick={openModal}
          btnType='primary'
        />
        {isOpen && <CustomModal
          open={isOpen}
          handleSubmit={onSubmit}
          handleClose={onClose}
          leftBtnText='Cancel'
          rightBtnText='Submit'
          sx={muiStyles.modal}
          withFooterAction={false}
        >
          <FormBlock />
        </CustomModal>}
      </Box>
    </Box>
  );
};

export default RegistrationComponent;
