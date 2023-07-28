import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

import Input from '../components/Input';
import Button from '../components/Button';

import { postData } from '../services';

interface PostResponse {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}

const Page2: React.FC = () => {
  const [data, setData] = useState<PostResponse | null>(null); // Estado para almacenar la respuesta del servidor

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [msjError, setMsjError] = useState('');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().substring(0, 10);
  };

  const handleSubmit = () => {
    const userData = {
      name: name,
      job: job,
    };

    postData(userData)
      .then((response) => {
        console.log('Respuesta del servidor:', response);
        setData(response); // Almacenar la respuesta del servidor en el estado "data"
      })
      .catch((error) => {
        console.error('Error al enviar los datos:', error);
        setMsjError('Error al enviar los datos.'); // Mostrar mensaje de error en caso de fallo
      });
  };

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }} spacing={2}>
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Crear Usuario
            </Typography>
            <Box p={2}>
              <Input
                label="Nombre"
                type="text"
                placeholder="Ingrese el nombre"
                iconPosition="start"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box p={2}>
              <Input
                label="Trabajo"
                placeholder="Ingrese el trabajo"
                iconPosition="start"
                required
                value={job}
                onChange={(e) => setJob(e.target.value)}
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
              <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
                Registrar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {data && ( // Mostrar el Card solo si "data" tiene un valor (la respuesta del servidor)
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h6" color="green">Registrado Correctamente:</Typography>
              <Typography variant="body1">Nombre: {data.name}</Typography>
              <Typography variant="body1">Trabajo: {data.job}</Typography>
              <Typography variant="body1">ID: {data.id}</Typography>
              <Typography variant="body1">Creado: {formatDate(data.createdAt)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default Page2;
