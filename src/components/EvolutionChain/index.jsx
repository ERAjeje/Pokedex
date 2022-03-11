import Row from '../Row';
import TextSpan from '../TextSpan';
import styled from 'styled-components';

const Span = styled.div`
    padding-right: 1rem;
`;

export default ({ data }) => {
    let aux = [];
    aux[0] = data.chain.species.name;
    if (data.chain.evolves_to.length > 0)
        aux[1] = (data.chain.evolves_to[0].species.name);
    if (data.chain.evolves_to[0].evolves_to.length > 0)
        aux[2] = (data.chain.evolves_to[0].evolves_to[0].species.name);
    return <Row>
        {
            aux.map((item, index) => <div key={item}>
                <TextSpan padding='0' >{item}</TextSpan>
                <Span>{index < aux.length - 1 ? '>' : ''}</Span>
            </div>)
        }
    </Row>
}