import { screen, render } from '@testing-library/react';
import Compendium from './Compendium.jsx';

it('test sort', () => {
  render(<Compendium />);
  const isLoading = screen.getByText('Wait For It');
  expect(isLoading).toBeInTheDocument();
});
