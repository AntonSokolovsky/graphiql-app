import { render, screen } from '@testing-library/react';
import { it, describe } from 'vitest';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import MainPage from '../../pages/MainPage/MainPage';

describe('Test for Card component', () => {
  it('Render test', () => {
    render(
      <MemoryRouter>
        <PrivateRoute>
          <MainPage />
        </PrivateRoute>
      </MemoryRouter>
    );
    screen.debug();
  });
});
