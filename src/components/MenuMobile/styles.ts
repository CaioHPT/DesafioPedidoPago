import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    position: fixed;
    bottom: 0px;
    left: 0px;  

    background-color: rgba(0, 0, 0, 0.444);
    animation: entry .5s ease-in-out;

    z-index: 2;

    @keyframes entry{
        0%{
            filter: opacity(0)
        }100%{
            filter: opacity(1)
        }
    }

`

export const ContainerMenu = styled.div`
    width: 100%;
    height: 100vh;
    
    position: fixed;
    bottom: 0px;
    left: 0px;  

    display: flex;
    align-items: flex-end;
    justify-content: center;

    background-color: transparent;
    z-index: 2;
`

export const MenuMobile = styled.div`
    width: 60%;
    height: 30vh;
    padding: 30px;
    
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.100);

    background: #fff;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    transition: all .5s ease-in-out;

    @media(max-width: 600px){
        width: 90%;
    }

`

export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin-bottom: 30px;
`

export const TextHeader = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    color: #34423D;
`

export const Item = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const IconClose = styled.img`
    cursor: pointer;
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

    margin-left: 10px;
`