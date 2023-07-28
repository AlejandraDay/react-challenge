// src/services/__tests__/getData.test.ts
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { getData } from 'services';

jest.mock('axios'); // Mock de axios

test('getData returns the expected data from the API', async () => {
  // Datos simulados de respuesta de la API
  const apiResponse = {
    data: {
      data: [
        { id: 1, name: 'Red', year: 2002, color: '#FF5733', pantone_value: '17-1462' },
        { id: 2, name: 'Green', year: 2005, color: '#00FF00', pantone_value: '17-1234' },
      ],
    },
  };

  // Mock de la función de axios.get para que devuelva los datos simulados
  (axios.get as jest.Mock).mockResolvedValue(apiResponse);

  // Llamar a la función getData
  const result = await getData();

  // Verificar que los datos devueltos sean los esperados
  expect(result).toEqual(apiResponse.data.data);

  // Verificar que la función de axios.get fue llamada con la URL correcta
  expect(axios.get).toHaveBeenCalledWith('https://reqres.in/api/unknown');
});
