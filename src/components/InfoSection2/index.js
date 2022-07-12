import React from 'react'
import { Column2, ImgWrap, InfoContainer, Img, InfoWrapper, TopLine, Heading, Subtitle, BtnWrap, Column1, InfoRow, TextWrapper} from './InfoElements'
import { StyledA } from '../ButtonElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img, alt, dark, dark2, primary}) => {
  return (
    <>
        <InfoContainer lightBg = {lightBg} id = {id} >
            <InfoWrapper>
                <InfoRow imgStart = {imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine> {topLine} </TopLine>
                            <Heading lightText = {lightText}> Create your token  </Heading>
                            <Subtitle darkText = {darkText}> We've launched! Make your project's token and get your users investing today! </Subtitle>
                            <BtnWrap>
                                <StyledA
                                    href = "http://app.openpod.io"
                                    smooth = {true}
                                    duration = {500}
                                    spy={true}
                                    exact = "true"
                                    offset= {-80}
                                    primary={ primary ? 1 : 0}j
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    > Get Started
                            </StyledA>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src = {img} alt ={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection