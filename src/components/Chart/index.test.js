import { render } from "@testing-library/react";
import React from "react";
import Chart from ".";

describe('Componente de transação do extrato', () => {
    it('O snapshot do componente deve permanecer sempre o mesmo', () => {
        const data = [
    {
        "base_stat": 45,
        "effort": 0,
        "stat": {
            "name": "hp",
            "url": "https://pokeapi.co/api/v2/stat/1/"
        }
    },
    {
        "base_stat": 49,
        "effort": 0,
        "stat": {
            "name": "attack",
            "url": "https://pokeapi.co/api/v2/stat/2/"
        }
    }
]
        const { container } = render(<Chart data={data} size={450} />);

        expect(container.firstChild).toMatchSnapshot();
    })
})