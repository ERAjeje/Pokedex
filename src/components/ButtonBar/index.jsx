import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const ButtonBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    width: 100%;
    height: 55px;

    @media screen and (min-width: 1069px) {
        display: none;
    }
`;

const ButtonLink = styled(Link)`
    text-decoration: none;
`;

const StyledButton = styled(Button)`
    display: block;
    font-size: 1rem;
    width: 85px;
    height: 45px;
    padding: 5px 15px;
`;

export default ({ param, page, func }) => {
    const _handleHomeClick = () => {
        func(0)
    }
    const _handleMinusClick = () => {
        if (page > 0) func(page - 1);
        else func(0)
    }
    const _handlePlusClick = () => {
        func(page + 1);
    }

    return (param === undefined
        ? <ButtonBar>
            <StyledButton onClick={_handleMinusClick}>{'<'}</StyledButton>
            <StyledButton onClick={_handleHomeClick}>Home</StyledButton>
            <StyledButton onClick={_handlePlusClick}>{'>'}</StyledButton>
        </ButtonBar>
        : <ButtonBar>
            <Route>
                <ButtonLink to={`${param - 1}`}><StyledButton>{'<'}</StyledButton></ButtonLink>
                <ButtonLink to={`/`}><StyledButton>Home</StyledButton></ButtonLink>
                <ButtonLink to={`${param + 1}`}><StyledButton>{'>'}</StyledButton></ButtonLink>
            </Route>
        </ButtonBar>);
}