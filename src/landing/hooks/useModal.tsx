import { useState, useCallback } from 'react';

const useModal = (defaultState: any) => {
  const [isOpen, setIsOpen] = useState(defaultState);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return [isOpen, openModal, closeModal];
};

// eslint-disable-next-line import/prefer-default-export
export { useModal };
