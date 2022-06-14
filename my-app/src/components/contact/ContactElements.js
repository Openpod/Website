import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Dropdown = styled.select`
    margin-top: 16px;
    padding: 32x 16px; 
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
`

export const Dropdown_Option = styled.option`
    padding: 16px 16px; 
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
`

export const Container = styled.div`
    min-height: 100vh;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: black;
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
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    //padding-top: 32px;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%; 
    z-index: 1;
    display: grid;
    margin: 0 auto;
    margin-top: 2.5rem;
    //padding: 1.5rem 1.5rem; 
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
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    //margin-bottom: 20px;
    margin-top: 10px;
    color: #fff;
    font-size: 14px;
`

export const NavBtnLink = styled(LinkR)`
   border-radius: 50px;
   background: #ff6484; 
   white-space: nowrap;
   padding: 10px 22px;
   color: #fff;
   font-size: 20px; 
   outline: none; 
   border: none; 
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;

   &:hover {
       transition: all 0.2s ease-in-out;
       background: #fff; 
       color: #010606;
   }
`

export const HeroBg = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    bottom: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    min-height: 100vh;
    overflow: hidden; 
`
export const VideoBg = styled.video`
    width: 100%; 
    height: 100%; 
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    min-height: 100vh;
`

export const FormTextArea = styled.textarea`
    padding: 16px 16px;
    margin-bottom: 32px; 
    border: none;
    border-radius: 4px;
    height: 200px;
    font-size: 14px;
`

