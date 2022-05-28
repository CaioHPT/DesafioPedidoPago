import * as Component from './styles'
import * as React from 'react';

import { useState } from 'react'
import { MenuMore } from '../Menu';

import IconMore from '../../assets/more-vertical.svg'
import ArrowLeft from '../../assets/arrowLeft.svg'
import ArrowRight from '../../assets/arrowRight.svg'
import { TabSelectedContext } from '../../context/TabSelected';
import { ContributorsDataContext } from '../../context/ContributorsData';
import { RolesDataContext } from '../../context/RolesData';

export function TableData() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    
    const handleClose = (item?: any) => {
        try{
            if (item.target.children[1].textContent.toUpperCase() === 'VER COLABORADOR') {
                setAnchorEl(null);
                window.location.href = "/details/contributors"
            }
            else if (item.target.children[1].textContent.toUpperCase() === 'VER CARGO') {
                setAnchorEl(null);
                window.location.href = "/details/roles"
            }
            else {
                setAnchorEl(null);
            }
        }catch{
            setAnchorEl(null);
        }
    };

    const [{ rolesData }] = React.useContext(RolesDataContext)
    const [{ contributorsData }] = React.useContext(ContributorsDataContext)


    const { nameTabSelected } = React.useContext(TabSelectedContext)

    return (
        <>
            {nameTabSelected === "Colaboradores" ? (
                <>
                    {open ? <MenuMore open={open} anchorEl={anchorEl} handleClick={handleClick}
                        handleClose={handleClose} isContributorsscreen={true} /> : null}
                    <Component.Table >
                        <Component.Thead>
                            <Component.Tr>
                                <Component.Th>Nome Completo</Component.Th>
                                <Component.Th>Departamento</Component.Th>
                                <Component.Th>Cargo</Component.Th>
                                <Component.Th>Unidade</Component.Th>
                                <Component.Th>Status</Component.Th>
                                <Component.Th></Component.Th>
                            </Component.Tr>
                        </Component.Thead>
                        <Component.Tbody>
                            {contributorsData.slice(0, 5).map((contributor) => (
                                <Component.Tr key={contributor.agent_id}>
                                    <Component.Td isActive={contributor.status === 'active' ? true : false}>
                                        <Component.UserNameAndAvatar >
                                            <Component.Avatar src={contributor.image} isActive={contributor.status === 'active' ? true : false} />
                                            <Component.Username>{contributor.name}</Component.Username>
                                        </Component.UserNameAndAvatar>
                                    </Component.Td>
                                    <Component.Td isActive={contributor.status === 'active' ? true : false}>
                                        {contributor.department}
                                    </Component.Td>
                                    <Component.Td isActive={contributor.status === 'active' ? true : false}>
                                        {contributor.role}
                                    </Component.Td>
                                    <Component.Td isActive={contributor.status === 'active' ? true : false}>
                                        {contributor.branch}
                                    </Component.Td>
                                    <Component.Td isActive={contributor.status === 'active' ? true : false}>
                                        <Component.Status isActive={contributor.status === 'active' ? true : false}>
                                            {contributor.status}
                                        </Component.Status>
                                    </Component.Td>
                                    <Component.Td>
                                        <Component.IconMore src={IconMore.src} onClick={handleClick} />
                                    </Component.Td>
                                </Component.Tr>
                            ))}
                        </Component.Tbody>
                    </Component.Table>
                    <Component.FooterTable>
                        <Component.Records>
                            <Component.TextRecords>Mostrando 10 de 50 registros</Component.TextRecords>
                            <Component.Select>
                                <Component.Option>10</Component.Option>
                            </Component.Select>
                        </Component.Records>
                        <Component.Pagination>
                            <Component.DivToBack>
                                <Component.ArrowIcon src={ArrowLeft.src} />
                            </Component.DivToBack>
                            <Component.PaginationSubtitle>1 de 10</Component.PaginationSubtitle>
                            <Component.DivToPrev>
                                <Component.ArrowIcon src={ArrowRight.src} />
                            </Component.DivToPrev>
                        </Component.Pagination>
                    </Component.FooterTable>
                </>
            ) : (
                <>
                    {open ? <MenuMore open={open} anchorEl={anchorEl} handleClick={handleClick}
                        handleClose={handleClose} isContributorsscreen={false} /> : null}
                    <Component.Table >
                        <Component.Thead>
                            <Component.Tr>
                                <Component.Th>Cargo</Component.Th>
                                <Component.Th>Departamento</Component.Th>
                                <Component.Th>Colaboradores</Component.Th>
                                <Component.Th></Component.Th>
                            </Component.Tr>
                        </Component.Thead>
                        <Component.Tbody>
                            {rolesData.slice(0, 5).map((contributor, index) => (
                                <Component.Tr key={index}>
                                    <Component.Td isActive={true}>{contributor.name}</Component.Td>
                                    <Component.Td isActive={true}>{contributor.departament}</Component.Td>
                                    <Component.Td isActive={true}>{contributor.agents_quantity}</Component.Td>
                                    <Component.Td>
                                        <Component.IconMore src={IconMore.src} onClick={handleClick} />
                                    </Component.Td>
                                </Component.Tr>
                            ))}
                        </Component.Tbody>
                    </Component.Table>
                    <Component.FooterTable>
                        <Component.Pagination>
                            <Component.DivToBack>
                                <Component.ArrowIcon src={ArrowLeft.src} />
                            </Component.DivToBack>
                            <Component.PaginationSubtitle>1 de 10</Component.PaginationSubtitle>
                            <Component.DivToPrev>
                                <Component.ArrowIcon src={ArrowRight.src} />
                            </Component.DivToPrev>
                        </Component.Pagination>
                    </Component.FooterTable>
                </>)}
        </>
    );
}
