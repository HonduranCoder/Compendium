import { screen, render } from '@testing-library/react';
import Pokemon from './Pokemon.jsx';

it('test sort', () => {
  render(
    <Pokemon pokemon="pikachu" hp={23} attack={40} defense={40} shape="arms" />
  );
  const pokemon = screen.getByLabelText('pokemon');
  expect(pokemon).toMatchSnapshot();
});
