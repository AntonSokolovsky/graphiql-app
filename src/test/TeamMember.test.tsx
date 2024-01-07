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
      id: 1,
      name: { en: 'test', ru: 'test' },
      image: 'test',
      stack: { en: 'test', ru: 'test' },
      text: { en: 'test', ru: 'test' },
      gitLink: 'test',
    };

    render(<TeamMember data={data} />);

    expect(screen.getByTestId('memeberName')).toHaveTextContent('test');
  });
});
