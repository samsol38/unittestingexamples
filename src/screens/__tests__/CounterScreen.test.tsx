import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CounterScreen from '../counter';

describe('CounterScreen render with snapshot', () => {
  test('matches snapshot', () => {
    const tree = render(<CounterScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CounterScreen events', () => {
  test('renders initial counter value', () => {
    const {getByText} = render(<CounterScreen />);
    const counterText = getByText('Counter: 0');
    expect(counterText).toBeDefined();
  });

  test('increments counter value when increment button is pressed', () => {
    const {getByText} = render(<CounterScreen />);
    const incrementButton = getByText('Increment');
    const counterText = getByText('Counter: 0');
    fireEvent.press(incrementButton);
    expect(counterText.props.children).toBe('Counter: 1');
  });

  test('decrements counter value when decrement button is pressed', () => {
    const {getByText} = render(<CounterScreen />);
    const decrementButton = getByText('Decrement');
    const counterText = getByText('Counter: 0');
    fireEvent.press(decrementButton);
    expect(counterText.props.children).toBe('Counter: -1');
  });
});
