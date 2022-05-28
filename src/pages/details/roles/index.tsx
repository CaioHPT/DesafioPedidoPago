import Link from "next/link";
import { GetStaticProps } from "next";

import * as Component from '../../../styles/stylesDetailsRoles'

import ArrowLeft from '../../../assets/arrowToBack.svg'

import { TextField } from "@mui/material";
import { styled } from "@mui/system";

import { getRolesById, RoleDetails } from "../../../services/RolesService";

import { Permissions } from "../../../components/Permissions";

const CustomTextField = styled(TextField)(() => ({
    '& label.Mui-focused': {
        color: '#587169',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#CAD6D1',
            borderWidth: '2px',
            borderRadius: '10px',
            transition: 'all .3s ease-in-out',
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
        color: '#A3B8B0'
    },
    '& input': {
        fontSize: '16px',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        lineHeight: '24px',
        color: '#587169'
    }
}));



const RolesDetails = ({role} : RoleDetails) => {
    
    return (
        <Component.Main>
            <Component.DivTitle>
                <Link href="/">
                    <Component.IconCircle>
                        <Component.IconToBack src={ArrowLeft.src} />
                    </Component.IconCircle>
                </Link>
                <Component.Title>Cargos e permissões</Component.Title>
            </Component.DivTitle>
            <Component.Box>
                <Component.Field>Dados do cargo</Component.Field>
                <Component.InputsData>
                    <CustomTextField
                        id="outlined-required"
                        label="Departamento"
                        defaultValue={role.department}
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{margin: '10px 0px'}}
                    />
                    <CustomTextField
                        id="outlined-required"
                        label="Cargo"
                        defaultValue={role.name}
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{margin: '10px 0px'}}
                    />
                </Component.InputsData>
            </Component.Box>
            <Permissions role={role}/>
        </Component.Main>
    )
}

export default RolesDetails

export const getStaticProps: GetStaticProps = async () => {
    const data = (await getRolesById(1)).role

    return {
        props: {
            role: data
        },
        revalidate: 10
    }
}