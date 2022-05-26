import styled from '@emotion/styled'

interface StatusProps{
    isActive?: boolean
}

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
        padding: 15px 10px 15px 10px;
    }
    th:last-child{
        border-top-right-radius: 10px;
        border-right: 1px solid #CAD6D1;   
    }

    td:first-of-type{
        padding: 20px 15px 15px 15px;
    }

`

export const Th = styled.th`
    padding: 15px 30px 15px 0px;

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


    color: ${({isActive}: StatusProps)  => (isActive ? '#587169': '#A3B8B0')};
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;


`
export const UserNameAndAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const Username = styled.span`
    font-weight: 600;
    font-size: 12px;
    margin-left: 5px;
`

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    filter:${({isActive}: StatusProps)  => (isActive ? 'opacity(100%)': 'opacity(35%)')};
`

export const Status = styled.div`
    background: ${({isActive}: StatusProps)  => (isActive ? "#B5F1DD" : "#EAEFED")};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px 8px;
    gap: 4px;

    border-radius: 80px;

    color:#34423D;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.24px;
`

export const IconMore = styled.img`
    float: right;

    &:hover{
        cursor: pointer;
    }
`   

export const FooterTable = styled.div`
    width: 100%;
    position: relative;
`

export const Records = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    bottom: 0px;
    left: 0px;
`
export const TextRecords = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    color: #587169;
`

export const Select = styled.select`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 15px;
    gap: 12px;

    margin: 0px 20px;

    background: #FFFFFF;

    border-radius: 8px;
    border: 2px solid #CAD6D1;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    outline:none;

    color: #587169;

    &:hover{
        cursor: pointer;
    }


`
export const Option = styled.option`

`

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    bottom: 0px;
    right: 0px;
`

export const DivToBack = styled.button`
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 17px;

    border: 1.4px solid #CAD6D1;

    margin: 0px 10px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    &:hover{
        cursor: pointer;
    }
`

export const DivToPrev = styled.button`
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 17px;

    border: 1.4px solid #709085;

    margin: 0px 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover{
        cursor: pointer;
    }
`

export const ArrowIcon = styled.img`
    width: 100%;
`

export const PaginationSubtitle = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #587169;
    text-align: center;
`