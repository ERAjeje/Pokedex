import { render, screen } from '@testing-library/react';
import App from './App';

describe('Deve renderizar o componente Home', () => {
  it('renders learn react link', () => {
    render(<App />);
    
    expect(screen.getByText('Pokedex')).toBeInTheDocument();
  });
})
