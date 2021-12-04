import { screen, render } from '@testing-library/react';
import SortForm from './SortForm.jsx';

it('test sort', () => {
  render(<SortForm />);
  const dropdown = screen.getByLabelText('sort');
  expect(dropdown).toMatchSnapshot();
});
