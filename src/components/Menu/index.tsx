import * as React from 'react';

import * as Component from './styles'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Eye from '../../assets/eye.svg'
import Trash from '../../assets/trash-2.svg'
import Repeat from '../../assets/repeat.svg'
import Edit from '../../assets/edit.svg'
import Duplicate from '../../assets/duplicate.svg'

interface MenuMoreProps {
    anchorEl: React.ComponentState
    open: boolean
    handleClose: () => void
    handleClick: (event: React.MouseEvent<HTMLElement>) => void
    isContributorsscreen: boolean
}

export function MenuMore({ anchorEl, handleClose, handleClick, open, isContributorsscreen }: MenuMoreProps) {
    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClick}
            onClickCapture={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.12))',
                    mt: 1,
                    ml: 3,
                    width: 300,
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
            {isContributorsscreen ?
                <Component.ListItensMenu>
                    <MenuItem sx={{ padding: '15px 30px' }}>
                        <Component.Item>
                            <Component.Icon src={Eye.src} />
                            <Component.Text>Ver colaborador</Component.Text>
                        </Component.Item>
                    </MenuItem>
                    <MenuItem sx={{ padding: '15px 30px' }} disabled>
                        <Component.Item>
                            <Component.Icon src={Trash.src} />
                            <Component.Text>Excluir</Component.Text>
                        </Component.Item>
                    </MenuItem>
                </Component.ListItensMenu> :
                <Component.ListItensMenu>
                    <MenuItem sx={{ padding: '15px 30px' }}>
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
                    </MenuItem>
                </Component.ListItensMenu>
            }
        </Menu>
    )
}