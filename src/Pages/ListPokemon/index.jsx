import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../../api/api";
import Card from "../../components/Card";
import UtilArea from "../../components/UtilArea";

const aux = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Display({ offset }) {
    const [pokemon, setPokemon] = useState([]);

    const _getItens = async () => {
        const data = await getList(offset);
        setPokemon(data.results);
    }

    useEffect(() => {
        _getItens();
    }, [offset])

    return <UtilArea>
        {
            pokemon.map((item, index) => <Link key={item.name} to={`/${index + 1}`}><Card index={index + 1 + offset} name={item.name} /></Link>)
        }
    </UtilArea>
}