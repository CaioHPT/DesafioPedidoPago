import * as React from 'react';
import * as Component from './styles'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { SearchInput } from '../SearchInput';
import { TableData } from '../Table';
import { TabSelectedContext } from '../../context/TabSelected';

const theme = createTheme({
    palette: {
        primary: {
            main: '#34423D',
        },
        secondary: {
            main: '#A3B8B0',
        }
    },
});

const CustomTab = styled(Tab)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    lineHeight: '14px',
    textTransform: 'none',
    fontWeight: 600,
    letterSpacing: '0px',
    padding: '0px 65px',
    "&:focus": {
        color: theme.palette.primary.main,
    },
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0, mt: 5 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function TabsPanel() {
    const { setNameTabSelected } = React.useContext(TabSelectedContext)

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Component.Container>
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="secondary">
                            <CustomTab label="Colaboradores" {...a11yProps(0)} onClick={() => setNameTabSelected("Colaboradores")}/>
                            <CustomTab label="Cargos" {...a11yProps(1)} onClick={() => setNameTabSelected("Cargos")}/>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <SearchInput textDefault="Pesquise por nome ou cpf" />
                        <TableData/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SearchInput textDefault="Pesquise por cargos" />
                        <TableData/>
                    </TabPanel>
                </Box>
            </ThemeProvider>
        </Component.Container>
    );
}