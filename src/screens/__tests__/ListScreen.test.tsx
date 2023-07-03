// ListScreen.test.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import ListScreen from '../list';

import {mockItems} from '../__mock__';

describe('ListScreen render with snapshot', () => {
  test('matches snapshot', () => {
    const tree = render(<ListScreen items={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ListScreen render with snapsho with black itemst', () => {
  test('matches snapshot', () => {
    const tree = render(<ListScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ListScreen', () => {
  test('renders screen component without items', () => {
    const {getByText} = render(<ListScreen />);
    const componentText = getByText('ListScreen Component');
    expect(componentText).toBeDefined();
  });

  test('renders screen component with black items', () => {
    const {getByText} = render(<ListScreen items={[]} />);
    const componentText = getByText('ListScreen Component');
    expect(componentText).toBeDefined();
  });

  test('renders item names correctly', () => {
    const {getByText} = render(<ListScreen items={mockItems} />);
    mockItems.forEach(item => {
      const itemText = getByText(item.name);
      expect(itemText).toBeDefined();
    });
  });

  test('renders correct number of items', () => {
    const {getAllByText} = render(<ListScreen items={mockItems} />);
    const itemTexts = getAllByText(/Item/);
    expect(itemTexts.length).toBe(mockItems.length);
  });
});
