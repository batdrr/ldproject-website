import React, {useState} from 'react';
import video from '../../videos/video.mp4'
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    VideoBg,
    VideoContent,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowFordward,
    ArrowRight,
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    
    return (
        <HeroContainer id="home">
            <VideoBg>
                <VideoContent playsinline autoPlay loop muted src={video} type="video/mp4" />
            </VideoBg>       
            <HeroContent>
                <HeroH1>WE’RE CREATE YOUR DREAM ARCHITECTURE</HeroH1>
                <HeroP>
                Every people want to build a house with their own design. 
                if you’re planning to build a conceptual building. 
                We’re glad help you to realize your ideas and dreams become true.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to='about' 
                    smooth={true} 
                    duration={2000} 
                    spy={true}
                    exact='true' 
                    // offset={-80}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Let's go {hover ? <ArrowFordward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
