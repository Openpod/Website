import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';
import { Link as LinkR} from 'react-router-dom';

export const ButtonS = styled(LinkS)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#ff6484' : '#010606')}; 
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')}; 
    color: ${({ dark }) => (dark ? '#fff' : '#010606')}; 
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')}; 
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#a2a3a3')};
    }
`

export const ButtonR = styled(LinkR)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#ff6484' : '#010606')}; 
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')}; 
    color: ${({ dark }) => (dark ? '#fff' : '#010606')}; 
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')}; 
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#a2a3a3')};
    }
`