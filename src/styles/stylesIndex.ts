import styled from '@emotion/styled'

export const Main = styled.main`
        
    position: absolute; 
    top: 10%;
    width: 80%;
    right: 0px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;


    z-index: -1;

    @media(max-width: 1250px){
        width: 86%;
    }

    @media(max-width: 950px){
        width: 90%;
    }

    @media(max-width: 800px){
        width: 100%;
        align-items: center;
    }
`

export const Title = styled.h4`
    color: #34423D;
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;

    margin-bottom: 20px;
`

export const Box = styled.section`
    width: 65%;

    padding: 30px;
    
    border-radius: 8px;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.103);

    background: #fff;

    margin-bottom: 50px;

    margin-left: 10%;

    @media(max-width: 1250px){
        width: 70%;
    }

    @media(max-width: 1100px){
        width: 75%;
    }

    @media(max-width: 950px){
        width: 80%;
    }

    @media(max-width: 800px){
        margin-left: 0px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.053);
        margin-bottom: 0px;
    }

    @media(max-width: 600px){
        width: 95%;
        padding: 15px;
    }
`

export const DivTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 55%;
    margin-left: 10%;


    @media(max-width: 1250px){
        width: 60%;
    }

    @media(max-width: 1100px){
        width: 70%;
    }

    @media(max-width: 950px){
        width: 75%;
    }

    @media(max-width: 800px){
        margin-left: 0px;
    }

    @media(max-width: 600px){
        width: 95%;
    }
`