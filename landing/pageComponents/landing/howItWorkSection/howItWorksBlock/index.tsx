import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { animateScroll } from 'react-scroll';

import { Box, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CustomButton from '../../../../../src/landing/components/button';
import CustomModal from '../../../../../src/landing/components/modal';
import { useModal } from '../../../../../src/landing/hooks/useModal';
import { routes } from '../../../../../src/configs';
import M from '../../../../../src/messages';

import TutorialCard from './tutorialCard';
import TutorialDialogContent from './tutorialDialogContent';
import { cards } from './config/config';
import { muiStyles } from './styles';

const AboutBlock: FC = () => {
  const router = useRouter();

  const [isOpen, openModal, closeModal] = useModal(false);

  const onSubmit = () => { };
  const onClose = () => {
    closeModal();
  };

  const scrollToStart = () => {
    animateScroll.scrollToTop();
  };

  const goToRegister = () => {
    scrollToStart();
    router.push(routes.next.register.path);
  }

  return (
    <Box component='div'>
      <Typography sx={muiStyles.smallTitle} variant='h1'> {M.get('pages.landing.howItWork.desc')} </Typography>
      <Box component='div' sx={muiStyles.container}>
        <Box component='div' sx={muiStyles.gridWrapper}>
          <Typography sx={{ ...muiStyles.title, ...muiStyles.one }} variant='h1'>{M.get('pages.landing.howItWork.desc')} </Typography>
          <Box component='div' sx={muiStyles.two}>
            <CustomButton
              sx={muiStyles.registerBtn}
              label={M.get('pages.landing.howItWork.register')}
              variant='contained'
              onClick={goToRegister}
              btnType='primary'
            />
            <CustomButton
              startIcon={<PlayArrowIcon />}
              sx={muiStyles.tutorialBtn}
              label={M.get('pages.landing.howItWork.tutorial')}
              variant='outlined'
              onClick={openModal}
              btnType='secondary'
            />
          </Box>
          <Box component='div' sx={{ ...muiStyles.cardsBlock, ...muiStyles.three }}>
            {cards.map((card) => (
              <TutorialCard key={card.id} card={card} />
            ))}
          </Box>
        </Box>

        <CustomModal
          open={isOpen}
          handleSubmit={onSubmit}
          handleClose={onClose}
          leftBtnText='Cancel'
          rightBtnText='Submit'
          sx={muiStyles.tutorialModal}
          withFooterAction={false}
        >
          <TutorialDialogContent handleClose={onClose} />
        </CustomModal>
      </Box>
    </Box>
  );
};

export default AboutBlock;
