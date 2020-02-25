import React, { FunctionComponent, ReactNode } from 'react';
import { Button } from '@material-ui/core';

interface ModalProps {
  children: ReactNode;
  isDisabled: boolean;
  onClick?: () => void;
  testId: string;
  style?: object;
  type?: 'button' | 'submit';
}

const CustomButton: FunctionComponent<ModalProps> = ({
  children,
  isDisabled,
  onClick,
  testId,
  type,
  style,
}) => (
  <Button
    type={type}
    data-testid={testId}
    disabled={isDisabled}
    onClick={onClick}
    style={{ ...style, backgroundColor: '#F08E49' }}
  >
    {children}
  </Button>
);

export default CustomButton;
