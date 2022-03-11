import { render, screen } from "@testing-library/react";
import React from "react";
import Home from ".";
import ListPokemon from '../ListPokemon'

describe('Página Home', () => {
    describe('Deve renderizar', () => {
        beforeEach(() => render(<Home />,{
            declarations: [ListPokemon],
            routes: [
                {
                    path: '/',
                    component: ListPokemon
                }
            ]
        }
        ));

        it('a imagem do logo', () => {
            const logo = screen.getByRole('img');
            expect(logo).toHaveAttribute('src', 'pokeboll.png')
        })
        it('o texto pokedex', () => {
            expect(screen.getByText('Pokedex')).toBeInTheDocument()
        })
        it('mostrar o botão <',async () => {
            expect(await screen.findByTestId('btnAnterior')).toBeInTheDocument()
        })
        it('mostrar o botão >',async () => {
            expect(await screen.findByTestId('btnProximo')).toBeInTheDocument()
        })
    })
})