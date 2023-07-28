// Button.tsx
import React, { ButtonHTMLAttributes } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: MuiButtonProps['variant'];
  color?: MuiButtonProps['color'];
  size?: MuiButtonProps['size'];
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  startIcon,
  endIcon,
  children,
  ...rest
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
export {};
