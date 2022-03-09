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

export default function Home() {

    return (
        <Background>
            <Row>
                <Heather data-testid='heather' />
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
