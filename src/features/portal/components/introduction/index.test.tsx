import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Introduction from './';

test('renders Introduction component', () => {
  const { getByText } = render(<Introduction />, {wrapper: BrowserRouter});

  expect(getByText(/portfolio website/i)).toBeInTheDocument();
});
