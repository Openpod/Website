import React from 'react';
import Video from '../../videos/run_video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroH1, HeroP, HeroContent} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay muted loop playsInline src = {Video} type = 'video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>DAO Platform for Open Source Projects</HeroH1>
            <HeroP> Raise Funds Fast, Incentivize Developer Contributions, Support Opencore/SaaS Operations  </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection