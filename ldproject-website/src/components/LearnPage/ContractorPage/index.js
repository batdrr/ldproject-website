import React from 'react';
import Cont from  '../../../images/Services/contructor.png';
import {
    ContractorContainers,
    ContractorWrapper,
    ContractorText,
    ContractorH1,
    ContractorH2,
    ContractorP1,
    ContractorBg,
    ContractorImg,
} from './ContractorElements';

const Contractors = () => {
    return (
        <ContractorContainers>
            <ContractorWrapper>
                <ContractorText>
                    <ContractorH2>What is</ContractorH2>
                    <ContractorH1>Contractor</ContractorH1>
                    <ContractorP1>It's an independent entity who agrees to supply services, goods, materials, equipment, or personnel that meets stated requirements. A contractor may work for a company, but they aren't a company employee. Instead, they work according to an agreed-upon contract for a set period of time.</ContractorP1>
                </ContractorText>
            </ContractorWrapper>
            <ContractorBg>
                <ContractorImg src={Cont}></ContractorImg>
            </ContractorBg>
        </ContractorContainers>
    )
}

export default Contractors