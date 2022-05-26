import * as React from 'react';
import * as Component from './styles'

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';

import FileIcon from '../../assets/file-plus.svg'

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    border: `none`
}));

export function AccordionItem() {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Component.Container>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                sx={{ border: 'none' }}
            >
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
                    <Component.Action>
                        <Component.Icon src={FileIcon.src}/>
                        Ações
                    </Component.Action>
                </AccordionDetails>
            </Accordion>
        </Component.Container>
    )
}