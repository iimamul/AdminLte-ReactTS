import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

// interface CustomInputProps extends Omit<TextFieldProps,'variant'> {
//   type: string;
//   label: string;
// }

const CustomInput = React.forwardRef<HTMLInputElement,TextFieldProps>(({...rest }, ref) => {
  return <TextField inputRef={ref} {...rest} />;
});

export default CustomInput;
