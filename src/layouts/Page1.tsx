import React, { useState, useEffect } from 'react';
import {Toolbar, Typography, Container, Box, Grid } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import TableComponent from '../components/Table';
import {getData} from '../services';
import { ColorData } from '../services/interface';
const Page1: React.FC = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]); 

  useEffect(() => {
    getData()
      .then((responseData) => {
        setData(responseData); 
      })
      .catch((error) => {
      });
  }, []);
  const routing = () => {
    navigate('/page2');
    console.log(data)
  }

const columns = [
  { name: 'id', header: 'ID' },
  { name: 'name', header: 'Name'},
  { name: 'year', header: 'Year'},
  { name: 'color', header: 'Color'},
  { name: 'pantone_value', header: 'Pantone'},

];



  return (
    <Grid>
        <Toolbar>
          <Typography variant="h5">Pagina 1</Typography>
        </Toolbar>
      <Container maxWidth="sm">
        <TableComponent columns={columns} data={data}></TableComponent>
        <Box display="flex" justifyContent="center" p={2}>
          <Button onClick={routing}>Pagina 2</Button>
        </Box>
      </Container>
    </Grid>
  );
};

export default Page1;
