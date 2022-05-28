import styled from '@emotion/styled'

export const Container = styled.main`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;
`
export const AvatarAndUsernameAndEmail = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    @media(max-width: 800px){
        margin-top: 30px;
        margin-bottom: 10px;
    }
`

export const Avatar = styled.img``

export const Username = styled.h6`
    margin: 0px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    color: #34423D;
`
export const Email = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;

    color: #587169;
`

export const AvatarCircle = styled.div`
    border-radius: 50%;
    width: 80px;
    height: 80px;

    background: #EAEFED;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const UsernameAndEmail = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;

    margin-left: 20px;
`

export const PersonalInfo = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;
    
    width: 100%;

    margin-top: 40px;

`
export const PersonalInfoTitle = styled.h6`
    margin: 0px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    color: #34423D;
`

export const BoxInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin-top: 25px;

    @media(max-width: 800px){
        flex-direction: column;
    }
`

export const ItemInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background:  #F5FAF8;

    border: 2px solid #CAD6D1;
    border-radius: 8px;

    padding: 15px;

    width: 32%;

    @media(max-width: 800px){
        width: 100%;
        margin: 5px 0px;
    }
`
export const DivIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #CAD6D1;
    
    padding:10px;
    margin-right: 10px;
`

export const PersonalInfoIcon = styled.img`
    z-index: 1;
`

export const Data = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;
`

export const Field = styled.span`

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;

    color: #587169;
`

export const Description = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;

    color: #587169;
`

export const BoxDatasOrganizational = styled.section`
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;

    border: 2px solid #eceeed;
    border-radius: 10px;

    padding: 25px;
    margin-top: 35px;
`

export const DatasOrganizationalTitle = styled. h6`
    margin: 0px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    color: #34423D;
`

export const OrganizationalData = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;

    margin: 15px 0px 0px 0px;

    @media(max-width: 800px){
        flex-direction: column;
    }
`

export const SelectedDiv = styled.div`
    width: 48%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 800px){
        width: 100%;
    }
`