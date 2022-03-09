import styled from "styled-components";

const UtilArea = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    justify-content: space-around;
    overflow: ${props => props.hidden ? 'hidden' : ''};
    padding: 5px;
    width: 70%;
    box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.2);
`;

export default UtilArea;