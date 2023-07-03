// Screen.test.tsx
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import UserListScreen from '../userlist';
import fetch from 'jest-fetch-mock';

import {mockUserData} from '../__mock__';

describe('UserListScreen render with snapshot', () => {
  test('matches snapshot', () => {
    const tree = render(<UserListScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('UserListScreen', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.enableMocks();
  });

  test('renders loading text while fetching data', () => {
    const {getByText} = render(<UserListScreen />);
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeDefined();
  });

  test('renders user data when API call is successful', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockUserData));

    const {getByText} = render(<UserListScreen />);

    await waitFor(() => {
      const nameText = getByText('Name: John Doe');
      const emailText = getByText('Email: john.doe@example.com');
      expect(nameText).toBeDefined();
      expect(emailText).toBeDefined();
    });
  });

  /*
  test('handles API call error', async () => {
    fetch.mockRejectOnce(new Error('API error'));

    const {getByText} = render(<UserListScreen />);

    await waitFor(() => {
      const errorText = getByText('Error fetching user data:');
      expect(errorText).toBeDefined();
    });
  });
  */
});
