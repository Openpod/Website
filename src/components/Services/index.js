import React from 'react'
import token_to_dev from '../../images/token_to_dev.png'
import token from '../../images/token.png'
import github_integration from '../../images/github_integration.png'
import utility_token from '../../images/utility_token.png'
import community_voting from '../../images/community_voting.png'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
  return (
    <>
        <ServicesContainer id = "launch">
            <ServicesH1> Launch Path </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src = {token}/>
                    <ServicesH2> Token Minting </ServicesH2>
                    <ServicesP> Raise funds through establishing your own Governance Token for users, developers and investors to buy. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {token_to_dev}/>
                    <ServicesH2> Developer Compensation </ServicesH2>
                    <ServicesP> Allow developers to earn tokens through contributions, rewarding them for their hard work. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {utility_token}/>
                    <ServicesH2> SaaS/Utility Tokens </ServicesH2>
                    <ServicesP> Companies purchase your organization's utility tokens to request special features and SaaS operations.  </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {github_integration}/>
                    <ServicesH2> Github Integration </ServicesH2>
                    <ServicesP> Automatically compensate developers on every push and merge. Track issues and place bounties on important tasks. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {community_voting}/>
                    <ServicesH2> Community Voting </ServicesH2>
                    <ServicesP> Boost community engagement and transparency through voting on proposals, issues, and feature requests.  </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services