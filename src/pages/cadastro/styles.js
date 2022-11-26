import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    position: absolute;
    width: 374px;
    height: 450px;
    left: 748px;
    top: 153px;  
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
	position: absolute;
	width: 388px;
	height: 308px;
	left: 65px;
	top: 141px;		
		
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 44px;

	color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
    
    width: 368px;
    height: 44px;
    left: 750px;
    top: 153px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const PrivacidadeText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

	color: #FFFFFF;
`

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;
`

export const LoginText = styled.span`
    color: #23DD7A;
`