import styled from '@emotion/styled'

export const Container = styled.div`
    @media(max-width: 800px){
        display: none;
    }
`

export const Item = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const Icon = styled.img`
`

export const Text = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #587169;

    margin-left: 15px;
`
export const ListItensMenu = styled.div``