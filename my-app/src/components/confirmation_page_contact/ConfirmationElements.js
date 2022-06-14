import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const ConfContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: white;
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%; 
    }
`

export const Icon = styled(LinkR)`
    padding-bottom: 10px;
    text-decoration: none;
    color: #fff;
    text-align: center;
    font-weight: normal;
    font-size: 32px; 

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.div`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%; 
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px; 
    border-radius: 4px; 
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9); 

    @media screen and (max-width: 400px) {
        padding: 32px 32px; 
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 10px;
    color: #fff;
    font-size: 25px;
    font-weight: 400; 
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff; 
`

export const FormInput = styled.input`
    padding: 16px 16px; 
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
`

export const FormButton = styled.button`
    background: #ff6484;
    margin-top: 40px;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
    color: #fff;
    font-size: 14px;
`

export const NavBtnLink = styled(LinkR)`
    background: #ff6484;
    margin-top: 40px;
    text-align: center;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
`

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px; 
    height: 1000px; 
    position: relative; 
    z-index: 1; 
    `
export const HeroBg = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    bottom: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    overflow: hidden; 
`
export const VideoBg = styled.video`
    width: 100%; 
    height: 100%; 
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`