import * as Component from './styles'

import IconMore from '../../assets/more-vertical.svg'
import { SearchInput } from '../SearchInput'
import { useState } from 'react'
import { MenuMobile } from '../MenuMobile'


export function Option(){

    const [openMenu, setOpenMenu] = useState(false)

    const handleMobileClick = () => setOpenMenu(true)
    const handleMobileClose = () => setOpenMenu(false)

    return(
        <Component.Container>
            <Component.DivOption>
                <Component.TextOptionSelected>
                    Colaboradores
                </Component.TextOptionSelected>
                <Component.IconMore src={IconMore.src} onClick={handleMobileClick}/>
            </Component.DivOption>
            <SearchInput textDefault="Pesquise por nome ou cpf" />
            <MenuMobile open={openMenu} handleClick={handleMobileClick} handleClose={handleMobileClose} isContributorsscreen={true} />
        </Component.Container>
    )
}