import { render, screen } from '@testing-library/react';
import { it, describe } from 'vitest';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import 'react-router-dom';
import SignIn from './SignIn';

describe('Test for Card component', () => {
  it('Render test', () => {
    render(
      <MemoryRouter>
        <SignIn action="sign-in" />
      </MemoryRouter>
    );
    const card = screen.getByTestId('sign');
    expect(card).toBeInTheDocument;
  });
  it('Render test sing up', () => {
    render(
      <MemoryRouter>
        <SignIn action="sign-up" />
      </MemoryRouter>
    );
    const card = screen.getByTestId('signUp');
    expect(card).toBeInTheDocument;
  });
});
