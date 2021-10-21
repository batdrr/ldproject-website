import styled from  'styled-components';

export const ContactContainer = styled.div`
    z-index: 1;
    height: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 1000px) {
        height: 1800px;
    }

    @media screen and (max-width: 768px) {
        height: 1200px;
        padding-top: 15rem;
    }

    @media screen and (max-width: 540px) {
        height: 500px;
        padding: 5rem;
    }

    @media screen and (max-width: 320px) {
        height: 500px;
        padding: 2rem;
    }

`

export const ContactWrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: left;
    justify-content: left;
    grid-gap: 60px;
    padding: 0;
    padding-right: 60rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        padding: 4rem;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0;
        height: 600px;
    }

    @media screen and (max-width: 540px) {
        grid-template-columns: 1fr;
        padding: 0;
        height: 600px;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        height: 300px;
        grid-gap: 0;
    }

    @media screen and (max-width: 320px) {
        grid-template-columns: 1fr;
        padding: 0;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        height: 200px;
        grid-gap: 0;
    }
    `

export const ContactText = styled.div`
    @media screen and (max-width: 540px) {
        padding: 0;
    }
    @media screen and (max-width: 320px) {
        padding: 0 1rem 0 1rem;
    }
`

export const ContactH1 = styled.h1`
    font-size: 3rem;
    color: #1D777C;

    @media screen and (max-width: 540px) {
    font-size: 2rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 24px;
        text-align: left;
    }
`

export const ContactP1 = styled.p`
    padding-top: 10px;
    font-size: 1rem;
    color: #1D777C;

    @media screen and (max-width: 320px) {
        text-align: justify;
        font-size: 12px;
        padding-top: 1rem;
    }
`

export const ContactButtonWrapper = styled.div`
    max-width: 1000px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: flex-start;
    grid-gap: 20px;
    padding-right: 20rem;

    @media screen and (max-width: 720px) {
    padding-right: 20rem;
    }

    @media screen and (max-width: 540px) {
    padding: 0;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    }

    @media screen and (max-width: 320px) {
    padding: 0;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    }
`

export const ContactButton = styled.div`
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #1D777C;
    font-size: 16px;
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

    @media screen and (max-width: 540px) {
    font-size: 12px;
    }

    @media screen and (max-width: 340px) {
    font-size: 12px;
    }
`

export const ContactIMG = styled.img`
    max-width: 100%;
    
    @media screen and (max-width: 1000px) {
    width: 1000px;
    }

    @media screen and (max-width: 768px) {
    width: 600px;
    }

    @media screen and (max-width: 540px) {
    width: 500px;
    }

    @media screen and (max-width: 340px) {
        padding-top: 3rem;
        width: 300px;
    }
`