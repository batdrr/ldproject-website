import React from 'react';
import Arci from  '../../../images/Services/house.png';
import {
    ArchitectureContainers,
    ArchitectureWrapper,
    ArchitectureText,
    ArchitectureH1,
    ArchitectureH2,
    ArchitectureP1,
    ArchiBg,
    ArchiImg,
} from './ArchitectureElements';

const architecture = () => {
    return (
        <ArchitectureContainers>
            <ArchitectureWrapper>
                <ArchitectureText>
                    <ArchitectureH2>What is</ArchitectureH2>
                    <ArchitectureH1>Architecture</ArchitectureH1>
                    <ArchitectureP1>Architecture is both the process and the product of planning, designing, and constructing buildings or other structures. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art.</ArchitectureP1>
                </ArchitectureText>
                <ArchiBg>
                <ArchiImg src={Arci}></ArchiImg>
            </ArchiBg>
            </ArchitectureWrapper>
        </ArchitectureContainers>   
    )
}

export default architecture
