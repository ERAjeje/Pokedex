import { render, screen } from "@testing-library/react";
import React from "react";
import mockPokemonList from '../../mocks/mockPokemonList.json';
import ListPokemon from '.';
import WrapperComponentTest from "../../components/WrapperComponentTest";
import axios from "axios";

jest.mock("axios");

describe('Componente ListPokemon', () => {
    describe('Ao renderizar o componente ListPokemon', () => { 
        const mockedAxios = axios;
        afterEach(() => jest.clearAllMocks());

        it('deve receber os dados da API', async () => {
            mockedAxios.get.mockReturnValueOnce(Promise.resolve({
                data: mockPokemonList
            }));

            render(
                <WrapperComponentTest>
                    <ListPokemon />
                </WrapperComponentTest>
            )
            
            
            expect(await screen.findByText('bulbasaur'.toUpperCase())).toBeInTheDocument();
            expect(await screen.findByText('ivysaur'.toUpperCase())).toBeInTheDocument();
            expect(await screen.findByText('butterfree'.toUpperCase())).toBeInTheDocument();
        })
    })
})