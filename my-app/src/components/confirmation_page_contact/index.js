import React from 'react'
import { ConfContainer, Icon, FormWrap, Form, Text, FormContent, FormH1, NavBtnLink, VideoBg, HeroBg} from './ConfirmationElements'
import Video from '../../videos/run_video.mp4'

const CP2 = () => {
  return (
    <>
        <ConfContainer>
                    <HeroBg>
                        <VideoBg autoPlay muted loop playsInline src = {Video} type = 'video/mp4'/>
                    </HeroBg>
                    <Icon to = "/">Openpod</Icon>
                        <FormWrap>
                            <FormContent>
                                <Form>
                                    <Icon to = "/">Openpod</Icon>
                                    <Text>  </Text>
                                    <FormH1> Thanks for reaching out! We'll respond to you ASAP.</FormH1>
                                    <NavBtnLink to = "/" >Home</NavBtnLink>
                                </Form>
                            </FormContent>
                        </FormWrap>
        </ConfContainer>
    </>
  )
}

export default CP2;