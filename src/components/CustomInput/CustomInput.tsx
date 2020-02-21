import React, { FunctionComponent } from 'react';
import TextField from '@material-ui/core/TextField';

interface ModalProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const CustomInput: FunctionComponent<ModalProps> = ({
  value,
  onChange,
  label,
}) => (
  <TextField
    style={{ width: '100%' }}
    value={value}
    onChange={onChange}
    id="outlined-basic"
    label={label}
    variant="outlined"
  />
);

export default CustomInput;
