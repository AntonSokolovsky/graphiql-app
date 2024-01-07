/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import TeamMember from '../components/TeamMember/TeamMember';
import '@testing-library/jest-dom';
import { IPersonTeam } from '../interface';

describe('memeberName', () => {
  test('Ensure that the WelcomeContent component renders', async () => {
    const data: IPersonTeam = {
      name: 'test',
      image: 'test',
      stack: 'test',
      text: 'test',
      gitLink: 'test',
    };

    render(<TeamMember data={data} />);

    expect(screen.getByTestId('memeberName')).toHaveTextContent('test');
  });
});
