import { render, screen } from "@testing-library/react";
import React from "react";
import Home from ".";

describe('Página Home', () => {
    describe('Deve renderizar', () => {
        it('a imagem do logo', () => {
            render(<Home />);
            const logo = screen.getByRole('img');
            expect(logo).toHaveAttribute('src', 'pokeboll.png')
        })
        it('o texto pokedex', () => {
            render(<Home />);
            expect(screen.getByText('Pokedex')).toBeInTheDocument()
        })
        it('o botão de anterior', () => {
            render(<Home />);
            expect(screen.getByText('<')).toBeInTheDocument()
        })
        it('o botão de próximo', () => {
            render(<Home />);
            expect(screen.getByText('>')).toBeInTheDocument()
        })
    })
})