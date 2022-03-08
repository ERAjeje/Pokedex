import { render, screen } from "@testing-library/react";
import React from "react";
import ListPokemon from '.';

describe('Teste do componente ListPokemon', () => {
    describe('Ao renderizar deve', () => {
        it('mostrar o componente UtilArea', () => {
            render(<ListPokemon />);
            expect(screen.getByTestId('util-area')).toBeInTheDocument();
        })
        it('mostrar o botão <', () => {
            render(<ListPokemon />);
            expect(screen.getByText('<')).toBeInTheDocument()
        })
        it('mostrar o botão >', () => {
            render(<ListPokemon />);
            expect(screen.getByText('>')).toBeInTheDocument()
        })
    })
})