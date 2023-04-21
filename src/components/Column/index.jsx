import styled from 'styled-components';

const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justify ?? 'center'};
    align-items: ${props => props.align ?? 'center'};
    width: ${props => props.width ?? ''};
    height: ${props => props.height ?? ''};
    left: ${props => props.left || ''};

    @media screen and (max-width: 1379px) {
        justify-content: center;
    }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, left, width, height, align, justify }) => {
    return <Col>{children}</Col>;
}