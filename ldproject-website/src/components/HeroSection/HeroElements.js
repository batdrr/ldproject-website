import styled from  'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(
            180deg,
            rgba (0, 0, 0, 0.2) 0%,
            rgba (0, 0, 0, 0.6) 100%
        ),
        linear-gradient(
            180deg, 
            rgba (0, 0, 0, 0.2) 0%,
            transparent 100%
            );
        z-index: 2;
    }

    @media screen and (max-width: 1000px) {
    height: 1100px;
    }

    @media screen and (max-width: 540px) {
    height: 750px;
    }

    @media screen and (max-width: 480px) {
    height: 825px;
    }

    @media screen and (max-width: 320px) {
    height: 600px;
    }
`;

export const HeroContent = styled.div`
    max-width: 1000px;
    position: absolute;
    padding: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 1920px) and (max-width: 2560px)  {
    max-width: 1500px;
    }

    @media screen and (max-width: 1000px) {
    padding: 4rem;
    }

    @media screen and (max-width: 480px) {
    padding: 1rem;
    padding-top: 3rem;
    }

    @media screen and (max-width: 340px) {
    max-width: 320px;
    padding-top: 5rem;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 50px;
    text-align: center;
    padding: 0;

    @media screen and (max-width: 1000px) {
        font-size: 50px;
        padding: 0;
        text-align: center;
    }

    @media screen and (max-width: 540px){
        font-size: 32px;
        text-align: center;
    }


    @media screen and (max-width: 480px){
        font-size: 24px;
        text-align: center;
    }

    @media screen and (max-width: 320px) {
    font-size: 18px;
    text-align: center;
    }

    @media (min-width: 1920px) and (max-width: 2560px)  {
        font-size: 80px;
        padding: 1rem;
    }
`;

export const HeroP = styled.p`
    margin: 24px 1rem;
    color: #fff;
    font-size: 18px;
    text-align: center;
    max-width: 700px;

    @media screen and (max-width: 1000px) {
        font-size: 16px;
        padding: 0;
        text-align: justify;
    }

    @media screen and (max-width: 540px){
        font-size: 14px;
        line-height: 18px;
        text-align: justify;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
        line-height: 18px;
        text-align: justify;
    }
    
    @media screen and (max-width: 340px) {
    font-size: 0.8rem;
    line-height: 16px;
    text-align: justify;
    }
    
    @media (min-width: 1920px) and (max-width: 2560px)  {
        max-width: 64.5rem;
        font-size: 18px;
        padding: 2rem;
        padding-top: 0;
        padding-bottom: 0;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const ArrowFordward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
    @media (min-width: 1920px) and (max-width: 2560px)  {
    font-size: 30px;
    }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
    @media (min-width: 1920px) and (max-width: 2560px)  {
    font-size: 30px;
    }
`;

export const VideoBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #0c3f42;
`;

export const VideoContent = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    filter: opacity(30%);
`;