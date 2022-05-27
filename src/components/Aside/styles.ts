import styled from '@emotion/styled'

export const Aside = styled.aside`
    position: fixed;
    left: 0px;
    
    width: 10%;
    height: 100%;
    
    background-color: #fff;

    box-shadow: 0px 60px 10px 1px rgba(0, 0, 0, 0.060);

    @media(max-width: 800px){
        display:none;
    }
`