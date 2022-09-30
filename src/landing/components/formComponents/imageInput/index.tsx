import React, { useState, FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, CircularProgress, Typography, Tooltip } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Image from 'next/image';
import InputError from '../../../../assets/icons/input-error.svg';
import dropImage from '../../../../assets/dropImage.png';
import CustomButton from '../../button';
import FS from '../../../services/fileService';
import { muiStyles } from './styles';

interface iProps {
  control?: any;
  setValue?: any;
  name: string;
  rules?: any;
  label: string;
  defaultValue?: string,
  disabled?: boolean,
  setDisableSave?: (val: boolean) => void;
  acceptFiles?: string[],
  sx?: any;
}
const FormImageInput: FC<iProps> = ({ setValue, name, rules, label, defaultValue = '', disabled, setDisableSave, acceptFiles = ['.jpeg', '.jpg', '.png', '.gif'], sx = {} }) => {
  const { control } = useFormContext();

  const [preview, setPreview] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const ALLOWED_MAX_SIZE = 10000000; // 10 MB

  const onFileUpload = async (file: any) => {
    if (!file) return;
    if (file.size > ALLOWED_MAX_SIZE) {
      console.log("Max file size should be 10 mb");
      return;
    }
    if (setDisableSave) {
      setDisableSave(true);
    }
    setLoading(true);
    try {
      setValue(name, '');
      // const response = await FS.upload(file);
      setPreview(URL.createObjectURL(file));
      setValue(name, URL.createObjectURL(file));
    } catch (error) {
      console.log("Something went wrong.", error);
    } finally {
      setLoading(false);
      if (setDisableSave) {
        setDisableSave(false);
      }
    }
  }

  const dropzoneOptions = {
    useFsAccessApi: false,
    onDrop: (acceptedFiles: any) => {
      return onFileUpload(acceptedFiles[0]);
    },
    accept: { 'image': acceptFiles }
  };

  const { getRootProps, getInputProps } = useDropzone(dropzoneOptions);

  const onDelete = () => {
    setPreview('');
    setValue(name, '');
  };

  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        console.log("Value = ", value)
        return (
          <Box sx={{ ...muiStyles.container, ...sx }} display="flex" flexDirection="column">
            {/* {(!loading && !(preview || value)) && ( */}
            {(!loading && !(preview)) && (
              <>
                <Box {...(!disabled && getRootProps())} sx={{ ...muiStyles.inputArea, ...(disabled && muiStyles.inputAreaDisabled), ...(error && muiStyles.inputAreaError) }} >
                  <Typography sx={muiStyles.label}>{label}</Typography>
                  <Box component="div" sx={muiStyles.main}>
                    <Box component="div" sx={{ width: '95%', textAlign: 'center' }}>
                      <Image src={dropImage} draggable="false" alt='dropImage' />
                      <Typography sx={muiStyles.dropImageDescription} >
                        Drop your image here or
                        <Box component="span" sx={muiStyles.dropImageBrowse}> browse</Box>
                      </Typography>
                      <input {...getInputProps({ onChange })} />
                    </Box>
                    <Box component="div" sx={{ width: '24px', height: '24px' }}>
                      {Boolean(error?.message) && <Tooltip title={error?.message as string}><Box sx={{ display: 'flex', cursor: 'pointer' }}><InputError /></Box></Tooltip>}
                    </Box>
                  </Box>
                </Box>
              </>
            )}
            {loading && <Box sx={muiStyles.loadingProgress}> <CircularProgress size={50} /> </Box>}
            {/* {(!loading && (preview || value)) && ( */}
            {(!loading && (preview)) && (
              <Box sx={muiStyles.boxContainer}>
                <Typography sx={muiStyles.label}>{label}</Typography>
                <Image width="150px" height="150px" src={preview} alt="originalImage" />
                {!disabled && (
                  <CustomButton
                    label='Remove'
                    variant='outlined'
                    onClick={onDelete}
                    btnType='secondary'
                    sx={muiStyles.supportBtn}
                  />
                )}
              </Box>
            )}
          </Box>
        )
      }}
    />
  );
}

export default FormImageInput;