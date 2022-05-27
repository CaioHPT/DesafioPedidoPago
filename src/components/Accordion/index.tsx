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
import { RolesDataContext } from '../../context/RolesData';
import { ContributorsDataContext } from '../../context/ContributorsData';

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

    const [{ rolesData }] = React.useContext(RolesDataContext)
    const [{ contributorsData }] = React.useContext(ContributorsDataContext)

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Component.Container>
            {nameTabSelected === "Colaboradores" ?
                <>
                    {contributorsData.slice(0, 5).map(contributor => (
                        <Accordion expanded={expanded === `panel${contributor.agent_id}`}
                            onChange={handleChange(`panel${contributor.agent_id}`)} key={contributor.agent_id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Component.HeaderAcordion>
                                    <Component.Title isActive={contributor.status === 'active' ? true : false}>
                                        Nome Completo
                                    </Component.Title>
                                    <Component.UsernameAndAvatar>
                                        <Component.Avatar src={contributor.image} isActive={contributor.status === 'active' ? true : false} />
                                        <Component.Username isActive={contributor.status === 'active' ? true : false}>
                                            {contributor.name}
                                        </Component.Username>
                                    </Component.UsernameAndAvatar>
                                </Component.HeaderAcordion>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Component.Details>
                                    <Component.Items>
                                        <Component.Item>
                                            <Component.Title isActive={contributor.status === 'active' ? true : false}>
                                                Departamento
                                            </Component.Title>
                                            <Component.Description isActive={contributor.status === 'active' ? true : false}>
                                                {contributor.department}
                                            </Component.Description>
                                        </Component.Item>
                                    </Component.Items>
                                    <Component.Items>
                                        <Component.Item>
                                            <Component.Title isActive={contributor.status === 'active' ? true : false}>
                                                Cargo
                                            </Component.Title>
                                            <Component.Description isActive={contributor.status === 'active' ? true : false}>
                                                {contributor.role}
                                            </Component.Description>
                                        </Component.Item>
                                    </Component.Items>
                                    <Component.Items>
                                        <Component.Item>
                                            <Component.Title isActive={contributor.status === 'active' ? true : false}>
                                                Unidade
                                            </Component.Title>
                                            <Component.Description isActive={contributor.status === 'active' ? true : false}>
                                                123456789
                                            </Component.Description>
                                        </Component.Item>
                                    </Component.Items>
                                    <Component.Items>
                                        <Component.Item>
                                            <Component.Title isActive={contributor.status === 'active' ? true : false}>
                                                Unidade
                                            </Component.Title>
                                            <Component.Description isActive={contributor.status === 'active' ? true : false}>
                                                {contributor.branch}
                                            </Component.Description>
                                        </Component.Item>
                                    </Component.Items>
                                    <Component.Items>
                                        <Component.Item>
                                            <Component.Title>Status</Component.Title>
                                            <Component.Status isActive={contributor.status === 'active' ? true : false}>
                                                {contributor.status}
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
                    ))}
                </>
                :
                <>
                    {rolesData.slice(0, 5).map((role, index) => (
                        <Accordion expanded={expanded === `panel${index}`} 
                            onChange={handleChange(`panel${index}`)} key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Component.HeaderAcordion>
                                    <Component.Title isActive={true}>Cargo</Component.Title>
                                    <Component.Description isActive={true}>{role.name}</Component.Description>
                                </Component.HeaderAcordion>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Component.Details>
                                    <Component.Items>
                                        <Component.Item>
                                            <Component.Title isActive={true}>Departamento</Component.Title>
                                            <Component.Description isActive={true}>{role.departament}</Component.Description>
                                        </Component.Item>
                                    </Component.Items>
                                    <Component.Items>
                                        <Component.Item>
                                            <Component.Title isActive={true}>Colaboradores</Component.Title>
                                            <Component.Description isActive={true}>{role.agents_quantity}</Component.Description>
                                        </Component.Item>
                                    </Component.Items>
                                </Component.Details>
                                <Component.Action onClick={handleMobileClick}>
                                    <Component.Icon src={FileIcon.src} />
                                    Ações
                                </Component.Action>
                            </AccordionDetails>
                            <MenuMobile open={openMenu} handleClose={handleMobileClose} isClickToAction={true} />
                        </Accordion>))}
                </>
            }
        </Component.Container>
    )
}