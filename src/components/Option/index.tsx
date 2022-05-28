import * as Component from './styles'

import IconMore from '../../assets/more-vertical.svg'

import { MenuMobile } from '../MenuMobile'
import { SearchInput } from '../SearchInput'

import { useContext, useState } from 'react'

import { TabSelectedContext } from '../../context/TabSelected'


export function Option(){

    const [openMenu, setOpenMenu] = useState(false)

    const handleMobileClick = () => setOpenMenu(true)
    const handleMobileClose = () => setOpenMenu(false)

    const { nameTabSelected } = useContext(TabSelectedContext)

    return(
        <Component.Container>
            <Component.DivOption>
                <Component.TextOptionSelected>
                    {nameTabSelected}
                </Component.TextOptionSelected>
                <Component.IconMore src={IconMore.src} onClick={handleMobileClick}/>
            </Component.DivOption>
            <SearchInput textDefault="Pesquise por nome ou cpf" />
            <MenuMobile open={openMenu} handleClose={handleMobileClose} />
        </Component.Container>
    )
}