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

    @media(max-width: 800px){
        font-size: 24px;
    }

    @media(max-width: 600px){
        font-size: 20px;
    }

`
export const IconCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    
    background: #EAEFED;

    border-radius: 30%;

    padding: 5px;

    &:hover{
        cursor:pointer;
    }
`

export const IconToBack = styled.img`
    @media(max-width: 600px){
        width: 80%;
    }

`

export const DivTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 55%;
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
    }

    @media(max-width: 600px){
        width: 95%;
    }
`

export const Box = styled.section`
    width: 65%;

    padding: 30px 30px 0px 30px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    border-top-right-radius:8px;
    border-top-left-radius:8px;   
    
    background: #fff;

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
        margin-bottom: 3px;

        box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.053);

        padding-bottom: 30px;
    }

    @media(max-width: 600px){
        width: 95%;
        padding: 15px;
    }
`
export const Field = styled.h6`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;

    color: #34423D;

    margin: 0px 0px 20px 0px;

    @media(max-width: 800px){
        margin: 20px 0px;
    }
`

export const InputsData = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @media(max-width: 800px){
        flex-direction: column;
    }
`