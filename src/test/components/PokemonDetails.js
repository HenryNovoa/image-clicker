import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';
import { usePokemonContext } from '../../context/PokemonContextProvider';

jest.mock('../../context/PokemonContextProvider');

describe('PokemonDetails', () => {
  it('renders the name, image, abilities, and click count of the selected Pokemon', () => {
    usePokemonContext.mockReturnValue({
      selectedItem: {
        name: 'Test Pokemon',
        imageUrl: 'https://test.com/pokemon.png',
        clicks: 5,
        abilities: [
          { ability: { name: 'ability1' } },
          { ability: { name: 'ability2' } },
          { ability: { name: 'ability3' } }
        ]
      }
    });

    render(<PokemonDetails />);

    // verify the name is displayed
    expect(screen.getByText('Test Pokemon')).toBeInTheDocument();

    // verify the image is displayed
    const pokemonImage = screen.getByRole('img');
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('src', 'https://test.com/pokemon.png');

    // verify the abilities are displayed
    expect(screen.getByText('Abilities')).toBeInTheDocument();
    expect(screen.getByText('ABILITY1')).toBeInTheDocument();
    expect(screen.getByText('ABILITY2')).toBeInTheDocument();
    expect(screen.getByText('ABILITY3')).toBeInTheDocument();

    // verify the click count is displayed
    expect(screen.getByText('Number of clicks: 5')).toBeInTheDocument();
  });

  it('does not render anything if there is no selected Pokemon', () => {
    usePokemonContext.mockReturnValue({ selectedItem: null });

    render(<PokemonDetails />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
