import { render, screen } from '@testing-library/react';
import { it, describe } from 'vitest';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import 'react-router-dom';
import SignUpModal from './SignUpModal';

describe('Test for Card component', () => {
  it('Render test', () => {
    render(
      <MemoryRouter>
        <SignUpModal />
      </MemoryRouter>
    );
    // const card = screen.getByTestId('signUp');
    // expect(card).toBeInTheDocument;
    screen.debug();
  });
});
