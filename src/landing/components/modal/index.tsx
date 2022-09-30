import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { muiStyles } from './styles';

interface iProps {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  children: React.ReactNode;
  title?: string;
  leftBtnText?: string;
  rightBtnText?: string;
  withFooterAction?: boolean;
  withCloseButton?: boolean;
  sx?: any;
}
const CustomModal: FC<iProps> = ({
  open,
  handleClose,
  handleSubmit,
  children,
  title,
  leftBtnText = 'Cancel',
  rightBtnText = 'Submit',
  withFooterAction = true,
  withCloseButton = true,
  sx
}) => {
  return (
    <Box component="div">
      <Dialog open={open} onClose={handleClose} sx={{ ...muiStyles.root, ...sx}}>
        {title &&
          <DialogTitle>
            {title}
            {withCloseButton && (
              <IconButton
                aria-label="close"
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>)}
          </DialogTitle>
        }
        <DialogContent sx={{ padding: 0 }} dividers>{children}</DialogContent>
        {withFooterAction && <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            {leftBtnText}
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            {rightBtnText}
          </Button>
        </DialogActions>}
      </Dialog>
    </Box>
  );
};

export default CustomModal;
