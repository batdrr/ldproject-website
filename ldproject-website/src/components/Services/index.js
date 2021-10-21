import React from 'react'
import Icon1 from  '../../images/Services/house.png';
import Icon2 from  '../../images/Services/contructor.png';
import Icon3 from  '../../images/Services/interior.png';
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2,
    ServicesP1,
    ServicesText,
    LearnBtn,
    LearnBtnLink 
} from './ServicesElements';


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesP1>Let's check our company services, we have three services right now. Architecture Idea, Contractor Rent, and Interior Design.</ServicesP1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesH2>Architecture Idea</ServicesH2>
                    <ServicesText>We’d like to hear your dream architectural planning and make it become real architecture building.</ServicesText>
                    <LearnBtn>
                        <LearnBtnLink to="/architecture">Learn More</LearnBtnLink>
                    </LearnBtn>
                    <ServicesIcon src={Icon1}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Contractor Rent</ServicesH2>
                    <ServicesText>We’re provide contractor rent to work with you, we will give best contractor to make the architecture become great.</ServicesText>
                    <LearnBtn>
                        <LearnBtnLink to="/contractor">Learn More</LearnBtnLink>
                    </LearnBtn>
                    <ServicesIcon src={Icon2}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Interior Design</ServicesH2>
                    <ServicesText>We’ve interior design consultation services and we give you interior reference for your dream architecture.</ServicesText>
                    <LearnBtn>
                        <LearnBtnLink to="/interior">Learn More</LearnBtnLink>
                    </LearnBtn>
                    <ServicesIcon src={Icon3}/>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services