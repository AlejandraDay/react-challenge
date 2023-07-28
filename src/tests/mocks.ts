// mocks.ts

import { useNavigate as originalUseNavigate } from 'react-router-dom';

export const mockUseNavigate = jest.fn();
export const useNavigate = () => mockUseNavigate;

// Función para restablecer el mock antes de cada prueba
export const resetMockNavigate = () => {
  mockUseNavigate.mockClear();
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate,
}));
