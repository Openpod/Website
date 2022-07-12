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
            <HeroH1>Investable Tokens for Open Source Projects</HeroH1>
            <HeroP> Raise Funds Fast, Incentivize Developer Contributions, Support Opencore/SaaS Operations  </HeroP>
            <a href="https://www.producthunt.com/posts/openpod?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-openpod" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=352171&theme=light" alt="Openpod - Invest&#0032;in&#0032;your&#0032;favorite&#0032;open&#0032;source&#0032;projects | Product Hunt" width="250" height="54" /></a>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection