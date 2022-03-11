import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../../api/api";
import Button from "../../components/Button";
import Card from "../../components/Card";
import UtilArea from "../../components/UtilArea";

import styled from 'styled-components';
import Column from "../../components/Column";
import ButtonBar from "../../components/ButtonBar";

const CardLink = styled(Link)`
    text-decoration: none;
`;

const aux = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Display() {
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(0);
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

    const _handlePlusClick = () => setPage(page + 1);
    const _handleMinusClick = () => {
        if (page - 1 > 0) setPage(page - 1);
        else setPage(0);
    };

    let offset = page * 12;

    useEffect(() => {
        getList(offset).then(data => setPokemon(data.results));
    }, [page])

    return <>
        <Button onClick={_handleMinusClick} >{'<'}</Button>
        <UtilArea data-testid='util-area'>
            {
                pokemon && pokemon.map((item, index) => <CardLink key={item.name} to={`/${index + 1 + offset}`}>
                    <Card data-testid='card-pokemon' index={index + 1 + offset} >
                        <Column>
                            <img src={`${image}${index + 1 + offset}.png`} />
                            {item.name.toUpperCase()}
                        </Column>
                    </Card>
                </CardLink>)
            }
            <ButtonBar page={page} func={setPage} />
        </UtilArea>
        <Button onClick={_handlePlusClick} >{'>'}</Button>
    </>
}