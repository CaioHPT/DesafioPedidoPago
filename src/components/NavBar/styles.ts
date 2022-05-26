import styled from '@emotion/styled'

export const NavBar = styled.nav`
    background: #FFFFFF;
    
    width: 100%;

    position:absolute;
    top: 0px;

    display:flex;
    align-items:center;
    justify-content: space-between;
    border: 1px solid rgb(243, 243, 243);

    z-index: 1;

    @media(max-width: 800px){
        padding: 10px 0px;
    }
`

export const LogoNav = styled.div`
    background: #FFFFFF;
    display:flex;
    align-items:center;
    padding: 10px 30px;
    border: 1px solid rgb(243, 243, 243);

    @media(max-width: 800px){
        position: absolute;
        top: 12px;
        right: 50%;
        border: none;
        padding: 0px;
    }
    `

export const ImageLogo = styled.img`
    width: 100%;
`

export const User = styled.div`
    background: #FFFFFF;
    
    display:flex;
    align-items:center;
    
    padding: 13px 35px;
    
    border: 1px solid rgb(243, 243, 243);

    @media(max-width: 800px){
        border: none;
        padding: 0px;


    }
`

export const UserImage = styled.div`
    background: #B5F1DD;

    width: 30px;
    height: 30px;
    
    border-radius: 50%;

    display:flex;
    align-items:center;
    justify-content:center;

    padding: 10px;
    margin: 0px 8px;


    @media(max-width: 800px){
        padding: 20px;
    }
`

export const InitialLetters = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
`

export const DivNameUser = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content:center;
    flex-direction: column;
`

export const NameUser = styled.h5`
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    margin: 0px;

    @media(max-width: 800px){
        display: none;
    }
`

export const MyData = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 14.4px;

    @media(max-width: 800px){
        display: none;
    }
`