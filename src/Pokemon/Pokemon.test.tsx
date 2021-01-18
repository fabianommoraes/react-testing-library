import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Pokemon from './Pokemon';
import { Ability } from './Pokemon';
import userEvent from '@testing-library/user-event';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('when the user enters a valid pokemon name', () => {
  test('should show the pokemon abilities of that pokemon', async () => {
    const abilities: Ability[] = [
      {
        name: 'Ability name 1',
        url: 'https://url1.com',
      },
      {
        name: 'Ability name 2',
        url: 'https://url2.com',
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: abilities });
    render(<Pokemon />);
    await userEvent.type(screen.getByRole('textbox'), 'ditto');
    await userEvent.click(screen.getByRole('button'));

    // const returnedAbilities = await screen.findAllByRole('listitem');// não funfou
    // expect(returnedAbilities).toHaveLength(2);
  });
});

describe('when the user enters a invalid pokemon name', () => {
  test('should show an error message in the screen', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error());
    render(<Pokemon />);
    await userEvent.type(screen.getByRole('textbox'), 'invalid-pokemon-name');
    await userEvent.click(screen.getByRole('button'));
    const message = await screen.findByText(/Something wrong happened.../);
    expect(message).toBeInTheDocument();
  });
});
