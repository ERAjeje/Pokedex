import { useState } from "react";
import styled from "styled-components";
import Display from "../../components/Display";
import Heather from "../../components/Heather";

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F03124;
    height: 100vh;
`;

const Button = styled.button`
    background-color: #1394F0;
    color: white;
    width: 150px;
    height: 150px;
    border-radius: 80px;
    font-size: 90px;
    font-weight: bold;
    border: none;
    margin: auto;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 1);
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default function Home() {
    const [page, setPage] = useState(0);

    const _handlePlusClick = () => setPage(page + 1);
    const _handleMinusClick = () => {
        if (page - 1 > 0) setPage(page - 1);
        else setPage(0);
    };
    return (
        <Background>
            <Row>
                <Heather />
            </Row>
            <Row>
                <Button onClick={_handleMinusClick} >{'<'}</Button>
                <Display offset={page * 12} />
                <Button onClick={_handlePlusClick} >{'>'}</Button>
            </Row>
        </Background>
    )
}
