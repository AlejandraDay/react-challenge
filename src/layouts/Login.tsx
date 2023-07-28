import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Grid } from '@mui/material';
import { BiUser, BiLock, BiLogIn } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Input from '../components/Input';

import users from '../database/users.json'

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [msjError, setMsjError] = useState('');


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userFound = users.find(user => user.user === currentUser && user.password === currentPassword);

    if (userFound) {
      setMsjError('');
      console.log('Inicio de sesión exitoso.');
      navigate('/page1');
    } else {
      setMsjError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Card>
        <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
            Validar Credenciales 
            </Typography>
            <form onSubmit={handleSubmit} data-testid="login-form">
            <Box p={2}>
                <Input
                    label="Usuario"
                    type="text"
                    placeholder="Ingrese su usuario"
                    icon={BiUser}
                    iconPosition='start'
                    required
                    value={currentUser}
                    onChange={(e) => setCurrentUser(e.target.value)}
                />
            </Box>
            <Box p={2}>
                <Input
                    label="Contraseña"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    icon={BiLock}
                    iconPosition='start'
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
            </Box>
              <Box>
              {msjError && (
                <Typography variant="body1" color="error">
                  {msjError}
                </Typography>
              )}
              </Box>
             <Box display="flex" justifyContent="center" p={2}>
              <Button type="submit" variant="contained" color="primary" endIcon={<BiLogIn />}>
                Iniciar Sesión
              </Button>
            </Box>
            </form>
        </CardContent>
        </Card>
    </Grid>
  );
};

export default Login;
