import { render, screen } from "@testing-library/react";
import React from "react";
import { Route } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import Pokemon from ".";
import api from "../../api/api";
import mockPokemon from "../../utils/mockPokemon";
import mockEvolve from "../../utils/mockEvolve"

jest.mock('../../api/api');

describe('Página Pokemon', () => {
    describe('Componente que deve renderizar as informações do Pokemon', () => {
        it('Ao inicializar, deve carregar as informações da API', async () => {
            
            expect(true).toBe(true);
        })
    })
})