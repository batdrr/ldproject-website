import styled from 'styled-components';

export const ProjectContainer = styled.div`
    z-index: 1;
    height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: 2200px;
        padding-top: 15rem;
        padding-bottom: 15rem;
    }

    @media screen and (max-width: 480px) {
        height: 2400px;
        padding-top: 15rem;
        padding-bottom: 15rem;

    }
`;

export const ProjectWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 0;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* border-radius: 10px; */
    max-height: 440px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transform: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectIcon = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 10px;
`;

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    color: #1d777c;
    margin-bottom: 20px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #1d777c;
`;

export const ProjectP1 =styled.p`
    font-size: 1rem;
    margin-bottom: 50px;
    color: #1d777c;
`

export const ProjectText =styled.p`
    font-size: 0.8rem;
    margin-bottom: 20px;

`

export const LearnBtn =styled.nav`
    display: flex;
    align-items: center;
    padding-bottom: 30px;
`

export const LearnBtnLink=styled.nav`
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
    }`

export const SeeBtnWrap=styled.nav`
    padding-top: 2rem;
`