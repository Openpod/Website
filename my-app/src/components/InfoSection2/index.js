import React from 'react'
import { Column2, ImgWrap, InfoContainer, Img, InfoWrapper, TopLine, Heading, Subtitle, BtnWrap, Column1, InfoRow, TextWrapper} from './InfoElements'
import { ButtonR } from '../ButtonElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, dark, dark2, primary, location}) => {
  return (
    <>
        <InfoContainer lightBg = {lightBg} id = {id} >
            <InfoWrapper>
                <InfoRow imgStart = {imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine> {topLine} </TopLine>
                            <Heading lightText = {lightText}>  {headLine} </Heading>
                            <Subtitle darkText = {darkText}> {description} </Subtitle>
                            <BtnWrap>
                                <ButtonR to = {location}
                                smooth = {true}
                                duration = {500}
                                spy={true}
                                exact = "true"
                                offset= {-80}
                                primary={ primary ? 1 : 0}j
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</ButtonR>
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