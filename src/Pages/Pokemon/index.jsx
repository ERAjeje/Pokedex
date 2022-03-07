import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getItem } from "../../api/api";
import Row from "../../components/Row";
import UtilArea from "../../components/UtilArea";

const CardPokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const Sprite = styled.img`
`;

export default () => {
    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const asyncFunction = async () => {
            const data = await getItem(id);
            setPokemon({ ...data });
        }
        asyncFunction();
    }, [id])
    return <UtilArea>
        {pokemon !== null ?
            <CardPokemon>
                <Row justify='start' height='40%' >
                    <Sprite src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.forms[0].name} />
                </Row>
            </CardPokemon>
            : ''
        }
    </UtilArea>
}