import { render, screen } from '@testing-library/react';
import { it, describe } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import 'react-router-dom';

describe('Test for Card component', () => {
  it('Render test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.debug();
  });
});
