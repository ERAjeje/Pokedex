import { render, screen } from "@testing-library/react";
import React from "react";
import { getList } from "../../api/api";
import mockPokemonList from '../../utils/mockPokemonList';
import ListPokemon from '.';

jest.mock('../../api/api');

describe('Ao renderizar o componente ListPokemon', () => { 
    it('deve receber os dados da API', async () => {
        getList.mockResolvedValue(mockPokemonList);

        render(<ListPokemon />);
        
        setTimeout(() => {
            expect(screen.getByTestId('util-area').children.length).toBe(12);
        }, 1);
    })
})