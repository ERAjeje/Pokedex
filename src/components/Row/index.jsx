/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";


const Row = styled.div`
    display: flex;
    justify-content: ${props => props.justify ?? 'space-around'};
    align-items: ${props => props.align ?? 'center'};
    width: ${props => props.width ?? '100%'};
    height: ${props => props.height ?? ''};
    flex-wrap: ${props => props.wrap ?? 'nowrap'};
    margin-left: ${props => props.left ?? ''};

    @media screen and (max-width: 1379px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export default ({ children }) => {
    return <Row>{children}</Row>;
}