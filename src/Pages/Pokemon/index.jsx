import styled from "styled-components";

import Row from "../../components/Row";
import Column from "../../components/Column"
import UtilArea from "../../components/UtilArea";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../api/api";
import Chart from "../../components/Chart";
import TextSpan from "../../components/TextSpan";
import EvolutionChain from "../../components/EvolutionChain";

const CardPokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const Sprite = styled.img`
    margin: 15px 5px;
    width: ${props => props.width ?? '255px'};
`;

export default () => {
    const [pokemon, setPokemon] = useState(null);
    const [evolution, setEvolution] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const asyncFunction = async () => {
            let data = await getItem(`pokemon/${id}`);
            setPokemon({ ...data });
            data = await getItem(`evolution-chain/${id}/`);
            setEvolution({ ...data })
        }
        asyncFunction();
    }, [id])
    return <UtilArea>
        {pokemon !== null && evolution !== null ?
            <CardPokemon>
                <Row justify='start' >
                    <Sprite src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    <Column>
                        <TextSpan capitalize size='2.5rem'>{`Nº ${pokemon.order} - ${pokemon.name}`}</TextSpan>
                        <Row>
                            <TextSpan weight='light' >{`Height: ${pokemon.height}`}</TextSpan>
                            <TextSpan weight='light' >{`Weight: ${pokemon.weight}`}</TextSpan>
                        </Row>
                        <Row>
                            {
                                pokemon.abilities.map((item, index) =>
                                    <TextSpan key={index} weight='light' >{`${item.ability.name}${index % 2 === 0 ? ' /' : ''}`}</TextSpan>)
                            }
                        </Row>
                        <Row>
                            <TextSpan weight='light' >Type: </TextSpan>
                            {
                                pokemon.types.map((item, index) =>
                                    <TextSpan key={index} weight='light'>{`${item.type.name}${index % 2 === 0 ? ' /' : ''}`}</TextSpan>
                                )
                            }
                        </Row>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Chart data={pokemon.stats} size={450} />
                    </Column>
                    <Column>
                        <EvolutionChain data={evolution} />
                    </Column>
                </Row>
            </CardPokemon>
            : ''
        }
    </UtilArea>
}