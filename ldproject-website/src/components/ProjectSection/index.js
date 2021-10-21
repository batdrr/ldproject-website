import React from 'react';
import Icon1 from  '../../images/Project/MrRafl.png';
import Icon2 from  '../../images/Project/MrRz.png';
import Icon3 from  '../../images/Project/MrSnj.png';
import Icon4 from  '../../images/Project/MrFdz.png';
import Icon5 from  '../../images/Project/MrN.png';
import Icon6 from  '../../images/Project/MsAlp.png';
import { 
    ProjectContainer, 
    ProjectH1, 
    ProjectWrapper, 
    ProjectCard, 
    ProjectIcon, 
    ProjectP1,
    // LearnBtn,
    // LearnBtnLink,
    // SeeBtnWrap 
} from './ProjectElements';


const Project = () => {
    return (
        <ProjectContainer id="project">
            <ProjectH1>The Project</ProjectH1>
            <ProjectP1>We’ve the showcase about the project, that we work on it.</ProjectP1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1}/>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2}/>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3}/>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon4}/>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon5}/>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon6}/>
                </ProjectCard>
            </ProjectWrapper>
            {/* <SeeBtnWrap>
            <LearnBtn>
                <LearnBtnLink>See More</LearnBtnLink>
            </LearnBtn>
            </SeeBtnWrap> */}
        </ProjectContainer>
    )
}

export default Project
