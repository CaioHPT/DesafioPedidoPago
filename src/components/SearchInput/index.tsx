import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import SearchIcon from '../../assets/search.svg'

import * as Component from './styles'

const CustomTextField = styled(TextField)(() => ({
    '& label.Mui-focused': {
        color: '#587169',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#CAD6D1',
            borderWidth: '2px',
            borderRadius: '7px',
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

interface SearchInputProps{
    textDefault: string
}

export function SearchInput({ textDefault } : SearchInputProps) {
    return (

        <CustomTextField
            id="outlined-required"
            label="Pesquisar por"
            placeholder='Pesquise por nome ou cpf'
            defaultValue={textDefault}
            fullWidth={true}
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Component.SearchIcon src={SearchIcon.src} />
                    </InputAdornment>
                )
            }}
        />
    )
}