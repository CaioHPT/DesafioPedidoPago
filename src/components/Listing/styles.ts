import styled from '@emotion/styled'

export const BoxListing = styled.main`
    display: none;

    width: 75%;
    background: #fff;
    
    padding: 30px 15px;
    
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    margin-top: 2px;

    @media(max-width: 800px){
        display: block;
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