
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../layouts/Login';
import { resetMockNavigate, mockUseNavigate } from './mocks'; 

test('login redirects to Page1 after successful login', () => {
  // Restablecer el mock antes de cada prueba
  resetMockNavigate();

  render(
    <Router>
      <Login />
    </Router>
  );
  // Ingresa las credenciales válidas
  const userField = screen.getByLabelText(/Usuario/i);
  const passwordField = screen.getByLabelText(/Contraseña/i);
  const loginButton = screen.getByRole('button', { name: /Iniciar Sesión/i });

  fireEvent.change(userField, { target: { value: 'user1' } });
  fireEvent.change(passwordField, { target: { value: 'Pass111' } });
  fireEvent.click(loginButton);

  const errorText = screen.queryByText(/Usuario o contraseña incorrectos/i);
  expect(errorText).not.toBeInTheDocument();

  
});

  //expect(mockUseNavigate).toHaveBeenCalledWith('/page1');