import { AccordionItem } from '../Accordion'

import * as Component from './styles'

import LoadMore from '../../assets/load.svg'

export function Listing() {
    return (
        <Component.BoxListing>
            <Component.HeaderText>Listagem de colaboradores</Component.HeaderText>
            <AccordionItem />
            <Component.LoadMore>
                <Component.Icon src={LoadMore.src} />
                Carregar mais
            </Component.LoadMore>
        </Component.BoxListing>

    )
}