import { screen } from '@testing-library/react';
import { render } from './test-utils/testing-library-utils';
import { wrapper } from './test-utils/testing-library-utils';
import { Provider } from 'react-redux';
import App from './App';

test('renders learn react link', () => {
  render(<App />, { wrapper });
  const titleElement = screen.getByText(/horse racing/i);
  expect(titleElement).toBeInTheDocument();
});
