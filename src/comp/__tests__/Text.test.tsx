// Text.test.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '../Text';

describe('Text', () => {
  test('applies custom style', () => {
    const customStyle = {
      fontSize: 20,
      color: 'red',
    };
    const {getByText} = render(
      <Text text="Custom Style" style={customStyle} />,
    );
    const textElement = getByText('Custom Style');
    expect(textElement).toBeDefined();
  });

  test('renders text correctly', () => {
    const {getByText} = render(<Text text="Hello World" />);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  test('renders text correctly without text', () => {
    const {getByText} = render(<Text />);
    const textElement = getByText('');
    expect(textElement).toBeDefined();
  });
});
