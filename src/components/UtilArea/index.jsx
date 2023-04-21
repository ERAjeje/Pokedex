import styled from "styled-components";

const UtilArea = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    height: 85vh;
    justify-content: space-around;
    overflow-y: ${props => props.hidden ? 'hidden' : ''};
    overflow-x: inherit;
    padding: 5px;
    width: 70%;
    box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.2);

    &::-webkit-scrollbar {
        width: 8px;               /* width of the entire scrollbar */;
    }
        
    &::-webkit-scrollbar-track {
        background: white;        /* color of the tracking area */
    }
        
    &::-webkit-scrollbar-thumb {
        background-color: #1394F0;    /* color of the scroll thumb */
        border: 3px solid white;  /* creates padding around scroll thumb */
    }
    
    @media screen and (max-width: 1379px) {
        font-size: 1rem;
        overflow-y: scroll;
        height: 80vh;
        border-radius: 20px 0 0 20px;
    }
    @media(max-width: 767px) {
        overflow-y: scroll;
        height: 65vh;
    }
`;

export default UtilArea;