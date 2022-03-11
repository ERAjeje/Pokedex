import { render, screen } from "@testing-library/react";
import React from "react";
import Home from ".";

describe('Página Home', () => {
    describe('Deve renderizar', () => {
        beforeEach(() => render(<Home />));

        it('a imagem do logo', () => {
            const logo = screen.getByRole('img');
            expect(logo).toHaveAttribute('src', 'pokeboll.png')
        })
        it('o texto pokedex', () => {
            expect(screen.getByText('Pokedex')).toBeInTheDocument()
        })
    })
})