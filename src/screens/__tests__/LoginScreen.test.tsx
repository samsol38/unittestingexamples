import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '../login';

describe('LoginScreen render with snapshot', () => {
  test('matches snapshot', () => {
    const tree = render(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LoginScreen events', () => {
  test('renders input fields and login button', () => {
    const {getByPlaceholderText, getByText} = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(loginButton).toBeDefined();
  });

  test('updates email state on input change', () => {
    const {getByPlaceholderText} = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email');
    fireEvent.changeText(emailInput, 'user@example.com');
    expect(emailInput.props.value).toBe('user@example.com');
  });

  test('updates password state on input change', () => {
    const {getByPlaceholderText} = render(<LoginScreen />);
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.changeText(passwordInput, 'password');
    expect(passwordInput.props.value).toBe('password');
  });

  test('displays error message for invalid credentials', () => {
    const {getByPlaceholderText, getByText} = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
    fireEvent.changeText(emailInput, 'invalid@example.com');
    fireEvent.changeText(passwordInput, 'wrongpassword');
    fireEvent.press(loginButton);
    const errorText = getByText('Invalid email or password');
    expect(errorText).toBeDefined();
  });

  test('clears error message after successful login', () => {
    const {getByPlaceholderText, getByText, queryByText} = render(
      <LoginScreen />,
    );
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
    fireEvent.changeText(emailInput, 'user@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(loginButton);
    const errorText = queryByText('Invalid email or password');
    expect(errorText).toBeNull();
  });
});
