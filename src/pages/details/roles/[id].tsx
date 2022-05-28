import { NextPage } from "next";
import Link from "next/link";

import * as Component from './styles'

import ArrowLeft from '../../../assets/arrowToBack.svg'
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
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

const RolesDetails: NextPage = () => {
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
                        label="Pesquisar por"
                        defaultValue="deafult"
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{margin: '10px 0px'}}
                    />
                    <CustomTextField
                        id="outlined-required"
                        label="Pesquisar por"
                        defaultValue="deafult"
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{margin: '10px 0px'}}
                    />
                </Component.InputsData>
            </Component.Box>
            <Permissions />
        </Component.Main>
    )
}

export default RolesDetails