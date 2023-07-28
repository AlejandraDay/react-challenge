import React, { InputHTMLAttributes } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { IconType } from 'react-icons'; // Importar IconType para el tipado de los iconos

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'label'>;

interface InputProps extends TextFieldProps {
  label?: string;
  icon?: IconType;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  iconPosition?: 'start' | 'end';
}

const Input: React.FC<InputProps> = ({ label, icon: Icon, color = 'primary', iconPosition = 'start', ...rest }) => {
  return (
    <TextField
      label={label}
      color={color}
      InputProps={{
        [iconPosition + 'Adornment']: Icon && (
          <InputAdornment position={iconPosition}>
            <Icon />
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

export default Input;
