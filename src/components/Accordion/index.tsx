import * as React from 'react';
import * as Component from './styles'

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';

import FileIcon from '../../assets/file-plus.svg'
import { TabSelectedContext } from '../../context/TabSelected';
import { MenuMobile } from '../MenuMobile';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    border: `none`
}));

export function AccordionItem() {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const { nameTabSelected } = React.useContext(TabSelectedContext)

    const [openMenu, setOpenMenu] = React.useState(false)

    const handleMobileClick = () => setOpenMenu(true)
    const handleMobileClose = () => setOpenMenu(false)

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Component.Container>
            {nameTabSelected === "Colaboradores" ?
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Component.HeaderAcordion>
                            <Component.Title>Nome Completo</Component.Title>
                            <Component.UsernameAndAvatar>
                                <Component.Avatar />
                                <Component.Username>Pikachu Soares do Santos Dias</Component.Username>
                            </Component.UsernameAndAvatar>
                        </Component.HeaderAcordion>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Component.Details>
                            <Component.Items>
                                <Component.Item>
                                    <Component.Title>Departamento</Component.Title>
                                    <Component.Description>Administrativo</Component.Description>
                                </Component.Item>
                            </Component.Items>
                            <Component.Items>
                                <Component.Item>
                                    <Component.Title>Departamento</Component.Title>
                                    <Component.Description>Administrativo</Component.Description>
                                </Component.Item>
                            </Component.Items>
                            <Component.Items>
                                <Component.Item>
                                    <Component.Title>Departamento</Component.Title>
                                    <Component.Description>Administrativo</Component.Description>
                                </Component.Item>
                            </Component.Items>
                            <Component.Items>
                                <Component.Item>
                                    <Component.Title>Departamento</Component.Title>
                                    <Component.Description>Administrativo</Component.Description>
                                </Component.Item>
                            </Component.Items>
                            <Component.Items>
                                <Component.Item>
                                    <Component.Title>Status</Component.Title>
                                    <Component.Status>
                                        Ativo
                                    </Component.Status>
                                </Component.Item>
                            </Component.Items>
                        </Component.Details>
                        <Component.Action >
                            <Component.Icon src={FileIcon.src} />
                            Ações
                        </Component.Action>
                    </AccordionDetails> 
                </Accordion>
                :
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Component.HeaderAcordion>
                            <Component.Title>Cargo</Component.Title>
                            <Component.Description>Administrativo</Component.Description>
                        </Component.HeaderAcordion>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Component.Details>
                            <Component.Items>
                                <Component.Item>
                                    <Component.Title>Departamento</Component.Title>
                                    <Component.Description>Administrativo</Component.Description>
                                </Component.Item>
                            </Component.Items>
                            <Component.Items>
                                <Component.Item>
                                    <Component.Title>Colaboradores</Component.Title>
                                    <Component.Description>1</Component.Description>
                                </Component.Item>
                            </Component.Items>
                        </Component.Details>
                        <Component.Action  onClick={handleMobileClick}>
                            <Component.Icon src={FileIcon.src}/>
                            Ações
                        </Component.Action>
                    </AccordionDetails>
                    <MenuMobile open={openMenu} handleClose={handleMobileClose} isClickToAction={true}/> 
                </Accordion>}
        </Component.Container>
    )
}