import * as Component from './styles'

import Slide from '@mui/material/Slide';

import CloseIcon from '../../assets/close.svg'
import Eye from '../../assets/eye.svg'
import Trash from '../../assets/trash-2.svg'
import Repeat from '../../assets/repeat.svg'
import Edit from '../../assets/edit.svg'
import Duplicate from '../../assets/duplicate.svg'

import { MenuItem } from '@mui/material';

interface MenuMobileProps {
    open: boolean
    handleClick: () => void
    handleClose: () => void
    isContributorsscreen: boolean
}

export function MenuMobile({
    open,
    isContributorsscreen,
    handleClick,
    handleClose }: MenuMobileProps) {

    return (
        <>
            {open && <Component.Container/>}
            <Slide direction="up" in={open} mountOnEnter unmountOnExit timeout={{ exit: 700, enter: 650 }}>
                <Component.ContainerMenu onClick={handleClose}>
                    <Component.MenuMobile>
                        <Component.HeaderMenu>
                            <Component.TextHeader>Categorias</Component.TextHeader>
                            <Component.IconClose src={CloseIcon.src} onClick={handleClose}/>
                        </Component.HeaderMenu>
                        <MenuItem sx={{ padding: '20px 0px'}}>
                            <Component.Text>Colaboradores</Component.Text>
                        </MenuItem>
                        <MenuItem sx={{ padding: '20px 0px' }}>
                            <Component.Text>Cargos</Component.Text>
                        </MenuItem>
                        {/* <MenuItem sx={{ padding: '15px 30px' }}>
                            <Component.Item>
                                <Component.Icon src={Eye.src} />
                                <Component.Text>Ver cargo</Component.Text>
                            </Component.Item>
                        </MenuItem>
                        <MenuItem sx={{ padding: '15px 30px' }} disabled>
                            <Component.Item>
                                <Component.Icon src={Edit.src} />
                                <Component.Text>Editar</Component.Text>
                            </Component.Item>
                        </MenuItem>
                        <MenuItem sx={{ padding: '15px 30px' }} disabled>
                            <Component.Item>
                                <Component.Icon src={Duplicate.src} />
                                <Component.Text>Duplicar</Component.Text>
                            </Component.Item>
                        </MenuItem>
                        <MenuItem sx={{ padding: '15px 30px' }} disabled>
                            <Component.Item>
                                <Component.Icon src={Repeat.src} />
                                <Component.Text>Excluir</Component.Text>
                            </Component.Item>
                        </MenuItem> */}
                    </Component.MenuMobile>
                </Component.ContainerMenu>
            </Slide></>

    );
}


