import { screen, render } from '@testing-library/react';
import Filter from './Filter.jsx';

it('test filter', () => {
  const types = ['Fire', 'Bug', 'Water'];
  render(<Filter types={types} />);
  const dropdown = screen.getByLabelText('dropdown');
  expect(dropdown).toMatchSnapshot();
});
