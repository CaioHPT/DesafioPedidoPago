import styled from '@emotion/styled'

export const Container = styled.div`
    display: none;

    @media(max-width: 800px){
        display: block;
    }
`

export const DivOption = styled.div`
    padding: 10px 20px;
    border: 2px solid #CAD6D1;
    border-radius: 8px;

    margin-bottom: 30px;

    @media(max-width: 500px){
        padding: 10px 15px; 
    }
`

export const TextOptionSelected = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #587169;
`

export const IconMore = styled.img`
    float: right;

    &:hover{
        cursor: pointer;
    }
` 