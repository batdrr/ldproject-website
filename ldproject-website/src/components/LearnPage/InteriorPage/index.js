import React from 'react';
import Inter from  '../../../images/Services/interior.png';
import {
    InteriorContainers,
    InteriorWrapper,
    InteriorText,
    InteriorH1,
    InteriorH2,
    InteriorP1,
    InteriorBg,
    InteriorImg,
} from './InteriorElements';

const Interior = () => {
    return (
        <InteriorContainers>
            <InteriorWrapper>
                <InteriorText>
                    <InteriorH2>What is</InteriorH2>
                    <InteriorH1>Interior</InteriorH1>
                    <InteriorP1>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects.</InteriorP1>
                </InteriorText>
            </InteriorWrapper>
            <InteriorBg>
                <InteriorImg src={Inter}></InteriorImg>
            </InteriorBg>
        </InteriorContainers>
    )
}

export default Interior
