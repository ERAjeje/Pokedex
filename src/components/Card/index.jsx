import styled from "styled-components";

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    width: 300px;
    height: 253px;
    background-color: #1394F0;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
    margin: 5px;
    font-size: 40px;
    color: white;
`;

export default ({ children }) => {
    return (
        <Card>
            {children}
        </Card>
    );
}