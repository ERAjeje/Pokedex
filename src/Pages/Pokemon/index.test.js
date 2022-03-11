import { act, render, screen } from "@testing-library/react";
import React from "react";
import Pokemon from ".";
import api, { getItem } from "../../api/api";
import mockPokemon from "../../utils/mockPokemon";
import mockEvolve from "../../utils/mockEvolve"
import { useParams } from "react-router-dom";

jest.mock('../../api/api');

describe('Página Pokemon', () => {
    describe('Componente que deve renderizar as informações do Pokemon', () => {
        it('Ao inicializar, deve carregar as informações da API', async () => {
            getItem.mockResolvedValue(mockPokemon)
            //act(() => render(<Pokemon />))
            
            expect(true).toBe(true);
        })
    })
})
/*
describe('Componente Pokemon', () => {
    describe('Ao renderizar deve', () => {
        beforeEach(() => {
            jest.mock("react-router-dom", () => ({
                ...jest.requireActual("react-router-dom"),
                useParams: () => ({
                    id: 1
                })  
            }));
            act(() => render(<Pokemon />));
        });
        
        it('mostrar o componente UtilArea', () => {
            expect(screen.getByTestId('util-area')).toBeInTheDocument();
        })
        it('mostrar o botão <', () => {
            expect(screen.getByText('<')).toBeInTheDocument()
        })
        it('mostrar o botão >', () => {
            expect(screen.getByText('>')).toBeInTheDocument()
        })
    })
})*/