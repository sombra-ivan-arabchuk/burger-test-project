import React, { FunctionComponent, ReactNode } from 'react';
import Modal from 'react-modal';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  label: string;
}

const CustomModal: FunctionComponent<ModalProps> = ({
  children,
  isOpen,
  label,
}) => (
  <Modal isOpen={isOpen} contentLabel={label} ariaHideApp={true}>
    {children}
  </Modal>
);

export default CustomModal;
