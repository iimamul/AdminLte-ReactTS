// components/common/Button/Button.tsx

import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

// interface CustomButtonProps extends ButtonProps {
//   // Add any additional props specific to your button component
// }

const CustomButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Button variant="contained" size="medium" {...rest}>{children}</Button>;
};

export default CustomButton;
