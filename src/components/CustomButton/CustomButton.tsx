import React, { FunctionComponent, ReactNode } from 'react';
import { Button } from '@material-ui/core';

interface ModalProps {
  children: ReactNode;
  isDisabled: false;
  onClick: () => void;
}

const CustomButton: FunctionComponent<ModalProps> = ({
  children,
  isDisabled,
  onClick,
}) => (
  <Button
    disabled={isDisabled}
    onClick={onClick}
    style={{ backgroundColor: '#F08E49' }}
  >
    {children}
  </Button>
);

export default CustomButton;
