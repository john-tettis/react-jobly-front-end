import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);

});

test('renders App to snapshot', () => {
  let {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();

});
