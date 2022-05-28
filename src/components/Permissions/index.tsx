import styled from '@emotion/styled';

import * as Component from './styles'

import { Checkbox, CheckboxProps } from '@mui/material'

import { RoleDetails } from '../../services/RolesService';


const BpIcon = styled('span')(() => ({
  borderRadius: 6,
  width: 20,
  height: 20,
  boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#1DD195',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
});

function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

export function Permissions({ role }: RoleDetails) {

  return (
    <Component.Box>
      <Component.Field>Lista de permissões</Component.Field>
      <Component.Table >
        <Component.Thead>
          <Component.Tr>
            <Component.Th>Cargo</Component.Th>
            <Component.Th>Ler</Component.Th>
            <Component.Th>Editar</Component.Th>
            <Component.Th>Excluir</Component.Th>
          </Component.Tr>
        </Component.Thead>
        <Component.Tbody>
          {role.grouprules.map((role, index) => (
            <Component.Tr key={index}>
              <Component.Td >
                {role.role}
              </Component.Td>
                  <Component.Td >
                    <BpCheckbox color="success" icon={<BpIcon />}  defaultChecked={role.permissions[0] === "read" ? true : false}/>
                  </Component.Td>
                  <Component.Td >
                    <BpCheckbox color="success" icon={<BpIcon />}  defaultChecked={role.permissions[1] === "write" ? true : false}/>
                  </Component.Td>
                  <Component.Td >
                    <BpCheckbox color="success" icon={<BpIcon />} defaultChecked={role.permissions[1] === "delete" ? true : 
                    role.permissions[2] === "delete" ? true : false}/>
                  </Component.Td>
            </Component.Tr>
          ))}
        </Component.Tbody>
      </Component.Table>
    </Component.Box>
  )
}