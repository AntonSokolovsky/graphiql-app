/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import DialogUrl from '../components/DialogUrl/DialogUrl';
import '@testing-library/jest-dom';

describe('DialogUrl', () => {
  test('Ensure that the DialogUrl button component renders', async () => {
    render(<DialogUrl outerUrl={'test'} setOuterUrl={() => {}} />);

    const button = await screen.getByText('Set up API URL');

    expect(button).toBeInTheDocument();
  });

  test('Ensure that the DialogUrl dialog component renders after click', async () => {
    render(<DialogUrl outerUrl={'test'} setOuterUrl={() => {}} />);

    const button = await screen.getByText('Set up API URL');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const urlInput = await screen.getByTestId('urlInput');

    expect(urlInput).toBeInTheDocument();
  });
});
