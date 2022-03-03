import { useEffect, useState } from "react";
import styled from "styled-components";
import { getList } from "../../api/api";
import Card from "../Card";


const UtilArea = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    justify-content: space-around;
    overflow: hidden;
    padding: 5px;
    width: 70%;
`;

const aux = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Display({ offset }) {
    const [pokemon, setPokemon] = useState([]);

    const _getItens = async () => {
        const data = await getList(offset);
        setPokemon(data.results)
        console.log(data.results);
    }

    useEffect(async () => {
        await _getItens();
    }, [offset])

    return <UtilArea>
        {
            pokemon.map((item, index) => <Card key={item.name} index={index + 1 + offset} name={item.name} />)
        }
    </UtilArea>
}