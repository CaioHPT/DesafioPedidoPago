import styled from '@emotion/styled'

interface StatusProps{
    isActive?: boolean
}

export const Container = styled.section`
    padding: 10px 15px;
    width: 100%;

    border: 2px solid #B5F1DD;

    border-radius: 8px;
`

export const Title = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16.8px;

    color: #587169;

    margin: 0px;
`
export const HeaderAcordion = styled.div`

`

export const UsernameAndAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`


export const Avatar = styled.img`

`

export const Username = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16.8px;

    color: #587169;

    margin-left: 5px;

`
export const Details = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`

export const Items = styled.section`
    width: 50%;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 15px 0px;
`

export const Item = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`
export const Description = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16.8px;

    color: #587169;
`
export const Status = styled.div`
    background: ${({isActive}: StatusProps)  => (isActive ? "#B5F1DD" : "#EAEFED")};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px 20px;
    gap: 4px;

    border-radius: 80px;

    color:#34423D;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.24px;
`
export const Action = styled.button`
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