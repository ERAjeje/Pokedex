import styled from "styled-components";
import ListPokemon from '../ListPokemon'
import Heather from "../../components/Heather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemon from "../Pokemon";
import Row from "../../components/Row";

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F03124;
    height: 100vh;
`;

const Button = styled.button`
    background-color: #1394F0;
    color: white;
    width: 150px;
    height: 150px;
    border-radius: 80px;
    font-size: 90px;
    font-weight: bold;
    border: none;
    margin: auto;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 1);
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 120px;
        height: 120px;
        border-radius: 60px;
        margin: 0 25px;
    }
    @media(max-width: 767px) {
        display: none;
    }
`;



export default function Home() {

    return (
        <Background>
            <Row>
                <Heather />
            </Row>
            <Row>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <ListPokemon />
                        </Route>
                        <Route path='/:id'>
                            <Pokemon />
                        </Route>
                    </Switch>
                </Router>
            </Row>
        </Background>
    )
}
