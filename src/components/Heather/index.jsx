import styled from "styled-components";
import image from '../../assets/pokeboll.png'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
`;

const Icon = styled.img`
    width: 5rem;
    margin-right: 2rem;
`;

const Title = styled.span`
    font-size: 4rem;
    color: white;
    font-family: 'Permanent Marker', cursive;
`;

export default () => {
    return <Container>
        <Icon src={image} />
        <Title>Pokedex</Title>
    </Container>
}