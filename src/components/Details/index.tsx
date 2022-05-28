import * as Component from './styles'

import User from '../../assets/user.svg'
import Id from '../../assets/id.svg'
import Calendar from '../../assets/calendar.svg'
import Phone from '../../assets/phone.svg'
import { Autocomplete, TextField } from '@mui/material'
import DownArrow from '../../assets/downArrow.svg'
import { styled } from '@mui/system'

const CustomAutoComplete = styled(Autocomplete)(() => ({
    '& label.Mui-focused': {
        color: '#587169',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#CAD6D1',
            borderWidth: '2px',
            borderRadius: '10px',
            transition: 'all .3s ease-in-out',
            backgroundColor: '#F5FAF8',

        },
        '&.Mui-focused fieldset': {
            borderColor: '#587169',
        },
    },
    '& label': {
        fontSize: '16px',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        lineHeight: '24px',
        color: '#A3B8B0',
        zIndex: 1
    },
    '& input': {
        fontSize: '16px',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        lineHeight: '24px',
        color: '#587169',
        zIndex: 1
    }
}));


interface DetailsProps {
    contributor: {
        id: number,
        name: string,
        email: string,
        phone: {
            ddd: string,
            ddi: string,
            number: string
        },
        document: {
            type: string
            number: string
        },
        birth_date: string,
        image: string,
        department: string,
        branch: string,
        role: string,
        status: string
    }
}

export function Details({ contributor }: DetailsProps) {

    const data = contributor.birth_date.substring(0, 10)

    const dataFormat = data.split('-')

    return (
        <Component.Container>
            <Component.AvatarAndUsernameAndEmail>
                <Component.AvatarCircle>
                    <Component.Avatar src={User.src} />
                </Component.AvatarCircle>
                <Component.UsernameAndEmail>
                    <Component.Username>{contributor.name}</Component.Username>
                    <Component.Email>{contributor.email}</Component.Email>
                </Component.UsernameAndEmail>
            </Component.AvatarAndUsernameAndEmail>
            <Component.PersonalInfo>
                <Component.PersonalInfoTitle>Informações pessoais</Component.PersonalInfoTitle>
                <Component.BoxInfo>
                    <Component.ItemInfo>
                        <Component.DivIcon>
                            <Component.PersonalInfoIcon src={Id.src} />
                        </Component.DivIcon>
                        <Component.Data>
                            <Component.Field>CPF</Component.Field>
                            <Component.Description>{contributor.document.number}</Component.Description>
                        </Component.Data>
                    </Component.ItemInfo>
                    <Component.ItemInfo>
                        <Component.DivIcon>
                            <Component.PersonalInfoIcon src={Phone.src} />
                        </Component.DivIcon>
                        <Component.Data>
                            <Component.Field>Telefone</Component.Field>
                            <Component.Description>{contributor.phone.number}</Component.Description>
                        </Component.Data>
                    </Component.ItemInfo>
                    <Component.ItemInfo>
                        <Component.DivIcon>
                            <Component.PersonalInfoIcon src={Calendar.src} />
                        </Component.DivIcon>
                        <Component.Data>
                            <Component.Field>Data Nascimento</Component.Field>
                            <Component.Description>{dataFormat[2]}/{dataFormat[1]}/ {dataFormat[0]}</Component.Description>
                        </Component.Data>
                    </Component.ItemInfo>
                </Component.BoxInfo>
                <Component.BoxDatasOrganizational>
                    <Component.DatasOrganizationalTitle>Dados organizacionais</Component.DatasOrganizationalTitle>
                    <Component.OrganizationalData>
                        <Component.SelectedDiv>
                            <CustomAutoComplete
                                value={contributor.department}
                                inputValue={contributor.department}
                                id="controllable-states-demo"
                                options={[]}
                                sx={{ width: '100%', margin: '10px 0px' }}
                                disableClearable
                                readOnly
                                popupIcon={<Component.PersonalInfoIcon src={DownArrow.src} />}
                                renderInput={(params) => <TextField {...params} label="Departamento" />}
                            />
                        </Component.SelectedDiv>
                        <Component.SelectedDiv>
                            <CustomAutoComplete
                                value={contributor.role}
                                inputValue={contributor.role}
                                id="controllable-states-demo"
                                options={[]}
                                sx={{ width: '100%', margin: '10px 0px' }}
                                disableClearable
                                readOnly
                                popupIcon={<Component.PersonalInfoIcon src={DownArrow.src} />}
                                renderInput={(params) => <TextField {...params} label="Cargo" />}
                            />
                        </Component.SelectedDiv>
                        <Component.SelectedDiv>
                            <CustomAutoComplete
                                value={contributor.branch}
                                inputValue={contributor.branch}
                                id="controllable-states-demo"
                                options={[]}
                                sx={{ width: '100%', margin: '10px 0px' }}
                                disableClearable
                                readOnly
                                popupIcon={<Component.PersonalInfoIcon src={DownArrow.src} />}
                                renderInput={(params) => <TextField {...params} label="Unidade" />}
                            />
                        </Component.SelectedDiv>
                        <Component.SelectedDiv>
                            <CustomAutoComplete
                                value={contributor.status}
                                inputValue={contributor.status}
                                id="controllable-states-demo"
                                options={[]}
                                sx={{ width: '100%', margin: '10px 0px' }}
                                disableClearable
                                readOnly
                                popupIcon={<Component.PersonalInfoIcon src={DownArrow.src} />}
                                renderInput={(params) => <TextField {...params} label="Status" />}
                            />
                        </Component.SelectedDiv>
                    </Component.OrganizationalData>
                </Component.BoxDatasOrganizational>
            </Component.PersonalInfo>
        </Component.Container>
    )
}