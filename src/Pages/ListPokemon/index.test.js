import { render, screen, debug } from "@testing-library/react";
import React from "react";
import ListPokemon from '.';

describe('Componente ListPokemon', () => {
    describe('Ao renderizar deve', () => {
        beforeEach(() => render(<ListPokemon />));
        
        it('mostrar o componente UtilArea', () => {
            expect(screen.getByTestId('util-area')).toBeInTheDocument();
        })
    })
})