import { render, screen } from "@testing-library/react";
import React from "react";
import Pokemon from ".";
import mockEvolve from "../../mocks/mockEvolve"
import mockPokemon from "../../mocks/mockPokemon.json";
import mockPokemonSpecies from "../../mocks/mockPokemonSpecies.json";
import axios from "axios";
import WrapperComponentTest from "../../components/WrapperComponentTest";

jest.mock('axios');

describe('Página Pokemon', () => {
    describe('Componente que deve renderizar as informações do Pokemon', () => {
        const mockedAxios = axios;
        afterEach(() => jest.resetAllMocks());

        it('Ao inicializar, deve carregar as informações da API', async () => {

            mockedAxios.get.mockReturnValueOnce(
                Promise.resolve({
                    data: mockPokemon
                })
            )
            mockedAxios.get.mockReturnValueOnce(
                Promise.resolve({
                    data: mockPokemonSpecies
                })
            )
            mockedAxios.get.mockReturnValueOnce(
                Promise.resolve({
                    data: mockEvolve
                })
            )

            render(
                <WrapperComponentTest>
                    <Pokemon />
                </WrapperComponentTest>
            )

            expect(await screen.findByText('X')).toBeInTheDocument();
            expect(await screen.findByTestId('util-area')).toBeInTheDocument();

            expect(true).toBe(true);
        })
    })
})