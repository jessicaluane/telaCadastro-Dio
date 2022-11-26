import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    align-items: center;
    text-align: center;


${({ variant }) => variant !== "primary" && css`
    min-width: 167px;
    height: 33px;
    border: 1px solid #E4105D;

    background: #E4105D;
    
&::after {
    content: '';
    position: absolute;
    border: 1px solid #E4105D;
    top: -6px;
    left: -6px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 22px; 
        }
    `}
`