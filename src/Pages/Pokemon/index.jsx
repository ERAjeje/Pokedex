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
import Button from "../../components/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import ButtonBar from "../../components/ButtonBar";

const CardPokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const Sprite = styled.img`
    margin: 15px 5px;
    width: ${props => props.width ?? '175px'};
`;

export default () => {
    const { id } = useParams();
    const history = useHistory();
    const [pokemon, setPokemon] = useState(null);
    const [evolution, setEvolution] = useState(null);

    const param = parseInt(id);


    const _handlePlusClick = () => history.replace(`/${param + 1}`);
    const _handleMinusClick = () => {
        if (param - 1 > 0) history.replace(`/${param - 1}`);
    };

    useEffect(() => {
        getItem(`pokemon/${id}`).then(data => setPokemon({ ...data }));
        getItem(`pokemon-species/${id}/`).then(data => axios.get(data.evolution_chain.url).then(item => setEvolution(item.data)));
    }, [id])
    return <>
        <Button onClick={_handleMinusClick}>{'<'}</Button>
        <UtilArea hidden={false}>
            {pokemon !== null && evolution !== null ?
                <CardPokemon>
                    <Row justify='start' >
                        <ButtonBar param={param} />
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
                                        <TextSpan key={item.ability.name} weight='light' >{`${item.ability.name}${index !== pokemon.abilities.length - 1 ? ' /' : ''}`}</TextSpan>)
                                }
                            </Row>
                            <Row>
                                <TextSpan weight='light' >Type: </TextSpan>
                                {
                                    pokemon.types.map((item, index) =>
                                        <>
                                            <TextSpan key={item.type.name} weight='light'>{item.type.name}</TextSpan>
                                            {index % 2 === 0 ? ' /' : ''}
                                        </>
                                    )
                                }
                            </Row>
                        </Column>
                    </Row>
                    <Row wrap>
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
        <Button onClick={_handlePlusClick}>{'>'}</Button>
    </>
}