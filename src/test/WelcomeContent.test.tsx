/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import WelcomeContent from '../components/WelcomeContent/WelcomeContent';
import '@testing-library/jest-dom';

describe('WelcomeContent', () => {
  test('Ensure that the WelcomeContent component renders', async () => {
    render(<WelcomeContent />);

    await screen.getByText('GraphiQL App');

    expect(screen.getByText('GraphiQL App')).toBeInTheDocument();
  });
});
