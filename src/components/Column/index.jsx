import styled from 'styled-components';

const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justify ?? 'center'};
    align-items: ${props => props.align ?? 'center'};
    width: ${props => props.width ?? ''};
    height: ${props => props.height ?? ''};
`;

export default ({ children }) => {
    return <Col>{children}</Col>;
}