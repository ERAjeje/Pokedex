import styled from 'styled-components';

const TextSpan = styled.div`
    padding: ${props => props.padding ?? '15px 35px'};
    font-size: ${props => props.size ?? '2rem'};
    text-transform: ${props => props.capitalize !== null ? 'capitalize' : ''};
    font-weight: ${props => props.weight ?? 'bold'};
`;

export default ({ children }) => <TextSpan>{children}</TextSpan>