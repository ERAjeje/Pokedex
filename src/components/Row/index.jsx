import styled from "styled-components";


const Row = styled.div`
    display: flex;
    justify-content: ${props => props.justify ?? 'center'};
    align-items: ${props => props.align ?? 'center'};
    width: ${props => props.width ?? '100%'};
    height: ${props => props.height ?? ''};
    flex-wrap: ${props => props.wrap ?? 'wrap'};
`;

export default ({ children }) => {
    return <Row>{children}</Row>;
}