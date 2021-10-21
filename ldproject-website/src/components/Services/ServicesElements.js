import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ServicesContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding-top: 8rem;

    @media screen and (max-width: 1000px) {
        height: 1800px;
    }

    @media screen and (max-width: 768px) {
        height: 2000px;
        padding-top: 15rem;
    }

    @media screen and (max-width: 768px) {
        height: 2000px;
        padding-top: 15rem;
    }

    @media screen and (max-width: 540px) {
        height: 1600px;
        padding: 3rem;
        padding-top: 5rem;
        align-items: center;
        justify-content: left;
    }

    @media screen and (max-width: 320px) {
        height: 1600px;
        padding: 2rem;
        padding-top: 5rem;
        align-items: flex-start;
        justify-content: left;

    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 60px;
    padding: 0;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 540px) {
        grid-template-columns: 1fr;
        padding: 0;
        padding-top: 2rem;
        grid-gap: 40px;
        color: #1d777c;
    }

    @media screen and (max-width: 320px) {
        padding-top: 1rem;
        align-items: flex-start;
    }

`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    /* border-radius: 10px; */
    max-height: 550px;
    height: 433px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transform: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
   width: 100%;
   height: 300px;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   border-radius: 20px 20px 0px 0px;

   @media screen and (max-width: 1000px) {
        height: 263px;
    }

   @media screen and (max-width: 768px) {
        height: 263px;
    }

    @media screen and (max-width: 720px) {
        height: 249px;
    }
    @media screen and (max-width: 540px) {
        height: 215px;
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #1d777c;
    margin-bottom: 20px;
    @media screen and (max-width: 540px) {
        font-size: 32px;
    }
    @media screen and (max-width: 320px) {
        font-size: 32px;
        text-align: left;
        margin: 0;
        padding-left: 1rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #1d777c;
    @media screen and (max-width: 320px) {
        
    }
`;

export const ServicesP1 =styled.p`
    font-size: 1rem;
    margin-bottom: 50px;
    color: #1d777c;

    @media screen and (max-width: 540px) {
        font-size: 12px;
        margin: 0;
        text-align: justify;
    }

    @media screen and (max-width: 320px) {
        font-size: 12px;
        margin: 0;
        padding: 1rem;
        padding-top: 0;
        text-align: left;
    }
`

export const ServicesText =styled.p`
    font-size: 0.8rem;
    margin-bottom: 20px;
    color: #1d777c;
    @media screen and (max-width: 540px) {
        font-size: 12px;
    }
    @media screen and (max-width: 320px) {
        @media screen and (max-width: 320px) {
        
    }
    }

`

export const LearnBtn =styled.nav`
    display: flex;
    align-items: center;
    padding-bottom: 30px;
`

export const LearnBtnLink=styled(LinkR)`
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #1D777C;
    font-size: 14px;
    outline: none;
    border: 1px solid #1D777C;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #1D777C;
        color: #fff;
    }
    `