import styled from '@emotion/styled'

export const BoxListing = styled.main`
    display: none;

    width: 75%;
    background: #fff;
    
    padding: 30px 15px;
    
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    margin: 2px 0px 60px 0px;

    @media(max-width: 800px){
        display: block;
        width: 80%;
    }

    @media(max-width: 600px){
        width: 95%;
    }
`

export const HeaderText = styled.h5`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;

    color: #34423D;

    margin-top: 10px;
`

export const LoadMore = styled.button`
width: 100%;

margin-top: 15px;
padding: 15px 0px;

background: #fff;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
text-align: center;

color: #34423D;

border: 2px solid #B5F1DD;
border-radius: 8px;

display: flex;
align-items: center;
justify-content: center;

&:hover{
    cursor: pointer;
}
`

export const Icon = styled.img`
    margin: 0px 8px;
`