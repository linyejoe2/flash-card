import { render } from '@testing-library/react-native';
import { StyleSheet, Text, View } from 'react-native';
import App from './App';

test('renders a View', () => {
  const { UNSAFE_getByType } = render(<App />);
  const viewElement = UNSAFE_getByType(View);
  expect(viewElement).toBeDefined();
  expect(viewElement).toBeTruthy();
});

test('renders a Text inside View', () => {
  const { UNSAFE_getByType } = render(<App />);
  const viewElement = UNSAFE_getByType(View);
  const textElement = viewElement.findByType(Text);
  expect(textElement).toBeDefined();
  expect(textElement).toBeTruthy();
});

test('renders correct text in View', () => {
  const { getByText } = render(<App />);
  const viewElement = getByText('Open up App.tsx to start working on your app!');
  expect(viewElement).toBeDefined();
  expect(viewElement).toBeTruthy();
});
