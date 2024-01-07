import { render, screen } from '@testing-library/react';
import { it, describe } from 'vitest';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import 'react-router-dom';
import NavBar from './NavBar';

describe('Test for Card component', () => {
  it('Render test', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    screen.debug();
  });
});
