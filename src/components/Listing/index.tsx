import { AccordionItem } from '../Accordion'
import * as Component from './styles'

export function Listing(){
    return(
        <Component.BoxListing>
            <Component.HeaderText>Listagem de colaboradores</Component.HeaderText>
            <AccordionItem />
        </Component.BoxListing>

    )
}