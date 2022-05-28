import styled from '@emotion/styled'

export const Box = styled.section`
    width: 65%;

    padding: 20px 30px 30px 30px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    border-bottom-right-radius:8px;
    border-bottom-left-radius:8px; 


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
        box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.053);
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

    margin: 10px 0px;
`

export const Table = styled.table`
    width: 100%;
    
    text-align: left;
    margin: 20px 0px 60px 0px;
    
    border-spacing: 0px;
    
    table-layout: auto;
    
`

export const Thead = styled.thead`
    width: 100%;
`

export const Tbody = styled.tbody`
`

export const Tr = styled.tr`

    th:first-of-type{
        border-top-left-radius: 10px;
        border-left: 1px solid #CAD6D1;  
        
        padding: 15px 10px 15px 20px;

        width: 55%;
    }
    th:last-child{
        border-top-right-radius: 10px;
        border-right: 1px solid #CAD6D1;   
    }

    td:first-of-type{
        padding: 20px 15px 15px 20px;
        width: 55%;
    }

    th:nth-of-type(2){
        padding-left: 10px;
    }

`

export const Th = styled.th`
    padding:0px;

    border-top: 1px solid #CAD6D1;
    border-bottom: 1px solid #CAD6D1;

    color: #587169;
    font-size: 12px;
    font-weight: 600;
    line-height: 16.8px;

`
export const Td = styled.td`
    padding: 20px 15px 15px 0px;
    border-bottom: 1px solid #EAEFED;
    
    color: #587169;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;

    
`